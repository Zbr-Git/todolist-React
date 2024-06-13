  import { useEffect, useState } from "react";
  import { v4 as uuidv4 } from "uuid";
  import TodoItem from "../TodoItem/TodoItem";

  function TodoList() {
    const [tasks, setTasks] = useState(() => {
      // Retrieve tasks from localStorage (if available) and parse them
      const storedTasks = localStorage.getItem("tasks");
      const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
      return parsedTasks;
    });
    
    // Optional: useEffect to update localStorage on task changes
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    

    const [text, setText] = useState("");

    const addTask = (text) => {
      if (text.length !== 0) {
        const newTask = { id: uuidv4(), text, completed: false };
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        setText("");
      }
    };

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
      // localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const toggleCompleted = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };

    return (
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-medium">Tasks list</h1>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <a href="#" className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
              <span className="text-sm font-medium hidden md:block">Urgent</span>
            </a>
            <a href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg> 
                      <span class="text-sm hidden md:block">Latest</span>                    
                </a>
          </div>
        </div>
        <p className="text-slate-500">Hello, here are your latest tasks</p>
  
        <div id="tasks" className="my-5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent hover:bg-slate-100 transition ease-linear duration-150"
            >
              <div className="inline-flex items-center space-x-2">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                </div>
                <div className={task.completed ? 'text-slate-500 line-through' : 'text-slate-500'}>
                  {task.text}
                </div>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg> </div>
            </div>
          ))}
        </div>
  
        {/* Your existing input and button elements with Tailwind CSS classes */}
      </div>
    );
  }

  export default TodoList;
