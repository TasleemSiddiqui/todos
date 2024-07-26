"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Create = ({ obj }: any) => {
    const router =useRouter();

  
  const [task, setTask] = useState("");
  const [id, setId] = useState<number|null>(null);
  useEffect(() => {
    setId(obj.id);
    setTask(obj.task);
  }, [obj]);

  async function handleSubmit() {
    try {
      await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });
      console.log(task);
      setTask("");
      router.refresh();
    } catch (error) {
      console.error("Error:", (error as { message: string }).message);
    }
  }
  async function handleUpdate() {
    try {
      await fetch("http://localhost:3000/api/todos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id,task }),
      });
      console.log(task);
      setTask("");
      setId(null)
      router.refresh();
    
    } catch (error) {
      console.error("Error:", (error as { message: string }).message);
    }
  }

  return (
    <div className="flex gap-2 ">
      <input
        value={task}
        placeholder="text......."
        onChange={(e) => setTask(e.target.value)}
        className="h-12 outline-blue-500 p-2 border border-gray-500 rounded-lg"
      />
      {id ? (
        <button
          className="text-gray-700 bg-yellow-500 hover:bg-yellow-700 px-3 py-2 rounded-xl"
          onClick={handleUpdate}
        >
          Edit
        </button>
      ) : (
        <button
          className="text-gray-700 bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Create;
