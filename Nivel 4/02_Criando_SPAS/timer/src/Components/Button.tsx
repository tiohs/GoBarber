import { ButtonContainer, ButtonVariant } from './Button.styles'

interface PropsButton {
  variant?: ButtonVariant
}
export function Button({ variant = 'primary' }: PropsButton) {
  return <ButtonContainer variant={variant}>Send</ButtonContainer>
}
