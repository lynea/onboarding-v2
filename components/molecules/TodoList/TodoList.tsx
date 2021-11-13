import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';

export type Todo = {
  completed: boolean;
  text: string;
};

type TodoListProps = {
  todos: Array<Todo>;
  handleOnChange: (text: string) => void;
  className?: string;
  visible: boolean;
};

const TodoList: FunctionComponent<TodoListProps> = ({
  todos,
  handleOnChange,
  visible,
  className
}) => {
  const variants = {
    visible: { scaleX: 1 },
    hidden: { scaleX: 0 }
  };

  return (
    <motion.div
      style={{ originX: 1 }}
      className={`${className} flex justify-between flex-col  bg-white filter drop-shadow-lg   w-3/12  pt-16 px-4 pb-4 rounded-b text-purple-900 fixed top-0 right-0`}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {todos.map((todo, index) => (
        <div key={index + todo.text} className=" flex justify-between">
          <input
            className="cursor-pointer"
            type="checkbox"
            id={`checkbox-${index}`}
            name={todo.text}
            value={todo.text}
            checked={todo.completed}
            onChange={() => handleOnChange(todo.text)}
          />
          <label className="cursor-pointer" htmlFor={`checkbox-${index}`}>
            {todo.text}
          </label>
        </div>
      ))}
    </motion.div>
  );
};

export default TodoList;
