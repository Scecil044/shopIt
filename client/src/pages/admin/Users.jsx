import { useEffect } from "react";
import useData from "../../hooks/useData";

export default function Users() {
  const { getData, data } = useData();

  
  useEffect(() => {
    getData("/api/users/");
  }, []);
  return <div>Users</div>;
}
