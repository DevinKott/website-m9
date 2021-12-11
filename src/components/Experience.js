function Experience(props) {
    const {
        jobTitle = 'Job Title',
        companyName = 'Some company',
        startDate = 'Starting Date',
        endDate = 'Ending Date',
        time = 'X mths',
        skills = []
    } = props;

    return (
        <section className="flex flex-col p-3">
            <h3 className="text-lg font-semibold mb-5">{jobTitle}</h3>
            <span>{companyName}</span>
            <span>{startDate} - {endDate} (~{time})</span>
            {skills.length ? <span>Skills: {skills.join(', ')}</span> : ''}
        </section>
    );
};

export default Experience;