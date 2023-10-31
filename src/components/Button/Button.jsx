import React from 'react'
import { StyledButton } from './Button.styled'

function Button({children}) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button

