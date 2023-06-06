import classes from './ProductList.module.css';
import {useComponentData} from "@discoverycms/connector";

export default function ProductList({componentId}) {
  /**
   *  @param {{reverse: boolean, headline: string, jewels: object[]}} data
   */
  const data = useComponentData(componentId)

  return (
    <div
      className={classes.container}
      style={{ flexDirection: data.reverse ? 'row-reverse' : 'row' }}
    >
      <div className={classes.text}>
        <h1 dangerouslySetInnerHTML={{ __html: data.headline }}>
        </h1>
      </div>
      <div className={classes.jewels}>
        {data.jewels.map((jewel) => {
          const jewelData = useComponentData(jewel._id)
          return (
              <div key={jewelData.name} className={classes.jewel}>
                <img src={jewelData.image?.url} alt={jewelData.name}></img>
                <div className={classes.jewel_details}>
                  <h3 dangerouslySetInnerHTML={{ __html: jewelData.name }}></h3>
                  <button>SCOPRI</button>
                </div>
              </div>
          )
        })}
      </div>
    </div>
  );
}
