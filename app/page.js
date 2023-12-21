"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [mainTask, setmainTask] = useState([])
  const SubmitHandler = (e) =>{
    e.preventDefault()
  setmainTask([...mainTask, {title}]);
  console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
  }


  let renderTask = <h2>No Task Availble</h2>

  renderTask = mainTask.map((t,i)=>{
  return <li key={i}>
  <div className="flex justify-between mb-5">
   <h5 className="text-2xl font-semibold">{t.title}</h5>
  </div>
  <button
  onClick={()=>
  deleteHandler(i)}>Delete</button>
</li>

  })

  return (
    <>
    <h1 className='text-center bg-black text-white px5l text font-bold'>My Todo List</h1>
   <form onSubmit={SubmitHandler}>
    <input type='text' className="text-2x1 border-zinc-800 border-4 m-8 ppy-2"
    placeholder='Enter  task here'
    
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)

    }}
    
    />
    
    <button className="bg-black text-white font-bold px-4 py-2 rounded ">Add Task</button>
    </form> 
    <hr />
    <div className='p-8 bg-slate-200'>
     <ul>
      {renderTask}
     </ul>
     </div>
    </>
    
  )
}

export default page


