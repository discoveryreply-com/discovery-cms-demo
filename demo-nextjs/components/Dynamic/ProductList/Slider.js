import { useState } from 'react';
import classes from './Slider.module.css';
import { DiscoveryComponent } from '@discoverycms/connector';

const Slider = ({ jewels }) => {
    const [currentJewels, setCurrentJewels] = useState(1);

    const nextImage = () => {
        const newIndex = (currentJewels + 1) % jewels.length;
        setCurrentJewels(newIndex);
    };

    const previousImage = () => {
        const newIndex = (currentJewels - 1 + jewels.length) % jewels.length;
        setCurrentJewels(newIndex);
    };

    return (
        <div className={classes.slider}>
            {jewels.length > 3 && (
                <button className={`${classes.arrow} ${classes.previous}`} onClick={previousImage}>
                    &lt;
                </button>
            )}
            <div className={classes.jewels}>
                <div className={`${classes.card} ${classes.previous}`}>
                    {DiscoveryComponent(jewels[(currentJewels - 1 + jewels.length) % jewels.length])}
                </div>
                <div className={`${classes.card}  ${classes.active}`}>{DiscoveryComponent(jewels[currentJewels])}</div>
                <div className={`${classes.card}  ${classes.next}`}>
                    {DiscoveryComponent(jewels[(currentJewels + 1) % jewels.length])}
                </div>
            </div>
            {jewels.length > 3 && (
                <button className={`${classes.arrow} ${classes.next}`} onClick={nextImage}>
                    &gt;
                </button>
            )}
        </div>
    );
};

export default Slider;
