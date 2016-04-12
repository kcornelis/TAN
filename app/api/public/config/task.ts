import { Express, Request, Response } from 'express'
import { TasksController } from '../controllers/task'

export class TasksRoutes {
    tasksController: TasksController = new TasksController();
    
    constructor(express: Express){
        express.route('/api/public/tasks').get((req, res) => { this.tasksController.getAll(req, res); });
        express.route('/api/public/tasks/count').get((req, res) => { this.tasksController.getCount(req, res); });
        express.route('/api/public/tasks').post((req, res) => { this.tasksController.create(req, res); });
    }
}
