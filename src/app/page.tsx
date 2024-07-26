import Image from "next/image";
import Create from "./components/create";
import { useState } from "react";
import Main from "./main";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache:'no-store'
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("something went wrong");
  }
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 bg-gradient-to-r from-indigo-400 to-violet-200">
      <div className= " lg:shadow-2xl lg:bg-gradient-to-r from-indigo-400 to-violet-200 max-w-screen-sm">
        <h1 className="flex justify-center my-4 text-4xl font-bold font-serif ">Task sheet</h1>
        <Main data={data} />
      </div>
    </main>
  );
}
