import { useState } from "react";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

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

  const updateUser = async (url, data) => {
    try {
      const res = await fetch(url, {
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
  return {
    getUsers,
    updateUser,
    users,
    deleteUser,
    getUser,
    isLoading,
    isError,
  };
};

export default useUsers;
