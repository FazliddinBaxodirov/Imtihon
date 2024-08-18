import React from 'react'

function LoginInput({type,placeholder,extraStyle,required,name}) {
  return (
    <input type={type} autoComplete='off' placeholder={placeholder} className={extraStyle} required={required} name={name} />
  )
}

export default LoginInput
