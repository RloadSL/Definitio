import React from 'react'
import Image from 'next/image';
import style from './whoweare-anim.module.scss'
import city from '../../../../assets/img/home/who_we_are/city.svg'
import dubri from '../../../../assets/img/home/who_we_are/dubri.svg'
import building from '../../../../assets/img/home/who_we_are/building.svg'

interface WhoweareAnimProps {
}

const WhoweareAnim = ({ }: WhoweareAnimProps) => {
  return (
    <div className={style.wrapper}>
      <canvas width={1200} height={700} />
      <div className={style.dubri}>
        <Image src={dubri} alt={''} />
      </div>
      <div className={style.city}>
        <Image src={city} alt={''} />
      </div>
      <div className={style.building}>
        <Image src={building} alt={''} />
      </div>
    </div>
  )
}

export default WhoweareAnim