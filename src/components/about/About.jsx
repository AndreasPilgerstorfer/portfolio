import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import { SectionWrapper } from "../../hoc/index.js";
import { fadeIn, textVariant } from "../../utils/motion.js";
import "./about.scss";
import { linkedin, github } from "../../assets";

const About = () => {
    return (
        <div className="mb-10">
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>About.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Allow me to share some insights into my personal background, passions, and noteworthy
                references. Delving into my unique journey, I'm eager to highlight a tapestry
                of personal facts, references, and aspects that shape my character.
            </motion.p>


            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-8 grid grid-cols-1 md:grid-cols-12 gap-4'
            >
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="rounded-lg md:col-span-5 about__image-container">
                    <div className="about__image about__image--running p-8">
                        <p><strong>Running</strong></p>
                        <br/>
                        <ul>
                            <li>
                                My passion for running is an enduring commitment fueled by the thrill of competing,
                                having already conquered numerous half marathons and 5km races.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="rounded-lg md:col-span-7 about__image-container">
                    <div className="about__image about__image--plane p-8">
                        <p><strong>Travelling the world</strong></p>
                        <br/>
                        <ul>
                            <li>
                                I find great joy in exploring diverse cities and cultures, savoring unique experiences,
                                flavors, and stories in every new destination.
                            </li>
                        </ul>
                    </div>
                </motion.div>


                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="bg-black-100 rounded-lg p-4 md:col-span-4">
                    <p><strong>Tennis</strong></p> <br/>
                    <span>
                        Playing tennis with friends brings me sheer joy and camaraderie, blending the thrill of the game with cherished moments of togetherness.
                    </span>
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="rounded-lg md:col-span-4 about__image-container">
                    <div className="about__image about__image--small about__image--table-tennis p-5">
                        <p><strong>Table tennis</strong></p> <br/>
                        <br/>
                          As a competitive table tennis player for the past 13 years, I've honed my skills and competed in championships, clinching victories in several tournaments along the way.
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="bg-black-100 rounded-lg p-4 md:col-span-4">
                    <p><strong>Cycling</strong></p> <br/>
                    <span>
                        Cycling's serene and rhythmic nature brings me immense calm and peace, making it a cherished activity.
                    </span>
                </motion.div>


                <motion.a
                    variants={fadeIn("", "", 0.1, 1)}
                    href="https://www.linkedin.com/in/andreas-pilgerstorfer-60656b186/"
                   target="_blank" rel="noopener"
                   className="bg-black-100 hover:bg-blue-900 rounded-lg p-4 md:col-span-6 flex justify-center items-center">
                    <img src={linkedin} alt="Linkedin" className="h-10 mr-4"/>
                    <span>Linkedin</span>
                </motion.a>
                <motion.a
                    variants={fadeIn("", "", 0.1, 1)}
                    href="https://github.com/AndreasPilgerstorfer"
                   target="_blank" rel="noopener"
                   className="bg-black-100 hover:bg-gray-900 rounded-lg p-4 md:col-span-6 flex justify-center items-center">
                    <img src={github} alt="Github" className="h-10 mr-4"/>
                    <span>Github</span>
                </motion.a>


                <motion.a
                    variants={fadeIn("", "", 0.1, 1)}
                    href="https://www.youtube.com/watch?v=vqFaMSXxhmo"
                   className="rounded-lg md:col-span-6 about__image-container"
                   target="_blank" rel="noopener">
                    <div className="about__image about__image--design p-8 ">
                        <p>
                            <strong>UI/UX Design Award</strong></p>
                        <br/>
                        <ul>
                            <li>
                                Achieved the first place in an interaction design and UI/UX design challenge at
                                University. <br/><br/>
                            </li>
                            <li>
                                Created a high interaction prototype using Axure R9.
                            </li>
                        </ul>
                    </div>
                </motion.a>

                <motion.a
                   variants={fadeIn("", "", 0.1, 1)}
                   href="https://tractive.com/blog/en/life-at-tractive/tractive-honeypots"
                   className="rounded-lg md:col-span-6 about__image-container"
                   target="_blank" rel="noopener">
                    <div className="about__image about__image--cyber p-8">
                        <p><strong>Honeypots in Cyber Security</strong></p>
                        <br/>
                        <ul>
                            <li>
                                I wrote an article on how web based honeypots or spider traps can be used in the Cloud
                                using Amazon AWS.
                            </li>
                        </ul>
                    </div>
                </motion.a>

                <motion.a
                    variants={fadeIn("", "", 0.1, 1)}
                    href="http://www.kollektiv-salzstrasse.at/" target="_blank" rel="noopener"
                   className="bg-black-100 rounded-lg p-4 md:col-span-12 hover:bg-pink-900">
                    <div>
                        <strong>Kollektiv Salzstraße: &nbsp;</strong>
                        <span>Created a website for two aspiring artists in order to help them to promote their work.</span>
                    </div>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(About, "about");
