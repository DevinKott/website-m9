import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

function Experience(props) {
    const {
        jobTitle = 'Job Title',
        companyName = 'Some company',
        skills = [],
        dates = [],
        link = 'https://www.google.com/'
    } = props;

    return (
        <section className="flex flex-col p-3">
            <h3 className="text-lg font-semibold mb-5">{jobTitle}</h3>
            <div
                className='flex flex-row'
            >
                <span
                    className='mr-1'
                >
                    {companyName}
                </span>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <HiExternalLink/>
                </a>
            </div>
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