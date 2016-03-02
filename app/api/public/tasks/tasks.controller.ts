import { Request, Response } from 'express'

export class TasksController {
    
    getAll(request: Request, response: Response){
        response.send([
            new Task('task 1', 'goto shop')
        ]);
    }
}

class Task{
    constructor(public name: string, public description: string){
    }
}