require('should');
import { Task } from './tasks';

describe('a task model', () => {
    var task: Task = new Task('name', 'description');

    it('has a name', () => {
        task.name.should.eql('name');
    });
    
    it('has a description', () => {
        task.description.should.eql('description');
    });
});
