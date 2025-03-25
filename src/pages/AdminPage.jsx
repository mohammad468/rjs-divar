import CategoryForm from "src/components/templates/CategoryForm";
import CategoryList from "src/components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="flex gap-x-3">
      <CategoryForm />
      <CategoryList/>
    </div>
  );
}

export default AdminPage;
