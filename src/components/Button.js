import React from 'react'

const Button = (props) => {

  return <input id="input"
                className="button"
                type="button"
                onClick={props.spin}
                disabled={props.btnDisabled}
  />
}

export default Button