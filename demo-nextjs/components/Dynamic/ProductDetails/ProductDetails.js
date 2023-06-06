import classes from './ProductDetails.module.css';
import {useComponentData} from "@discoverycms/connector";

export default function ProductDetails({componentId}) {
  /**
   * @param {{background: object, reverse: boolean, headline:string, description: string, upperImage: object, lowerImage: object }} data
   */
  const data = useComponentData(componentId)

  return (
    <div
      className={classes.background}
      style={{
        backgroundImage: `url(${data.background?.url})`,
      }}
    >
      <div
        className={classes.content}
        style={{ flexDirection: data.reverse ? 'row-reverse' : 'row' }}
      >
        <div className={classes.text}>
          <h1>{data.headline}</h1>
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        <div className={classes.images}>
          <img
            src={data.upperImage?.url}
            className={`${classes.image_one}`}
           alt={data.upperImage?.metadata?.title}/>
          <img
            src={data.lowerImage?.url}
            className={`${classes.image_two}`}
           alt={data.lowerImage?.metadata?.title}/>
        </div>
      </div>
    </div>
  );
}
