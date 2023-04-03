import React from 'react'
import Image from 'next/image';
import style from './whoweare-anim.module.scss'
import city from '../../../../assets/img/home/who_we_are/city.svg'
import dubri from '../../../../assets/img/home/who_we_are/dubri.svg'
import buildingTop from '../../../../assets/img/home/who_we_are/buildingTop.svg'
import building2 from '../../../../assets/img/home/who_we_are/building2.svg'
import building3 from '../../../../assets/img/home/who_we_are/building3.svg'



interface WhoweareAnimProps {
}

const WhoweareAnim = ({ }: WhoweareAnimProps) => {
  return (
    <div className={style.wrapper}>
      <canvas width={1200} height={700} />
      <div className={`${style.dubri} dubri`}>
        <Image src={dubri} alt={''} />
      </div>
      <div className={style.city}>
        <Image src={city} alt={''} />
      </div>
      <div className={`${style.buildingTop} buildingTop`}>
        <Image src={buildingTop} alt={''} />
      </div>
      <div className={`${style.building2} building2`}>
        <Image src={building2} alt={''} />
      </div>
      <div className={`${style.building3} building3`}>
        <Image src={building3} alt={''} />
      </div>
    </div>
  )
}

export default WhoweareAnim