import React from 'react';
import Experience from "./components/Experience";
import Education from "./components/Education";
import SectionHeader from "./components/SectionHeader";
import Separator from "./components/Separator";
import Link from './components/Link';

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import PhotoViewer from './components/PhotoViewer';
import Courses from './components/Courses';

function App() {
    // https://stackoverflow.com/a/2536445
    const monthDiff = (startDate, endDate) => {
        let months = 0;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth() + 1;
        months += endDate.getMonth();
        return months <= 0 ? 0 : months;
    };

    /** Calculate the number of months at each job I've had. */
    const mthsInCurrent = monthDiff(new Date('2022-06-01'), new Date());
    const mthsINKAWeb = monthDiff(new Date('2021-06-01'), new Date('2022-06-02'));
    const mthsInKAInternFirst = monthDiff(new Date('2020-05-01'), new Date('2021-02-01'));
    const mthsInKAInternSec = monthDiff(new Date('2019-05-01'), new Date('2019-12-01'));
    const mthsInXerox = monthDiff(new Date('2018-01-01'), new Date('2018-08-01'));
    

    /** Calculate the number of years total I've worked in industry. */
    let totalWorkExperience = 0;
    totalWorkExperience += mthsInCurrent; // Current KA job
    totalWorkExperience += mthsINKAWeb; // KA - KMWEB
    totalWorkExperience += mthsInKAInternFirst; // KA internship
    totalWorkExperience += mthsInKAInternSec; // KA internship
    totalWorkExperience += mthsInXerox; // Xerox
    totalWorkExperience /= 12;
    totalWorkExperience = totalWorkExperience.toFixed(1);

    return (
        <main
            className="container mx-auto font-mono text-md subpixel-antialiased leading-7 text-neutral-800 2xl:px-80 xl:px-40 lg:px-20 md:px-10 px-5 pt-5 pb-5 bg-white dark:bg-black dark:text-white"
        >
            <section>
                <SectionHeader title={`I'm Devin Kott, a software developer from Rochester, New York`}/>
                <section
                    className="flex flex-row items-center"
                >
                    <img
                        src={"https://devin-public-files.s3.us-east-2.amazonaws.com/headshots/headshot_circle.webp"}
                        alt="Headshot of Devin Kott"
                        className="w-48 h-48 hidden sm:flex"
                    />
                    <div>
                        <p
                            className="pl-0 sm:pl-4 pb-4"
                        >
                            I work as a software development engineer for Kodak Alaris, primarily working in the area of backend services.
                            I focus on delivering robust and secure code utilized in different product areas.
                        </p>
                        <p
                            className="pl-0 sm:pl-4"
                        >
                            I graduated from the Rochester Institute of Technology in May 2021, having received both a Master's and Bachelor's degree in Computer Science, with a focus on security.
                            My schooling has imprinted me with the idea of building and delivering secure, robust, and efficient code using the latest technologies.
                        </p>
                    </div>
                </section>
            </section>
            <Separator/>
            <section>
                <SectionHeader title={`Work`}/>
                <span>
                    I currently have <b className="underline">{totalWorkExperience} years</b> of experience in industry.
                </span>
                <Experience
                    jobTitle={'Software Development Engineer'}
                    companyName={'Kodak Alaris'}
                    location={'Rochester, NY'}
                    link={'https://www.kodakalaris.com/'}
                    dates={
                        [
                            {
                                start: 'June 2022',
                                end: 'Present',
                                duration: `${mthsInCurrent} mths`,
                                dur: mthsInCurrent,
                            },
                            {
                                start: 'June 2021',
                                end: 'June 2022',
                                duration: `${mthsINKAWeb} mths`,
                                dur: mthsINKAWeb
                            },
                        ]
                    }
                    skills={['JavaScript', 'Shell script (sh)', 'Python', 'C#', 'React', 'Node.js', 'HTML/CSS', 'Redux', 'Azure', 'Git/Github', 'JIRA', 'VSCode', 'MS Teams', 'Agile']}
                    keyPoints={
                        [
                            "Lead developer on a new, proof-of-concept architecture built from the ground up, using the latest technologies to achieve advantages over existing software and procedures.",
                            "Created an error logging system that surfaces consumer-facing and server-side web application errors to Azure's Application Insights, leading to increased site robustness and reliability.",
                            "Took the initiative to analyze and improve initial page load performance on the web application, resulting in a 40% decrease in response time for the consumer.",
                            "All-around improvements on website reliability, robustness, and response time.",
                        ]
                    }
                />
                <Experience
                    jobTitle={'Software Development Intern'}
                    companyName={'Kodak Alaris'}
                    location={'Rochester, NY'}
                    link={'https://www.kodakalaris.com/'}
                    dates={
                        [
                            {
                                start: 'May 2020',
                                end: 'Feb 2021',
                                duration: `${mthsInKAInternFirst} mths`,
                                dur: mthsInKAInternFirst
                            },
                            {
                                start: 'May 2019',
                                end: 'Dec 2019',
                                duration: `${mthsInKAInternSec} mths`,
                                dur: mthsInKAInternSec
                            },
                        ]
                    }
                    skills={['C++', 'JavaScript', 'React', 'Node.js', 'Python', 'Azure', 'Git/Github', 'JIRA', 'VSCode', 'MS Teams', 'Agile']}
                    keyPoints={
                        [
                            "Co-developed a new proof-of-concept kiosk system to display new hardware and software advantages and disadvantages compared to current technology.",
                            "Developed an exploratory project that utilized infrared hand tracking to navigate an application UI on a touchscreen device.",
                            "Developed a software system that interacts with an Arduino and LED array and can remotely adjust animations or scrolling text based on internal and external triggers.",
                            "Created web applications to improve developer efficiencies; reduce repetitive processes.",
                            "Conveyed development progress with a team of software engineers, designers, and management daily.",
                        ]
                    }
                />
                <Experience
                    jobTitle={'Software Engineer Intern'}
                    companyName={'Xerox'}
                    location={'Rochester, NY'}
                    link={'https://www.xerox.com/en-us'}
                    dates={
                        [
                            {
                                start: 'Jan 2018',
                                end: 'Aug 2018',
                                duration: `${mthsInXerox} mths`,
                                dur: mthsInXerox
                            },
                        ]
                    }
                    skills={['C++14', 'Python', 'Java', 'XML', 'Jenkins', 'ClearCase', 'CentOS', 'Windows']}
                    keyPoints={
                        [
                            "Responsible for converting a print machine simulator from Java to C++14, utilized by different developers to test their software before deployment to real systems.",
                            "Modernized core technologies used by the simulator and improved the simulator's architecture layout for ease of maintenance.",
                            "Conveyed development progress with a team of software engineers and management weekly.",
                            "Presented my project in a final review meeting with management and other teams."
                        ]
                    }
                />
            </section>
            <Separator/>
            <section>
                <SectionHeader title={`Education`}/>
                <Education
                    title='M.S./B.S. in Computer Science'
                    school='Rochester Institute of Technology'
                    startDate='Aug 2016'
                    endDate='May 2021'
                    undergradGPA='3.71'
                    graduateGPA='4.00'
                />
            </section>
            <Courses/>
            <Separator/>
            <section>
                <SectionHeader title={`More about me`}/>
                <p>
                    My interests include home automation, fixing iPhones, rock climbing, skiing, playing volleyball, riding motorcycles, flying drones, and photography.
                    Here are some of the technologies and hardware I use: Fedora, Ubuntu, Windows, NUC10i5, Synology DS218, Netgear Orbi, proxmox, Xiaomi, PiHole, TickTick.
                    I use (or have used) a few AWS services as well: Amplify, Route 53, S3.
                    My NUC10i5 runs proxmox with several containers for various services, including HomeAssistant, Plex, bitwarden, and caddy.
                </p>
            </section>
            <PhotoViewer/>
            <footer
                className="text-xs w-full text-center mt-10 py-3"
            > 
                <span>Contact Information</span>
                <div
                    className="flex flex-row w-full justify-center my-4"
                >
                    <a
                        className="px-4 mx-2"
                        href="mailto:devin.kott@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email"
                    >
                        <AiOutlineMail
                            style={
                                {
                                    width: '2em',
                                    height: '2em'
                                }
                            }
                        />
                    </a>
                    <a
                        className="px-4 mx-2"
                        href="https://www.linkedin.com/in/devin-kott"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <AiFillLinkedin
                            style={
                                {
                                    width: '2em',
                                    height: '2em'
                                }
                            }
                        />
                    </a>
                    <a
                        className="px-4 mx-2"
                        href="https://github.com/DevinKott"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Github"
                    >
                        <AiFillGithub
                            style={
                                {
                                    width: '2em',
                                    height: '2em'
                                }
                            }
                        />
                    </a>
                </div>
                <span>
                    &copy; <Link linkTo="https://www.devinkott.com/" comp="Devin Kott"/> {new Date().getFullYear()} | Hosted on <Link linkTo="https://aws.amazon.com/" comp="AWS"/> | Built with <Link linkTo="https://reactjs.org/" comp="React"/>/<Link linkTo="https://tailwindcss.com/" comp="Tailwind"/>
                </span>
            </footer>
        </main>
    );
}

export default App;
