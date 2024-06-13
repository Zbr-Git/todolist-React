import { useEffect } from "react"

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
	const handleChange = () => {
		toggleCompleted(task.id)

	}

 
	return (
		<div>
			
			<div className="relative flex gap-x-3">
				
				<div className="flex h-6 items-center">
					
					<input
						type="checkbox"
						name=""
						checked={task.completed}
						onChange={handleChange}
						className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
				</div>
				<div className="text-sm leading-6">
					
					<label htmlFor="comments" className="font-medium text-gray-900">
						
						{task.completed ? 'Done' : 'Pending'}
					</label>
				</div>
			</div>
			<p className={task.completed ? 'line-through' : ''}>{task.text}</p>
			<button onClick={() => deleteTask(task.id)}>Delete</button>
		</div>
	)
}
export default TodoItem
