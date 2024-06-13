import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTask } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = DUMMY_TASKS;

    getUserTasks(userId: string) {
        return this.tasks.filter(t => t.userId === userId);

    }

    addTask(newTask: NewTask, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate
        });
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter((task) => task.id != taskId);
    }

}