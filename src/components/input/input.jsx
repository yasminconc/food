import { forwardRef } from 'react'
import { InputWrapper, StyledInput, StyledLabel } from './style' // Assumindo que './styles' está no mesmo diretório

// Usamos forwardRef para passar a 'ref' do react-hook-form para o input
const Input = forwardRef(
  ({ type = 'text', label, name, error, ...props }, ref) => {
    return (
      <InputWrapper>
        {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
        
        <StyledInput
          id={name}
          name={name}
          type={type}
          ref={ref}
          {...props}
        />
        
        {error && ( <p>{error.message}</p>)}
      </InputWrapper>
    )
  }
)

Input.displayName = 'Input' // Boa prática para debugging

export default Input