import { test, expect } from '@playwright/test';
import fs from "node:fs/promises";
import path from "node:path";

const dbFilePath = path.join(__dirname, "..", "..", "data", "data.json");
const dbFilePathTemp = path.join(__dirname, "..", "..", "data", "data-temp.json");
const emptyData = { tasks: [] };

test.beforeAll(async () => {
  // ensure data is empty when tests starts: copy current data in a temp file and reset data
  await fs.copyFile(dbFilePath, dbFilePathTemp);
  await fs.writeFile(dbFilePath, JSON.stringify(emptyData));
});

test.afterAll(async () => {
  // restore original data: copy data back from temp file and delete temp file
  await fs.copyFile(dbFilePathTemp, dbFilePath);
  await fs.unlink(dbFilePathTemp);
});

test('create + edit + delete todo', async ({ page }) => {
  // create
  await page.goto('http://localhost:3000/');
  await page.getByTestId('add-todo').click();
  await expect(page.getByTestId('todo-text-add')).toBeVisible();
  await page.getByTestId('todo-text-add').fill('TODO TEST 1');
  await page.getByTestId('save-add-todo').click();
  await expect(page.getByTestId('todo-name-label')).toBeVisible();
});

