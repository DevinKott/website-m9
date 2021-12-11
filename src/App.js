import SectionHeader from "./SectionHeader";

function App() {
    return (
        <main
            className="container mx-auto font-mono text-md"
        >
            <section>
                <SectionHeader title={`I'm Devin Kott, a computer scientist from Rochester, New York`}/>
                <p>
                    I recently graduated from the Rochester Institute of Technology with both a B.S. and M.S. in Computer Science, focusing on security (May 2021).
                    My goal in my career is to get started learning about modern technologies that cross with my interests: sustainability, anything space related, and automation systems to name a few.
                    I find all of these topics fascinating and would love to contribute to either new or existing solutions.
                </p>
            </section>
            <section>
                <SectionHeader title={`Experience`}/>
                <p>
                    Test stuff.
                </p>
            </section>
            <section>
                <SectionHeader title={`Skills`}/>
                <p>
                    Test stuff.
                </p>
            </section>
            <section>
                <SectionHeader title={`More about me`}/>
                <p>
                    I enjoy messing around with home automation, fixing iPhones, rock climbing, playing volleyball, riding motorcycles, flying drones, photography, and learning French.
                    Here are some of the technologies and hardware I use: Fedora, Ubuntu, Windows, NUC10i5, Synology DS218, Netgear Orbi, proxmox, Xiaomi, PiHole, TickTick.
                    I use (or have used) a few AWS services as well: Amplify, Route 53, S3. My NUC10i5 runs proxmox with several containers for various services, including HomeAssistant, Plex, bitwarden, and caddy.
                    Feel free to contact me by email at i @ a, where i = devin and a = devinkott.com. You can visit my linkedin at 'https://www.linkedin.com/in/' + i + '-kott'. You can visit my github at 'https://github.com/' + i + 'kott'.
                </p>
            </section>
        </main>
    );
}

export default App;
