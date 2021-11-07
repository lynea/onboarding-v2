import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import TextBox from "../components/atoms/TextBox/TextBox.component";
import robot from "../public/robot.svg";
import { motion } from "framer-motion";

const Home: NextPage = () => {
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
          animate={{ height: [1, 1.2, 0] }}
        >
          <TextBox>herro</TextBox>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -1, 1],
          }}
          transition={{
            ease: "easeIn",
            duration: 2,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="col-span-full flex justify-center"
        >
          <Image src={robot} alt="robot" />
        </motion.div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
