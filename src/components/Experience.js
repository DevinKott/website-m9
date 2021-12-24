function Experience(props) {
    const {
        jobTitle = 'Job Title',
        companyName = 'Some company',
        skills = [],
        dates = []
    } = props;

    return (
        <section className="flex flex-col p-3">
            <h3 className="text-lg font-semibold mb-5">{jobTitle}</h3>
            <span>{companyName}</span>
            {
                dates && Array.isArray(dates) && dates.length && dates.map(
                    (dateObj, index) => {
                        return (
                            <span
                                key={`exp-${companyName}-${index}`}
                            >
                                {dateObj.start} - {dateObj.end} (~{dateObj.duration})
                            </span>
                        );
                    }
                )
            }
            {skills.length ? <span>Skills: {skills.join(', ')}</span> : ''}
        </section>
    );
};

export default Experience;