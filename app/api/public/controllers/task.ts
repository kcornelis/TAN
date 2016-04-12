import { Express, Request, Response } from 'express'
import { Task } from '../../../domain/task'

export class TasksController {
    
    tasks: Task[] = [];
    
    getAll(request: Request, response: Response){
        response.send(this.tasks);
    }
    
    getCount(request: Request, response: Response){
        response.send({ count: this.tasks.length });
    }
    
    create(request: Request, response: Response){
        this.tasks.push(new Task(request.body.name, request.body.description));
    }
}
