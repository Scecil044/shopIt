import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const useUsers = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUsers = async (searchTerm) => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/users?searchTerm=${searchTerm}`);
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

  const getUser = async (userId) => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/users/${userId}`);
      const response = await res.json();
      if (response.success === false) {
        setIsError(response.message);
        setIsLoading(false);
        return;
      }
      setUser(response);
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

  const deleteUser = async (userId) => {
    try {
      const res = await fetch(`/api/users/${userId}`, {
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

  const registerUser = async (formData) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setIsLoading(false);
        setIsError(data?.message);
        toast({
          title: "Oops! something went wrong.",
          description: data?.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
      if (data.success !== false) {
        setIsLoading(false);
        setIsError(false);
        toast({
          title: "Registration successful.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        await getUsers();
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(error?.message);
      toast({
        title: "Oops! something broke down.",
        description: "Check you connection ot refresh.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return {
    getUsers,
    registerUser,
    updateUser,
    users,
    deleteUser,
    getUser,
    isLoading,
    isError,
    authenticateUser,
    user,
  };
};

export default useUsers;
