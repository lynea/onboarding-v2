import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import TextBox from '../components/atoms/TextBox/TextBox.component';
import robot from '../public/robot.svg';
import { motion } from 'framer-motion';
import TodoList, { Todo } from '../components/molecules/TodoList/TodoList';
import { useState } from 'react';
import IconButton from '../components/atoms/IconButton/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faRobot } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  const [mockTodos, setMockTodos] = useState<Array<Todo>>([
    { completed: true, text: 'add to bash profile' },
    { completed: false, text: 'ask rene to provide stuf' }
  ]);

  const [showTodos, setShowTodos] = useState(false);

  const handleShowTodoList = () => {
    setShowTodos(!showTodos);
  };

  const handleTodoToggle = (text: string) => {
    const newArr = [...mockTodos];

    for (const todo of newArr) {
      if (todo.text === text) {
        todo.completed = !todo.completed;
        break;
      }
    }

    setMockTodos(newArr);
  };

  return (
    <div>
      <Head>
        <title>Mijndomein onboarding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto grid grid-cols-12 gap-4">
        <h1 className="text-9xl font-bold col-span-full text-center mt-10">
          Mijndomein
        </h1>
        <h2 className="text-6xl font-bold col-span-full text-center">
          Onboarding
        </h2>
        <motion.div
          className="col-start-4 col-end-10 mt-10"
          animate={{ xHeight: [0, 100] }}
          transition={{
            ease: 'easeIn',
            duration: 2
          }}
        >
          <TextBox>herro</TextBox>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -1, 1],
            x: [1000, 0],
            scale: [0, 1]
          }}
          transition={{
            ease: 'easeIn',
            duration: 1.5
          }}
          className="col-span-full flex justify-center"
        >
          <Image src={robot} alt="robot" />
        </motion.div>
      </main>

      <IconButton
        handleClick={handleShowTodoList}
        icon={<FontAwesomeIcon icon={showTodos ? faTimesCircle : faRobot} />}
      />
      <TodoList
        handleOnChange={handleTodoToggle}
        todos={mockTodos}
        visible={showTodos}
      />

      <footer></footer>
    </div>
  );
};

export default Home;
