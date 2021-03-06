import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

function Experience(props) {
    const {
        jobTitle = 'Job Title',
        companyName = 'Some company',
        skills = [],
        dates = [],
        link = 'https://www.google.com/',
        location = '',
        keyPoints = []
    } = props;

    return (
        <section className="flex flex-col p-3">
            <h3 className="text-lg font-semibold mb-5 italic">{jobTitle}</h3>
            <div
                className='flex flex-row'
            >
                <span
                    className='mr-1'
                >
                    {companyName}
                </span>
                {
                    location.length > 0 &&
                    <span>
                        , {location}
                    </span>
                }
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={companyName}
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
            {
                keyPoints.length > 0 &&
                <section
                    className='pt-4'
                >
                    <span className='italic'>Key Contributions</span>
                    <ul
                        className='list-disc list-inside pt-3'
                    >
                        {
                            keyPoints.map(
                                (keyPoint, index) => {
                                    return (
                                        <li
                                            key={`kp-${index}-${companyName}`}
                                        >
                                            {keyPoint}
                                        </li>
                                    );
                                },
                            )
                        }
                    </ul>
                </section>
            }
        </section>
    );
};

export default Experience;