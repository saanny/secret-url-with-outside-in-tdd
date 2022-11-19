import supertest from "supertest";
import server from '../../src/server';
const request = supertest(server);

describe('Get Secret integration tests', () => {

    it('should return an error when the urlId is too short', async () => {
        const response = await request.get('/api/v1/secrets/2short');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            name: "UrlIdValidationError",
            message: "UrlId is too short"
        })
    });

    it('should return an error when the secret dose not exist in the system', async () => {
        const response = await request.get('/api/v1/secrets/2short4123512352nonexistsecrets');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            name: "SecretNotFoundError",
            message: "Secret was not found"
        })
    });
    xit('should retrive a secret from the system', () => {

    });




});
