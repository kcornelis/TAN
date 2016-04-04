import { Express, Request, Response } from 'express'
import { TasksController } from '../controllers/task'

export class TasksRoutes {
    tasksController: TasksController = new TasksController();
    
    constructor(express: Express){
        express.route('/api/public/tasks').get(this.tasksController.getAll);
        express.route('/api/public/tasks/count').get(this.tasksController.getCount);
        express.route('/api/public/tasks').post(this.tasksController.create);
    }
}
