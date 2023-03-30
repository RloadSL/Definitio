import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import style from './navigation.module.scss'
import Image from 'next/image';
import logo from '../../assets/img/logo.svg'
import logoMobile from '../../assets/img/logo_mob.svg'
import useComponentUtils from '@/hooks/component.hooks';
import useComponentAnimations from '@/hooks/animations.hooks';
import { useEffect, useRef } from 'react';
import HamburguerButton from './HamburguerButton';

interface NavigationProps {
}

const Navigation = ({ }: NavigationProps) => {
  const { useScrollDistance, useWindowSize } = useComponentUtils()
  const { mobileNavAnimation, toggleMobileNav } = useComponentAnimations()

  useEffect(() => {
    mobileNavAnimation()
  }, [])

  //checking mobile menu
  const isMobile = useWindowSize().width <= 768 ? true : false

  //adding the formatted label Array for the top menu translation JSON
  const menuLabelIDs: Array<string> = ['services', 'why-us', 'about', 'contact'];
  
  return (
    <div className={`${style.navigation} ${style[isMobile ? 'mobile' : 'pc']}`} style={useScrollDistance() >= 300 ? { backgroundColor: 'white' } : { backgroundColor: 'transparent' }}>
      <header className={style.navigation_content}>
        <div className={style.navigation_content__top}>
          <Link href={'/'}>
            <div className={style.navigation_logo}>
              <Image src={isMobile ? logoMobile : logo} alt={'Definitio logo'} />
            </div>
          </Link>
          {isMobile && (
            <HamburguerButton onClick={toggleMobileNav}/>
          )}
        </div>

        <nav className={style.menu}>
          <ul className='ul-menu'>
            {menuLabelIDs.map((item, index: number) => {
              return (
                <li className={`${style.navigation_menu__item} li-menu`} key={index}>
                  <Link href={`/${item}`} className={style[item]}>
                    <FormattedMessage id={`topmenu.item.label.${item}`} />
                  </Link>
                </li>
              )
            })
            }
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation;