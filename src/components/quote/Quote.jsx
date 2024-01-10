import React from "react";
import { motion } from "framer-motion";
import "./quote.scss";
import { SectionWrapper } from "../../hoc/index.js";
import { textVariant } from "../../utils/motion.js";

const Quote = () => {
    return (
        <>
            <motion.div
                className="quote"
                variants={textVariant()}>
                <div>
                    Rarely have I met such a <strong>smart, highly motivated and organised</strong> person. Andreas was
                    able to
                    <strong> acquire required knowledge</strong> in various technologies, programming languages and
                    frameworks
                    <strong>within the shortest time</strong>.
                    <br/><br/>
                    During his internship he <strong>planned, coordinated and implemented a broad range of different
                    projects</strong> to
                    our fullest satisfaction and greatly exceeded our expectations. Additionally, he went many times the
                    extra mile to ensure that a task is delivered in the best possible way to our users. I would like to
                    highlight that he did not miss a single deadline!
                    <br/>
                    <i>
                        Source: &nbsp;
                        <a href="https://www.linkedin.com/in/andreas-pilgerstorfer-60656b186/"
                           target="_blank" rel="noopener" className="underline">
                            Linkedin
                        </a>
                    </i>

                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Quote, "introduction");
