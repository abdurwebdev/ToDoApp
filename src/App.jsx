import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  let renderText = "No Tasks Available";
  if (mainTask.length > 0) {
    renderText = mainTask.map((item, index) => {
      return (
        <div className='flex items-center mb-5 justify-between'>
          <h5 className='text-xl font-bold '>{item.title}</h5>
          <h6 className='text-xl font-medium'>{item.desc}</h6>
          <button onClick={() => { deleteHandler(index) }} className='text-xl bg-red-500 px-3 py-2 rounded'>Delete</button>
        </div>
      )
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }])
    setTitle("");
    setDesc("");
  }
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }
  return (
    <>
      <div className='w-full h-12 bg-black text-white text-center'>
        <h1 className='py-2 font-bold uppercase text-2xl'>TO DO APP</h1>
      </div>
      <form onSubmit={submitHandler} className='w-[70%] mx-auto flex items-center justify-center py-5'>
        <div className='flex items-center gap-x-16 justify-between'>
          <input className='px-3 py-2 border rounded border-black' value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text" placeholder='Enter Task Here' />
          <input className='px-3 py-2 border-black border rounded' type="text" value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
            }}
            placeholder='Enter Description Here' />
          <button className='rounded px-3 py-2 bg-green-400 text-white'>ADD</button>
        </div>
      </form>
      <div className='w-[47%] mx-auto'>
        {renderText}
      </div>
    </>
  )
}

export default App