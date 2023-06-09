import { useComponentData } from '@discoverycms/connector';
import classes from './Product.module.css';

export default function Product({ componentId }) {
    const data = useComponentData(componentId);

    return (
        <div data-discovery-id={componentId} className={classes.jewel}>
            <img src={data.image?.url} alt={data.name}></img>
            <div className={classes.jewel_details}>
                <h3 dangerouslySetInnerHTML={{ __html: data.name }}></h3>
                <button>SCOPRI</button>
            </div>
        </div>
    )
}
