import classes from './ProductList.module.css';
import { DiscoveryComponent, useComponentData } from '@discoverycms/connector';
import Slider from './Slider';

export default function ProductList({ componentId }) {
    /**
     *  @param {{reverse: boolean, headline: string, jewels: object[]}} data
     */
    const data = useComponentData(componentId);

    return (
        <div
            data-discovery-id={componentId}
            className={classes.container}
            style={{ flexDirection: data.reverse ? 'row-reverse' : 'row' }}
        >
            <div className={classes.text}>
                <h2 dangerouslySetInnerHTML={{ __html: data.headline }}></h2>
            </div>
            <Slider jewels={data.jewels} />
        </div>
    );
}
