import React from 'react';
import Experience from "./components/Experience";
import Education from "./components/Education";
import SectionHeader from "./components/SectionHeader";
import Separator from "./components/Separator";
import HeadshotWebP from './assets/headshot.webp';

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function App() {
    // https://stackoverflow.com/a/2536445
    const monthDiff = (startDate, endDate) => {
        let months = 0;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth() + 1;
        months += endDate.getMonth();
        return months <= 0 ? 0 : months;
    };

    /**
     * <img
                        src={Headshot}
                        className="basis-1/4 object-cover w-32 h-32 overflow-hidden rounded-full mx-auto mt-10"
                    />
     */

    /** Calculate the number of months at each job I've had. */
    const mthsInCurrent = monthDiff(new Date('2021-06-01'), new Date());
    const mthsInKAInternFirst = monthDiff(new Date('2020-05-01'), new Date('2021-02-01'));
    const mthsInKAInternSec = monthDiff(new Date('2019-05-01'), new Date('2019-12-01'));
    const mthsInXerox = monthDiff(new Date('2018-01-01'), new Date('2018-08-01'));

    /** Calculate the number of years total I've worked in industry. */
    let totalWorkExperience = 0;
    totalWorkExperience += mthsInCurrent; // Current KA job
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
                <SectionHeader title={`I'm Devin Kott, a computer scientist from Rochester, New York`}/>
                <section
                    className="flex flex-row items-center"
                >
                    <img
                        src={HeadshotWebP}
                        alt="Headshot of Devin Kott"
                        className="w-48 h-48 hidden sm:flex"
                    />
                    <div>
                        <p
                            className="pl-0 sm:pl-4 pb-4"
                        >
                            I'm currently working as a software development engineer for Kodak Alaris, where I primarily work on the Kodak Moments website.
                            I focus on creating robust and secure new features and mending user-experience errors related to backend services.
                        </p>
                        <p
                            className="pl-0 sm:pl-4"
                        >
                            I graduated from the Rochester Institute of Technology in May 2021, having received a B.S. and M.S. in Computer Science (with a focus on security).
                            My schooling has imprinted me with the idea of creating and shipping secure, robust, and efficient code with the latest technologies.
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
                    link={'https://www.kodakalaris.com/'}
                    dates={
                        [
                            {
                                start: 'June 2021',
                                end: 'Present',
                                duration: `${mthsInCurrent} mths`,
                            },
                        ]
                    }
                    skills={['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Python', 'Redux', 'Azure', 'Git/Github', 'JIRA', 'VSCode', 'MS Teams', 'Agile']}
                />
                <Experience
                    jobTitle={'Software Development Intern'}
                    companyName={'Kodak Alaris'}
                    link={'https://www.kodakalaris.com/'}
                    dates={
                        [
                            {
                                start: 'May 2020',
                                end: 'Feb 2021',
                                duration: `${mthsInKAInternFirst} mths`
                            },
                            {
                                start: 'May 2019',
                                end: 'Dec 2019',
                                duration: `${mthsInKAInternSec} mths`,
                            },
                        ]
                    }
                />
                <Experience
                    jobTitle={'Software Engineer Intern'}
                    companyName={'Xerox'}
                    link={'https://www.xerox.com/en-us'}
                    dates={
                        [
                            {
                                start: 'Jan 2018',
                                end: 'Aug 2018',
                                duration: `${mthsInXerox} mths`,
                            },
                        ]
                    }
                    skills={['C++', 'Python', 'Java', 'ClearCase']}
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
            <footer
                className="text-xs w-full text-center mt-10 py-3"
            > 
                <div
                    className="flex flex-row w-full justify-center mb-4"
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
                    &copy; Devin Kott {new Date().getFullYear()} | Hosted on AWS | Built with React/Tailwind
                </span>
            </footer>
        </main>
    );
}

export default App;
