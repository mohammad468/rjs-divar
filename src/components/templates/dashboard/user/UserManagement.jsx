import { useQuery } from "@tanstack/react-query";
import { getUsers } from "src/services/user";

function UserManagement() {
  const { data, error, isLoading } = useQuery(["users"], getUsers);
  console.log({ data, error, isLoading });

  return <div>UserManagement</div>;
}

export default UserManagement;
