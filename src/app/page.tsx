"use client";
import Image from "next/image";
import "../../public/MrChilzy.jpeg";
import styles from "./page.module.css";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const cardMotionVariants = {
    hidden1: {
      scale: 0.8,
      translateX: "-10rem",
      opacity: 0,
    },
    hidden2: {
      scale: 0.8,
      translateY: "-10rem",
      opacity: 0,
    },
    hidden3: {
      scale: 0.8,
      translateX: "10rem",
      opacity: 0,
    },
    show1: {
      scale: 1,
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    show2: {
      scale: 1,
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    show3: {
      scale: 1,
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div className="p-0 m-0 min-h-dvh overflow-hidden flex flex-col align-items-center">
      <div
        style={{ height: "42vh" }}
        className="flex flex-col p-0 align-self-start "
      >
        <motion.div
          style={{ width: "100vw" }}
          className="h-full flex m-0 p-0"
          initial={{ translateX: 0 }}
          animate={{}}
          transition={{ repeat: Infinity, duration: 10 }}
        >
          <motion.div
            style={{ width: "100vw", zIndex: 3 }}
            className={` m-0 p-0 flex justify-center items-center`}
          >
            <motion.img
              src={"/background1.webp"}
              alt="not found"
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 1, 0, 0, 0, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              }}
              className={`${styles.home} h-100 m-0 p-0`}
            />
            <motion.div
              className="m-0 p-0 flex justify-center items-center flex-col"
              style={{
                backgroundColor: "rgba(255,255,255,0.6)",
                position: "absolute",
                height: "42vh",
                width: "100vw",
              }}
            >
              <motion.h1 className={styles.title}>BUILD THE FUTURE</motion.h1>
              <motion.h3 className={styles.secTitle}>
                Pursuing innovative solutions
              </motion.h3>
              <motion.button
                className={`${styles.readMore} m-3 flex justify-between items-center p-0`}
                whileHover={{
                  backgroundColor: "rgba(30, 64, 175, 1)",
                  scale: 0.98,
                  boxShadow: "0 0 0.2rem white",
                }}
                whileTap={{ rotateZ: "1.5deg", rotateX: "1deg", scale: 0.96 }}
              >
                <div className="flex justify-center items-center w-3/4">
                  Read More
                </div>{" "}
                <div
                  style={{ fontSize: "0.7rem" }}
                  className="bg-slate-100 h-100 text-blue-800 flex items-center justify-center w-1/4"
                >
                  &#9658;
                </div>
              </motion.button>
              <nav
                style={{ position: "relative", transform: "translateY(2rem)" }}
                className=" h-2 w-24 align-self-center flex justify-around align-items-center p-0 m-0 mb-2"
              >
                <motion.div
                  style={{
                    height: "0.5rem",
                    width: "0.5rem",
                    borderRadius: "50%",
                    backgroundColor: "rgba(241, 245, 249,1)",
                  }}
                  className={` m-0 p-0`}
                  initial={{
                    backgroundColor: "rgba(241, 245, 249,0)",
                    border: ".2rem solid",
                  }}
                  animate={{
                    backgroundColor: [
                      "rgba(241, 245, 249,1)",
                      "rgba(241, 245, 249,1)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                    ],
                    border: [
                      "0rem solid",
                      "0rem solid",
                      ".1rem solid",
                      ".1rem solid",
                      ".1rem solid",
                      ".1rem solid",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse",
                  }}
                ></motion.div>
                <motion.div
                  style={{
                    height: "0.5rem",
                    width: "0.5rem",
                    borderRadius: "50%",
                  }}
                  className="bg-gray-800 m-0 p-0"
                  initial={{
                    backgroundColor: "rgba(241, 245, 249,0)",
                    border: ".2rem solid",
                  }}
                  animate={{
                    backgroundColor: [
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,1)",
                      "rgba(241, 245, 249,1)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                    ],
                    border: [
                      ".1rem solid",
                      ".1rem solid",
                      "0rem solid",
                      "0rem solid",
                      ".1rem solid",
                      ".1rem solid",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse",
                  }}
                ></motion.div>
                <motion.div
                  style={{
                    height: "0.5rem",
                    width: "0.5rem",
                    borderRadius: "50%",
                  }}
                  className="bg-gray-800 m-0 p-0"
                  initial={{
                    backgroundColor: "rgba(241, 245, 249,0)",
                    border: ".2rem solid",
                  }}
                  animate={{
                    backgroundColor: [
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,0)",
                      "rgba(241, 245, 249,1)",
                      "rgba(241, 245, 249,1)",
                    ],
                    border: [
                      ".1rem solid",
                      ".1rem solid",
                      ".1rem solid",
                      ".1rem solid",
                      "0rem solid",
                      "0rem solid",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </nav>
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              width: "100vw",
              height: "42vh",
              position: "absolute",
              zIndex: 2,
            }}
            className=" m-0 p-0 flex justify-center items-center"
          >
            <motion.img
              src={"/background3.jpg"}
              alt="not found"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              }}
              className={`${styles.home} h-100 m-0 p-0`}
            />
          </motion.div>
          <motion.div
            style={{ width: "100vw", height: "42vh", position: "absolute" }}
            className="bg-gray-800 m-0 p-0 flex justify-center items-center"
          >
            <motion.img
              src={"/background4.jpg"}
              alt="not found"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 0, 1, 1] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              }}
              className={`${styles.home} h-100 m-0 p-0`}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="flex flex-col justify-start items-center w-100">
        <motion.h3 className={`${styles.secTitle} m-4`}>Our Services</motion.h3>
        <motion.div
          className="grid p-0 w-3/5"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: ".5rem",
            minHeight: "30vh",
          }}
        >
          <motion.div
            className="bg-slate-200 h-100 flex flex-col justify-center items-center p-4"
            variants={cardMotionVariants}
            initial="hidden1"
            animate="show1"
          >
            <motion.img
              style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
              whileHover={{
                rotateZ: "360deg",
                scale: 0.9,
                transition: {
                  duration: 0.5,
                },
              }}
              src="/educationIcon.svg"
              alt="eduacation"
            ></motion.img>
            <motion.h3
              style={{ fontSize: "1.2rem" }}
              className={`${styles.secTitle} m-2`}
            >
              Education
            </motion.h3>
            <motion.p
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                color: "rgb(100,100,100)",
                textAlign: "center",
              }}
            >
              skills development that transforms how people work, learn and
              communicate
            </motion.p>
          </motion.div>
          <motion.div
            className="bg-blue-800 h-100 flex flex-col justify-center items-center  p-4"
            variants={cardMotionVariants}
            initial="hidden2"
            animate="show2"
          >
            <motion.img
              style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
              src="/computerIcon.svg"
              alt="Tech"
              whileHover={{
                rotateZ: "360deg",
                scale: 0.9,
                transition: {
                  duration: 0.5,
                },
              }}
            ></motion.img>
            <motion.h3
              className={`${styles.secTitle} m-2`}
              style={{ color: "#e2e8f0", fontSize: "1.2rem" }}
            >
              Technical Solutions
            </motion.h3>
            <motion.p
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                color: "#e2e8f0",
                textAlign: "center",
              }}
            >
              skills development that transforms how people work, learn and
              communicate
            </motion.p>
          </motion.div>
          <motion.div
            className="bg-slate-200 h-100 flex flex-col justify-center items-center  p-4"
            variants={cardMotionVariants}
            initial="hidden3"
            animate="show3"
          >
            <motion.img
              style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
              src="/constructionIcon.svg"
              alt="construction"
              whileHover={{
                rotateZ: "360deg",
                scale: 0.9,
                transition: {
                  duration: 0.5,
                },
              }}
            ></motion.img>
            <motion.h3
              style={{ fontSize: "1.2rem" }}
              className={`${styles.secTitle} m-2`}
            >
              Construction
            </motion.h3>
            <motion.p
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                color: "rgb(100,100,100)",
                textAlign: "center",
              }}
            >
              skills development that transforms how people work, learn and
              communicate
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
