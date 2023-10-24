interface User {
	id: number;
	name: string;
	email: string;
}

interface Task {
	id: number;
	title: string;
	description: string;
	assignedTo: number | null; // User ID
	completed: boolean;
}

class TaskManager {
	private users: User[] = [];
	private tasks: Task[] = [];

	addUser(user: User) {
		this.users.push(user);
	}

	createTask(task: Task) {
		this.tasks.push(task);
	}

	assignTask(taskId: number, userId: number) {
		const task = this.tasks.find((t) => t.id === taskId);
		const user = this.users.find((u) => u.id === userId);

		if (task && user) {
			task.assignedTo = userId;
			console.log(`Task "${task.title}" assigned to ${user.name}.`);
		}
	}

	completeTask(taskId: number) {
		const task = this.tasks.find((t) => t.id === taskId);

		if (task) {
			task.completed = true;
			console.log(`Task "${task.title}" marked as completed.`);
		}
	}

	listTasks() {
		console.log('Task List:');
		this.tasks.forEach((task) => {
			const assignedUser = task.assignedTo
				? this.users.find((user) => user.id === task.assignedTo)?.name
				: 'Unassigned';

			console.log(
				`Task: ${task.title} | Assigned to: ${assignedUser} | Completed: ${
					task.completed ? 'Yes' : 'No'
				}`
			);
		});
	}
}

const taskManager = new TaskManager();

const user1: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
const user2: User = { id: 2, name: 'Bob', email: 'bob@example.com' };

taskManager.addUser(user1);
taskManager.addUser(user2);

const task1: Task = {
	id: 1,
	title: 'Implement feature X',
	description: 'Write code for feature X',
	assignedTo: null,
	completed: false,
};

const task2: Task = {
	id: 2,
	title: 'Fix bug in component Y',
	description: 'Debug and fix the issue in component Y',
	assignedTo: null,
	completed: false,
};

taskManager.createTask(task1);
taskManager.createTask(task2);

taskManager.assignTask(1, 2);
taskManager.assignTask(2, 1);

taskManager.completeTask(1);

taskManager.listTasks();