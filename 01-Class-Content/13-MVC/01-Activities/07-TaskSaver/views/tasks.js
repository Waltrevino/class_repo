module.exports = function(props){
	return `
	<h1>Task Saver</h1>

	<h3>Save the tasks you need to get to later</h3>
	
	<ul>
	${
		props.tasks.map(task => {
			return `
			<li>
				<p>ID: ${task.id}</p>
				<p>Task: ${task.task}</p>
			</li>
			`
		}).join("")
	}
	</ul>
	
	<form action="/" method="POST">
		<textarea type="text" name="task"></textarea>
	
		<button type="submit">Submit</button>
	</form>
	`
}
