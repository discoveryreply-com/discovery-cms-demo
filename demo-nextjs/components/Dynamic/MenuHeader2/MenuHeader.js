import BagIcon from './BagIcon';
import classes from './Header.module.css';
import HeadphoneIcon from './HeadphoneIcon';
import HearthIcon from './HearthIcon';
import LocationIcon from './LocationIcon';
import Logo from './Logo';
import ProfileIcon from './ProfileIcon';
import Search from './Search';
import { useRouter } from 'next/router';
import PreviewModeAlert from "../../PreviewModeAlert";
import {useComponentData} from "@discoverycms/connector";
export default function MenuHeader({componentId}) {
  const router = useRouter()
  /**
   * @param {{menuCategories:object,logo:object}} data
   * @type {any}
   */
  const data = useComponentData(componentId)

  return (
    <div className={classes.header_container} data-discovery-id={componentId}>
      {router.isPreview && <PreviewModeAlert />}

      <div className={classes.header_top}>

        <div className={classes.header_top_left}>
          {data.siteLogo && <Logo className={classes.logo_container} url={data.siteLogo.url} title={data.siteLogo.metadata?.title}/>}
        </div>

        <div className={classes.header_top_right}>
          <nav class="flex justify-end mr-24">
            <ul className={classes.menu}>
              {data.menuCategories.map((menuCategory) => (
                <li
                  key={menuCategory.url}
                  className={`${classes.category} ${
                    menuCategory.label === 'Alta Gioielleria' ? classes.selected : ''
                  }`}
                >
                  <a href={menuCategory.url}>
                    {menuCategory.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
}
