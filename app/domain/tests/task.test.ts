import 'should';
import { Task } from '../task';

describe('a task', () => {
    var task: Task = new Task('name', 'description');

    it('has a name', () => {
        task.name.should.eql('name');
    });
    
    it('has a description', () => {
        task.description.should.eql('description');
    });
});
