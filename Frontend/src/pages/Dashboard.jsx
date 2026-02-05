import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const profileRes = await API.get("/me");
    const taskRes = await API.get("/tasks");
    setProfile(profileRes.data);
    setTasks(taskRes.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await API.post("/tasks", { title });
    setTitle("");
    fetchData();
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold">
          Welcome, {profile.name}
        </h2>

        <div className="mt-4">
          <input
            className="border p-2 mr-2"
            placeholder="New Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Add
          </button>
        </div>

        <ul className="mt-4">
          {tasks.map((task) => (
            <li key={task._id} className="border p-2 mb-2">
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
