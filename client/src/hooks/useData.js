import { useState } from "react";

const useData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      if (response.success === false) {
        setIsError(response.message);
        setIsLoading(false);
        return;
      }
      setData(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };

  const findData = async (url) => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      if (response.success === false) {
        setIsError(response.message);
        setIsLoading(false);
        return;
      }
      setData(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };

  const updateData = async (url, data) => {
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
      setData(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };

  const deleteData = async (url) => {
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
      setData(response);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      console.log(error.message);
    }
  };
  return {
    getData,
    updateData,
    data,
    deleteData,
    findData,
    isLoading,
    isError,
  };
};

export default useData;
