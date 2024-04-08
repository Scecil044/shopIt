import { useState } from "react";
import { app } from "../../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import ComponentLoader from "../admin/ComponentLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../../redux/userSlice";

export default function Oauth() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const response = await signInWithPopup(auth, provider);

    try {
      setIsLoading(true);
      dispatch(loginPendingState());

      const res = await fetch("/api/auth/googleAuth", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: response.user.displayName,
          profilePicture: response.user.photoURL,
          email: response.user.email,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(loginRejectedState(data?.message));
        setIsLoading(false);
        setIsError(data?.message);
        return;
      }
      dispatch(loginFulfilledState(data));
      navigate("/");
    } catch (error) {
      dispatch(loginRejectedState(error?.message));
      setIsLoading(true);
      setIsError(error?.message);
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogleAuth}
        type="button"
        className="flex items-center justify-center gap-2 w-full"
      >
        <img
          src="/google.svg"
          alt="google icon"
          className="h-5 w-5 object-cover"
        />
        <h2 className="hover:underline transition-all duration-300 visited:text-blue-500">
          Continue With Google
        </h2>
      </button>

      {isLoading && <ComponentLoader />}
    </div>
  );
}
