import {useComponentData} from "@discoverycms/connector";
import styles from './CenteredHeadline.module.css'

export default function CenteredHeadline({componentId}) {
    const data = useComponentData(componentId)

    return (
        <div className={styles.third_container} data-discovery-id={componentId}>
            <h2
                className={styles.third_title}
                dangerouslySetInnerHTML={{ __html: data.headline }}
            ></h2>
        </div>
    );
}
