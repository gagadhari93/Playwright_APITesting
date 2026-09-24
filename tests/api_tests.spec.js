import {test, expect} from '@playwright/test';

test('API GET Request', async ({request}) => {

    const response = await request.get('https://reqres.in/api/users/2');
    
    // const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

     expect(response.status()).toBe(200);
    // expect(response.ok()).toBeTruthy();
    const text = await response.text();
    expect(text).toContain('janet');  
    console.log(await response.json());   
})