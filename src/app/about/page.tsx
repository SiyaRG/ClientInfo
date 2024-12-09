"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
export default function About() {
  return (
    <>
      <motion.div className="p-0 m-0 text-center flex flex-col justify-center items-center">
        <motion.div
          className={`w-100 ${styles.headerDiv} flex flex-col flex-center items-center`}
        >
          <motion.img
            className={`${styles.aboutImage} h-100 w-100 m-0 p-0 `}
            src="/background8.jpeg"
            alt="vision"
          />
          <motion.div
            style={{ maxHeight: "35vh" }}
            className="absolute w-100 h-100 flex justify-center items-center"
          >
            <motion.h3
              className={`${styles.title} `}
              style={{ color: "rgb(100,100,100)" }}
            >
              <span style={{ color: "rgb(150,150,150)" }}>BRING</span> THE
              VISION
            </motion.h3>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            color: "rgb(100, 100, 100)",
            fontFamily: "'Roboto Condensed', sans-serif",
          }}
          className={`flex justify-center w-100 p-2 ${styles.aboutInfo}`}
        >
          <motion.div className="bg-slate-200 m-1 w-2/5 text-left h-100 flex flex-col justify-center p-2">
            <motion.h3 className={`${styles.secTitle}`}>Who Are We?</motion.h3>
            <br />
            <motion.h4
              style={{ fontStyle: "italic" }}
              className={`${styles.terTitle}`}
            >
              Build The Future
            </motion.h4>
            <motion.p>
              At Chilzy Holdings, we are dedicated to building a brighter future
              by promoting skills development and delivering transformative
              digital services. <br />
              <br />
              We value teamwork, innovation, and quality, striving to provide
              exceptional services while fostering a culture that values every
              individual and encourages collaboration. Together, we aim to
              redefine how people work, learn, and communicate.
            </motion.p>
            <motion.h4
              style={{ fontStyle: "italic" }}
              className={`${styles.terTitle}`}
            >
              Bring the Vision
            </motion.h4>
            <motion.p>
              At Chilzy Holdings, we empower growth and connection through
              skills development and innovative digital solutions. Committed to
              quality and collaboration, we strive to create a thriving future
              for all.
            </motion.p>
            <br />
          </motion.div>
          <motion.div
            className={`bg-slate-200 m-1 w-2/5 h-100 p-2 flex justify-center`}
          >
            <motion.div className={`${styles.trai} `}>
              <motion.div
                className="flex flex-col p-1 bg-slate-100 "
                whileHover={{
                  backgroundColor: "rgb(29, 78, 216)",
                  color: "rgb(226 232 240)",
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{ borderRadius: ".1rem" }}
              >
                <motion.img
                  src="/trust.svg"
                  alt="trust"
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    rotateZ: "360deg",
                    scale: 0.9,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                />
                <motion.h5 style={{ fontSize: "1.2rem" }}>Trust</motion.h5>
                <br />
                <motion.p>
                  Transparency and adherence to ethical practices.{" "}
                </motion.p>
              </motion.div>{" "}
              <motion.div
                className="flex flex-col p-1 bg-slate-100"
                whileHover={{
                  backgroundColor: "rgb(29, 78, 216)",
                  color: "rgb(226 232 240)",
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{ borderRadius: ".1rem" }}
              >
                <motion.img
                  src="/respect.svg"
                  alt="respect"
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    rotateZ: "360deg",
                    scale: 0.9,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                />
                <motion.h5 style={{ fontSize: "1.2rem" }}>Trust</motion.h5>
                <br />
                <motion.p>
                  Transparency and adherence to ethical practices.{" "}
                </motion.p>
              </motion.div>{" "}
              <motion.div
                className="flex flex-col p-1 bg-slate-100"
                whileHover={{
                  backgroundColor: "rgb(29, 78, 216)",
                  color: "rgb(226 232 240)",
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{ borderRadius: ".1rem" }}
              >
                <motion.img
                  src="/accountability1.svg"
                  alt="accountability"
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    rotateZ: "360deg",
                    scale: 0.9,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                />
                <motion.h5 style={{ fontSize: "1.2rem" }}>Trust</motion.h5>
                <br />
                <motion.p>
                  Transparency and adherence to ethical practices.{" "}
                </motion.p>
              </motion.div>{" "}
              <motion.div
                className="flex flex-col p-1 bg-slate-100"
                whileHover={{
                  backgroundColor: "rgb(29, 78, 216)",
                  color: "rgb(226 232 240)",
                  transition: {
                    duration: 0.5,
                  },
                }}
                style={{ borderRadius: ".1rem" }}
              >
                <motion.img
                  src="/innovation.svg"
                  alt="innovation"
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    rotateZ: "360deg",
                    scale: 0.9,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                />
                <motion.h5 style={{ fontSize: "1.2rem" }}>Innovation</motion.h5>
                <br />
                <motion.p>
                  Driving growth and innovation, creating a connected future
                  through skills and digital solutions.{" "}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
