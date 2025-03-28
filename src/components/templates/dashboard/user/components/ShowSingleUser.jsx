import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";

function ShowSingleUser({ user }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 m-3 rounded-lg">
      <div className="flex gap-x-8">
        <span className="font-extralight">
          نام و نام خانوادگی: <b>{user.fullName}</b>
        </span>
        <span className="font-extralight">
          شماره موبایل: <b>{user.mobile}</b>
        </span>
      </div>
      <div className="flex gap-x-3">
        <DeleteBtn userId={user._id} />
        <UpdateBtn />
      </div>
    </div>
  );
}

export default ShowSingleUser;
