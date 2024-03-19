import Input from './components/Input'
import { useState } from 'react'
import Cards from './components/Cards'

function App() {

  const [taskState, setTaskState] = useState(
    {
      selectedTaskId: undefined,
      task: [],
    }
  )

  //! Adding a task to Object with the reference sended by the on Add function of input
  const handleAddTask = (taskData) => {
    setTaskState(prevState => {
      const newTask = {
        ...taskData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedTaskId: undefined,
        task: [...prevState.task, newTask]
      }
    })
  }

  console.log(taskState);

  return (
    // <div className='flex flex-col items-center  bg-[#0B1304]/80'>
    //   <main className="m-16 flex gap-8 rounded-xl">
    //     {/* //! using custom input component */}
    //     <Input onAdd={handleAddTask} />
    //   </main>
    //   <section className='flex justify-between gap-4'>
    //     <Cards/>
    //     <Cards/>
    //   </section>
    // </div>
    <div className=' h-screen flex flex-col items-center  bg-[#0B1304]/80 p-5'>
      <header className='w-1/3 flex justify-center bg-violet-500 rounded-md'>
        <Input />
      </header>

      <main className=' flex justify-center gap-4 w-[90%] my-8'>
        <Cards title="TO DO" />
        <Cards title="Completed" />
      </main>
    </div>

  )
}

export default App
