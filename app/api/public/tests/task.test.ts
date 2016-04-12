import * as request from 'supertest';

describe('public api: task', () => {

    it('can get the task count', (done) => {
        request('http://localhost:3010')
            .get('/api/public/tasks/count')
            .expect(200)
            .end(done);
    });
});
