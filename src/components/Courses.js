import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import FadeIn from './FadeIn';

const mathCourses = [
    "Linear Optimization",
    "Discrete Mathematics",
    "Probability and Statistics",
    "Multivariable Calculus",
    "Linear Algebra",
    "Differential Equations",
];

const csCourses = [
    "Computational Complexity",
    "Advanced Programming Skills in Rust",
    "Modeling Human Perception Data",
    "Foundations of Computer Vision",
    "Foundations of Computer Networks",
    "Foundations of Cybersecurity",
    "Secure Coding",
    "Advanced Cryptography",
    "The Mechanics of Programming",
    "Intro to Machine Learning",
    "Intro to Artificial Intelligence",
    "Intro to Computer Graphics",
    "Intro to Computer Science Theory",
    "Concepts of Parallel & Distributed Systems",
    "Concepts of Computer Systems",
    "Principles of Data Management",
    "Intro to Software Engineering",
    "Effective Web Design",
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
                <h3
                    className='text-md pt-3 pb-2 font-semibold text-neutral-900'
                >
                    CS Courses
                </h3>
                <ul
                    className='list-disc list-inside'
                >
                    {
                        csCourses.map(
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
                <h3
                    className='text-md pt-3 pb-2 font-semibold text-neutral-900'
                >
                    Math Courses
                </h3>
                <ul
                    className='list-disc list-inside'
                >
                    {
                        mathCourses.map(
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