import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";

import GithubIcon from "../components/icons/Github.js";
import TwitterIcon from "../components/icons/Twitter.js";
import LinkedinIcon from "../components/icons/Linkedin.js";

import { getUserAbout } from "../functions/getUserAbout";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "React Developer",
          2000,
          "React Native Developer",
          2000,
          "Front-end Development Enthusiast",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);
export default function Home({owners}) {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-5 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-2 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Musab Bayram
            </h1>

            <div className="mt-2 self-center md:self-start text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-6 space-x-6 md:mt-4 mb-2">
              <motion.a
                href="https://github.com/MusabBayram"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://twitter.com/MBahadirBayram"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://tr.linkedin.com/in/musab-bayram?trk=public_profile_browsemap"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          <div className="md:flex md:items-center mt-3 md:mt-6 bg-slate-200 dark:bg-slate-800 rounded-xl p-5 md:p-8 ">
            <div className="flex  w-full justify-center md:w-1/6">
              <img
                src={owners[0].pphoto.url}
                alt="Me"
                className="md:w-20 md:h-20 w-1/4 h-1/4 rounded-full mb-4 md:m-0"
              />
            </div>
              <div className="w-full flex items-center ">
                <p className="text-sm text-center md:text-left ">
                  Selamlar,
                  <br/>
                  {owners[0].aboutme}
                </p>
              </div>
          </div>
          <div className="flex md:justify-start justify-center">
            <Link href="/projects">
              <a className="mt-5 md:mt-8 text-amber-500 mb-14">Projects</a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const owners = await getUserAbout();
  return {
    props: {
      owners,
    },
  };
};
