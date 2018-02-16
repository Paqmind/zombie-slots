import React from 'react'

const Button = (props) => {

  return <input id="input"
                className={props.btnDisabled ? "btn-disabled" : "btn-active"}
                type="button"
                onClick={props.spin}
                disabled={props.btnDisabled}
  />
}

export default Button