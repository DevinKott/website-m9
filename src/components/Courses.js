import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import FadeIn from './FadeIn';

const coursesList = [
    "Discrete Mathematics",
    "The Mechanics of Programming",
    "Intro to Computer Science Theory",
    "Probability and Statistics",
    "Concepts of Computer Systems",
    "Multivariable Calculus",
    "Linear Algebra",
    "Intro to Software Engineering",
    "Concepts of Parallel & Distributed Systems",
    "Principles of Data Management",
    "Secure Coding",
    "Differential Equations",
    "Intro to Artificial Intelligence",
    "Intro to Computer Graphics",
    "Advanced Cryptography",
    "Linear Optimization",
    "Effective Web Design",
    "Foundations of Computer Vision",
    "Foundations of Computer Networks",
    "Foundations of Cybersecurity",
    "Modeling Human Perception Data",
    "Intro to Machine Learning",
    "Advanced Programming Skills in Rust",
    "Computational Complexity",
    "Project: Revisiting the Concept of Nulls in Programming Languages"
];

function Courses() {
    const [visible, setVisible] = useState(false);

    return (
        <section>
            <div
                className='flex flex-row items-center opacity-60'
                onClick={
                    () => {
                        setVisible(!visible);
                    }
                }
                role='button'
                aria-label='Show Courses'
                aria-pressed={visible ? 'true' : 'false'}
            >
                <span
                    className='mr-1'
                >
                    Courses
                </span>
                {
                    visible && <AiOutlineArrowLeft/>
                }
                {
                    !visible && <AiOutlineArrowRight/>
                }
            </div>
            <FadeIn
                isVisible={visible}
            >
                <ul>
                    {
                        coursesList.map(
                            (courseName, index) => {
                                return (
                                    <li
                                        key={`course-${index}`}
                                    >
                                        {courseName}
                                    </li>
                                );
                            },
                        )
                    }
                </ul>
            </FadeIn>
        </section>
    );
};

export default Courses;