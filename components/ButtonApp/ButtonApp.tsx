import React from 'react'
import { FormattedMessage } from 'react-intl'
import style from './button-app.module.scss'

interface ButtonAppProps {
  labelID?: string,
  onClick: Function,
  customClass?: string
}

/** Button component for web
 * @param labelID ID for JSON translations
 * @param onClick onClick function
 * @param customClass Custom Class for the application button
 * @returns 
 */

const ButtonApp = ({labelID, onClick, customClass}: ButtonAppProps) => {
  return (
    <button className={`${style.button} ${customClass}`} onClick={() => { onClick() }}>
      <span>
        <FormattedMessage id={labelID} />
      </span>
    </button>
  )
}

export default ButtonApp