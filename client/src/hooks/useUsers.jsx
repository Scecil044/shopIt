import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const useUsers = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async (url) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const response = await res.json();
      if (response.success === false) {
        setIsError(response.message);
        setIsLoading(false);
        return;
      }
      setUsers(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error?.message);
      console.log(error?.message);
    }
  };

  const getUser = async (url) => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      if (response.success === false) {
        setIsError(response.message);
        setIsLoading(false);
        return;
      }
      setUsers(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };

  const updateUser = async (userId, data) => {
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (response.success === false) {
        setIsError(response.message);
        setIsLoading(false);
        return;
      }
      setUsers(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };

  const deleteUser = async (url) => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      const response = await res.json();
      if (response.success === false) {
        setIsError(response.message);
        setIsLoading(false);
        return;
      }
      setUsers(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };

  const authenticateUser = async (userData) => {
    try {
      dispatch(loginPendingState());
      setIsLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.success === false) {
        setIsError(data.message);
        setIsLoading(false);
        return;
      }
      dispatch(loginFulfilledState(data));
      if (data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      dispatch(loginRejectedState(error?.message));
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };

  return {
    getUsers,
    updateUser,
    users,
    deleteUser,
    getUser,
    isLoading,
    isError,
    authenticateUser,
  };
};

export default useUsers;
