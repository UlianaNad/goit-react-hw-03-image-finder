import React from 'react'
import { StyledButton } from './Button.styled'

function Button({children, onClick}) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button

