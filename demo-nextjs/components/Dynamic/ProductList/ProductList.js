import classes from './ProductList.module.css';
import {DiscoveryComponent, useComponentData} from "@discoverycms/connector";

export default function ProductList({componentId}) {
  /**
   *  @param {{reverse: boolean, headline: string, jewels: object[]}} data
   */
  const data = useComponentData(componentId)

  return (
    <div
        data-discovery-id={componentId}
      className={classes.container}
      style={{ flexDirection: data.reverse ? 'row-reverse' : 'row' }}
    >
      <div className={classes.text}>
        <h1 dangerouslySetInnerHTML={{ __html: data.headline }}>
        </h1>
      </div>
      <div className={classes.jewels}>
        {data.jewels.map((jewel) => DiscoveryComponent(jewel))}
      </div>
    </div>
  );
}
