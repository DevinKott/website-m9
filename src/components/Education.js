function Experience(props) {
    const {
        title = 'A Degree',
        school = 'A school',
        startDate = 'Starting Date',
        endDate = 'Ending Date',
        undergradGPA = '0.00',
        graduateGPA = '0.00',
    } = props;

    return (
        <section className="flex flex-col p-3">
            <h3 className="text-lg font-semibold mb-5 italic">{title}, {school}</h3>
            <span>Undergraduate GPA: {undergradGPA}</span>
            <span>Graduate GPA: {graduateGPA}</span>
            <span>{startDate} - {endDate}</span>
        </section>
    );
};

export default Experience;