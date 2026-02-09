import { test, expect } from '@playwright/test';

test.describe('API Assignment - Verification', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    test('Create and Update User Flow', async ({ request }) => {
        // 1. Create a user (POST)
        const postResp = await request.post(`${baseUrl}/users`, {
            data: { name: "Ankit", username: "SDET" }
        });
        expect(postResp.status()).toBe(201); 
        const postBody = await postResp.json();
        
        // VALIDATION: Check that the POST response contains the data we sent
        expect(postBody.name).toBe("Ankit");
        const userId = postBody.id; 
        console.log(`User created successfully with ID: ${userId}`);

        // 2. Get User Details (GET)
        // Since mock APIs don't save data, we validate that we CAN fetch a user
        const getResp = await request.get(`${baseUrl}/users/1`); 
        expect(getResp.status()).toBe(200);
        const getBody = await getResp.json();
        console.log(`Fetched existing user: ${getBody.name}`);

        // 3. Update user's name (PATCH)
        const patchResp = await request.patch(`${baseUrl}/users/1`, {
            data: { name: "Ankit Updated" }
        });
        expect(patchResp.status()).toBe(200);
        const patchBody = await patchResp.json();
        
        // VALIDATION: Check that the PATCH response reflects our change
        expect(patchBody.name).toBe("Ankit Updated");
        console.log(`PATCH successful. New Name: ${patchBody.name}`);
    });
});