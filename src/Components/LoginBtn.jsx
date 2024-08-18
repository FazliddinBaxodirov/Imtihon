
function LoginBtn({children,type,extrastyle,style}) {
  return (
    <button style={style} type={type} className={extrastyle}>{children}</button>
  )
}

export default LoginBtn
