import { addTodo, getAllTodos } from '@/api';
import {afterAll, beforeAll, beforeEach, expect, test} from '@jest/globals';
import { execSync, spawn } from 'node:child_process';
import fs from "node:fs/promises";
import path from "node:path";
import { afterEach } from 'node:test';

const dbFilePath = path.join(__dirname, "..", "..", "data", "data.json");
const dbFilePathTemp = path.join(__dirname, "..", "..", "data", "data-temp.json");
const emptyData = { tasks: [] };

let serverProcess: any;
let serverPid: any;

beforeAll(async () => {
  // ensure original data is preserved: copy current data in a temp file
  await fs.copyFile(dbFilePath, dbFilePathTemp);
});

afterEach(async () => {
  if (serverPid) {
    execSync(`kill -9 ${serverPid}`);
    serverPid = null;
  }
});

afterAll(async () => {
  // restore original data: copy data back from temp file and delete temp file
  await fs.copyFile(dbFilePathTemp, dbFilePath);
  await fs.unlink(dbFilePathTemp);

  if (serverPid) {
    execSync(`kill -9 ${serverPid}`);
    serverPid = null;
  }
});

test('GET all TODOs', async () => {
  const startingData = {
    tasks: [
      {
        id: "1",
        text: "Test 1"
      },
      {
        id: "2",
        text: "Test 2"
      },
      {
        id: "3",
        text: "Test 3"
      },
    ]
  };
  await fs.writeFile(dbFilePath, JSON.stringify(startingData));

  serverProcess = spawn('npm', ['run', 'json-server'], { stdio: 'pipe', shell: true });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const stdout = execSync(`lsof -i :3001 -t`).toString().trim();
  if (stdout) {
    serverPid = parseInt(stdout, 10);
  }

  const actual = await getAllTodos();
  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1"
    },
    {
      id: "2",
      text: "Test 2"
    },
    {
      id: "3",
      text: "Test 3"
    }
  ]);
});

test('add a TODO', async () => {
  await fs.writeFile(dbFilePath, JSON.stringify(emptyData));

  serverProcess = spawn('npm', ['run', 'json-server'], { stdio: 'pipe', shell: true });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const stdout = execSync(`lsof -i :3001 -t`).toString().trim();
  if (stdout) {
    serverPid = parseInt(stdout, 10);
  }

  await addTodo({
    id: "1",
    text: "Test 1"
  });
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1"
    }
  ]);
});