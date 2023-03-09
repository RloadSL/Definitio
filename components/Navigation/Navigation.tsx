import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import style from './navigation.module.scss'
import Image from 'next/image';
import definitioLogo from '../../assets/img/logo.svg'

interface NavigationProps {
}

const Navigation = ({ }: NavigationProps) => {
  //adding the formatted label Array for the top menu translation JSON
  const menuLabelJSONids: Array<string> = ['services', 'why-us', 'about', 'contact'];

  return (
    <div className={style.navigation}>
      <div className={style.navigation_content}>
        <div className={style.navigation_logo}>
          <Image src={definitioLogo} alt={'Definitio logo'} />
        </div>
        <nav className={style.navigation_menu}>
          <ul>
            {menuLabelJSONids.map((item, index: number) => {
              return (
                <li className={style.navigation_menu__item} key={index}>
                  <Link href={`/${item}`}>
                    <FormattedMessage id={`topmenu.item.label.${item}`} />
                  </Link>
                </li>
              )
            })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation;