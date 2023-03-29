import { test, expect } from "./test";

test("Handles request that has been closed being passed to fetch", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const networkButton = page.getByText("Click to make network request");
  const message = page.getByTestId("Message");
  expect(await message.textContent()).toBe("No network call yet");
  await networkButton.click();
  await new Promise<void>((res) => setTimeout(res, 2000));
  expect(await message.textContent()).toBe('{"Message":"Hello World!"}');
});
