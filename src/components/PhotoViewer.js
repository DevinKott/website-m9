import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function PhotoViewer(props) {
    const {
        photos = [
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/headshots/headshot_circle.webp",
                desc: "Headshot"
            },
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/personal_site/portrait.webp",
                desc: "Portrait - By Austin Quintana"
            },
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/personal_site/canyons.webp",
                desc: "Black Canyon of the Gunnison, CO"
            },
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/personal_site/sam_devin.webp",
                desc: "Hiking in Vermont"
            },
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/personal_site/skateboarding.webp",
                desc: "Skateboarding in CO"
            },
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/personal_site/skiing_2.webp",
                desc: "Skiing in CO"
            },
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/personal_site/skiing.webp",
                desc: "Vail Mountain, CO"
            },
            {
                link: "https://devin-public-files.s3.us-east-2.amazonaws.com/personal_site/volleyball.webp",
                desc: "Hotshots Volleyball, Rochester NY"
            },
        ],
    } = props;

    const [idx, setIdx] = useState(0);

    const adjustIndex = (modifier = 0) => {
        if (modifier === -1) {
            if (idx <= 0) {
                setIdx(photos.length - 1);
            } else {
                setIdx(idx - 1);
            }
        } else if (modifier === 1) {
            if (idx >= photos.length - 1) {
                setIdx(0);
            } else {
                setIdx(idx + 1);
            }
        }
    };

    return (
        <section
            className="hidden sm:flex w-full h-96 border-2 justify-around items-center flex-row mt-4"
        >
            {
                photos.length <= 0 && <span>No photos to show!</span>
            }
            {
                photos.length >= 1 &&
                <div
                    className='px-10'
                    onClick={() => adjustIndex(-1)}
                >
                    <AiOutlineArrowLeft
                        style={
                            {
                                width: '2em',
                                height: '2em',
                            }
                        }
                    />
                </div>
            }
            {
                photos.length >= 1 &&
                <div
                    key={`photo-id-${idx}`}
                    className="flex flex-col text-center items-center"
                >
                    <img
                        src={photos[idx].link}
                        alt={`Slide Viewer - ${idx + 1}`}
                        className="max-h-80"
                    />
                    <div
                        className="text-xs mt-4 w-full"
                    >
                        <span>{photos[idx].desc}</span>
                    </div>
                </div>
            }
            {
                photos.length >= 1 &&
                <div
                    className='px-10'
                    onClick={() => adjustIndex(1)}
                >
                    <AiOutlineArrowRight
                        style={
                            {
                                width: '2em',
                                height: '2em'
                            }
                        }
                    />
                </div>
            }
        </section>
    );
};

export default PhotoViewer;