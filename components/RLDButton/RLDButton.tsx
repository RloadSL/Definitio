import React from 'react'
import { FormattedMessage } from 'react-intl'
import style from './rld-button.module.scss'

interface RLDButtonProps {
  labelID?: string,
  onClick: Function,
  customClass?: string
}

/** Rload Button component for webs
 * @param labelID ID for JSON translations
 * @param onClick onClick function
 * @param customClass Custom Class for the application button
 * @returns 
 */

const RLDButton = ({labelID, onClick, customClass}: RLDButtonProps) => {
  return (
    <button className={`${style.button} ${customClass}`} onClick={() => { onClick() }}>
      <span>
        <FormattedMessage id={labelID} />
      </span>
    </button>
  )
}

export default RLDButton