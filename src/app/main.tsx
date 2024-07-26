"use client";
import { useState } from "react";
import Create from "./components/create";
import { useRouter } from "next/navigation";

const Main = ({ data }: any) => {
    const Router = useRouter();
  const [obj, setObj] = useState({});

  

  async function handleDelete(id:any) {
    await fetch('http://localhost:3000/api/todos',{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({id})
    })
    Router.refresh();
    
}

  return (
    <div className="flex min-h-screen  max-h-96 flex-col items-center gap-5 overflow-y-scroll  md:p-14">
      <Create obj={obj}  />
      {data.map((val: any) => (
        <div key={val.id} className="w-full  " >
            <div className="grid grid-cols-2 gap-14">
                <div className="overflow-hidden">
                <p className="" >{val.task}</p>
                </div>
            
          <div className="flex gap-2">
            <button
              className="text-gray-700 bg-yellow-500 hover:bg-yellow-700 px-3 py-2 rounded-xl h-12 "
              onClick={() => setObj(val)}
            >
              Edit
            </button>
            <button className="text-gray-700 bg-red-500 hover:bg-red-700 px-3 py-2 rounded-xl h-12" onClick={()=>handleDelete(val.id)}>
              Delete
            </button>
          </div>
            </div>
          
        </div>
      ))}
      
    </div>
  );
};

export default Main;
