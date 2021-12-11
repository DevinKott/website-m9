import Experience from "./components/Experience";
import Education from "./components/Education";
import SectionHeader from "./components/SectionHeader";

function App() {
    return (
        <main
            className="container mx-auto font-mono text-md subpixel-antialiased leading-7 text-neutral-800 2xl:px-80 xl:px-40 lg:px-20 md:px-10 px-5"
        >
            <section>
                <SectionHeader title={`I'm Devin Kott, a computer scientist from Rochester, New York`}/>
                <p>
                    I graduated from the Rochester Institute of Technology with both a B.S. and M.S. in Computer Science, focusing on security, in May 2021.
                    My goal in my career is to get started learning about modern technologies that cross with my interests: sustainability, anything space related, and automation systems to name a few.
                    I find all of these topics fascinating and would love to contribute to either new or existing solutions.
                </p>
                <p className='pt-5'>
                Feel free to contact me by email at <i>i @ a</i>, where <i>i = devin</i> and <i>a = devinkott.com</i>.
                You can visit my linkedin at <i>'https://www.linkedin.com/in/' + i + '-kott'</i>.
                You can visit my github at <i>'https://github.com/' + i + 'kott'</i>.
                </p>
            </section>
            <section>
                <SectionHeader title={`Experience`}/>
                <Experience
                    jobTitle={'Software Development Engineer'}
                    companyName={'Kodak Alaris'}
                    startDate={'June 2021'}
                    endDate={'Present'}
                    time={'6 mths'}
                    skills={['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Python', 'Redux', 'Azure', 'Git/Github', 'JIRA', 'VSCode', 'MS Teams', 'Agile']}
                />
                <Experience
                    jobTitle={'Software Development Intern'}
                    companyName={'Kodak Alaris'}
                    startDate={'May 2020'}
                    endDate={'Feb 2021'}
                    time={'10 mths'}
                />
                <Experience
                    jobTitle={'Software Development Intern'}
                    companyName={'Kodak Alaris'}
                    startDate={'May 2019'}
                    endDate={'Dec 2019'}
                    time={'8 mths'}
                />
                <Experience
                    jobTitle={'Software Engineer Intern'}
                    companyName={'Xerox'}
                    startDate={'Jan 2018'}
                    endDate={'Aug 2018'}
                    time={'8 mths'}
                    skills={['C++', 'Python', 'Java', 'ClearCase']}
                />
            </section>
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
            <section>
                <SectionHeader title={`More about me`}/>
                <p>
                    I enjoy messing around with home automation, fixing iPhones, rock climbing, skiing, playing volleyball, riding motorcycles, flying drones, and photography.
                    Here are some of the technologies and hardware I use: Fedora, Ubuntu, Windows, NUC10i5, Synology DS218, Netgear Orbi, proxmox, Xiaomi, PiHole, TickTick.
                    I use (or have used) a few AWS services as well: Amplify, Route 53, S3.
                    My NUC10i5 runs proxmox with several containers for various services, including HomeAssistant, Plex, bitwarden, and caddy.
                </p>
            </section>
        </main>
    );
}

export default App;
