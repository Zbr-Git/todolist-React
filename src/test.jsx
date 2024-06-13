<div class="antialiased bg-slate-200 text-slate-700 mx-2">
    <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1 class="text-3xl font-medium">Tasks list</h1>
            </div>
            <div class="inline-flex space-x-2 items-center">
                <a href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="text-sm font-medium hidden md:block">Urgent</span>                     
                </a>
                <a href="#" class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg> 
                      <span class="text-sm hidden md:block">Latest</span>                    
                </a>
            </div>
        </div>
        <p class="text-slate-500">Hello, here are your latest tasks</p>

  
        <p class="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
    </div>
    
</div>



return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Add Item
          </label>
          <div className="mt-2">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="button"
            onClick={() => addTask(text)}
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );