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

    // Calculate total duration at this company by adding `dur`s in the dates array
    const totalDuration = dates.map(d => d.dur).reduce((acc, a) => acc + a, 0);

    // Convert that total duration to a string (years if >= 12, months if else)
    const totalDurationStr = totalDuration >= 12 ? `${(totalDuration / 12).toFixed(1)} years` : `${totalDuration} mths`

    return (
        <section className="flex flex-col p-3">
            <h3 className="text-lg font-semibold mb-5 italic">{jobTitle} ({totalDurationStr})</h3>
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