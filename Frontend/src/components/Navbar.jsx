import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <button
        onClick={logout}
        className="bg-red-500 px-4 py-1 rounded"
      >
        Logout
      </button>
    </nav>
  );
}
