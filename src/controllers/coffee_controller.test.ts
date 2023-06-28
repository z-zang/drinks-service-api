import request from 'supertest';
import { app } from '../app';

describe('GET /coffee should return correct object', () => {
    it('should return default coffee name for unspecified query', async () => {
        const res = await request(app)
        .get('/coffee')

        expect(res.statusCode).toEqual(200);

        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    })
    
    it('should return query name for coffee name for specified query', async () => {
        const res = await request(app)
        .get('/coffee')
        .query({ coffeeName: 'cappucino' });

        expect(res.statusCode).toEqual(200);

        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'cappucino',
        });
    })

    it('should return query name for coffee name for specified query', async () => {
        const res = await request(app)
        .get('/coffee')
        .query({ coffeeName: 'Latte' });

        expect(res.statusCode).toEqual(200);

        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    })

});