import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { BsQuestionCircle } from "react-icons/bs";

const faqData = [
    {
        question: "Non consectetur a erat nam at lectus urna duis?",
        answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
    },
    {
        question: "Feugiat scelerisque varius morbi enim nunc?",
        answer: "Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
        question: "Dolor sit amet consectetur adipiscing elit?",
        answer: "Tempor orci eu lobortis elementum nibh tellus molestie nunc non.",
    },
    {
        question:
            "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
        answer: "Lacus viverra vitae congue eu consequat ac felis donec et.",
    },
    {
        question: "Tortor vitae purus faucibus ornare?",
        answer: "Varius vel pharetra vel turpis nunc eget lorem dolor.",
    },
];

const FAQSection = () => {
    const [expanded, setExpanded] = useState(null);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-950">
                FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-center text-blue-900/70 mb-8">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga.
            </p>
            <div className="max-w-4xl mx-auto">
                {faqData.map((item, index) => (
                    <Card key={index} className="overflow-hidden">
                        <div
                            onClick={() => handleToggle(index)}
                            className="flex justify-between items-start cursor-pointer p-4 hover:bg-gray-100"
                        >
                            <h3 className="text-lg font-medium text-blue-600 flex items-center">
                                <BsQuestionCircle />{" "}
                                <span className="pl-3">{item.question}</span>
                            </h3>
                            <span className="text-blue-400">
                                {expanded === index ? "\u25B2" : "\u25BC"}
                            </span>
                        </div>
                        <AnimatePresence initial={0}>
                            {expanded === index && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2, }}
                                    className="pb-2 bg-white text-blue-900"
                                >
                                    {item.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
