import { test, expect } from "@playwright/test";

test("API GET Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");

  // const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);
  // expect(response.ok()).toBeTruthy();
  const text = await response.text();
  expect(text).toContain("janet");
  console.log(await response.json());
});

test("API POST Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "gagani",
      job: "software engineer",
    },
  });
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("gagani");
  console.log(await response.json());
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Chamara",
      job: "software engineer",
    },
  });
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Chamara");
  console.log(await response.json());
});

test("API DELET Request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");

  expect(response.status()).toBe(204);
  
});
