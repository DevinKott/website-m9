import { useState} from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import Experience from './Experience';
import FadeIn from './FadeIn';

function OtherExperience() {
    const [visible, setVisible] = useState(false);

    return (
        <section>
            <div
                className='flex flex-row items-center opacity-60'
                onClick={
                    () => {
                        setVisible(!visible);
                    }
                }
                role='button'
                aria-label='Show Other Experience'
                aria-pressed={visible ? 'true' : 'false'}
            >
                <span>Other</span>
                {
                    visible && <AiOutlineArrowUp/>
                }
                {
                    !visible && <AiOutlineArrowDown/>
                }
            </div>
            <FadeIn
                isVisible={visible}
            >
                <Experience
                    jobTitle={'Dishwasher'}
                    companyName={'Brick City Catering'}
                    dates={
                        [
                            {
                                start: 'Jan 2017',
                                end: 'Apr 2019',
                                duration: `2 yrs 4 mths`,
                            },
                        ]
                    }
                    link={'https://www.rit.edu/fa/diningservices/catering'}
                />
                <Experience
                    jobTitle={'Summer Assistant'}
                    companyName={'Fairport Electric'}
                    dates={
                        [
                            {
                                start: 'May 2017',
                                end: 'Aug 2017',
                                duration: `4 mths`,
                            },
                        ]
                    }
                    link={'https://www.village.fairport.ny.us/departments/electric_department/index.php'}
                />
                <Experience
                    jobTitle={'Dessert Barista'}
                    companyName={'Moonlight Creamery'}
                    dates={
                        [
                            {
                                start: 'Apr 2015',
                                end: 'Aug 2016',
                                duration: `1 yr 5 mths`,
                            },
                        ]
                    }
                    link={'https://moonlightcreamery.com/'}
                />
            </FadeIn>
        </section>
    );
};

export default OtherExperience;