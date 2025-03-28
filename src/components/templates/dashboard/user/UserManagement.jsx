import { useQuery } from "@tanstack/react-query";
import { getUsers } from "src/services/user";
import ShowSingleUser from "./components/ShowSingleUser";

function UserManagement() {
  const { data, error, isLoading } = useQuery(["users"], getUsers);
  console.log({ data, error, isLoading });

  return (
    <div>
      {
        isLoading && <p>در حال دریافت لیست کاربران</p>
      }
      {data?.data?.map((user) => (
        <ShowSingleUser key={user._id} user={user} />
      ))}
    </div>
  );
}

export default UserManagement;
