import { Express, Request, Response } from 'express'

export class TasksRoutes {
    tasksController: TasksController = new TasksController();
    
    constructor(express: Express){
        express.route('/api/public/tasks').get(this.tasksController.getAll);
        express.route('/api/public/tasks/count').get(this.tasksController.getCount);
        express.route('/api/public/tasks').post(this.tasksController.create);
    }
}

export class TasksController {
    
    tasks: Task[] = [];
    
    getAll(request: Request, response: Response){
        response.send(this.tasks);
    }
    
    getCount(request: Request, response: Response){
        response.send(this.tasks.length);
    }
    
    create(request: Request, response: Response){
        this.tasks.push(new Task(request.body.name, request.body.description));
    }
}

class Task{
    constructor(public name: string, public description: string){ }
}