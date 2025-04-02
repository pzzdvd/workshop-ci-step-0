"use client";

import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td className='w-full' data-testid="todo-name-label">{task.text}</td>
    </tr>
  );
};

export default Task;
