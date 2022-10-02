import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Input,
  Paragraph,
  ErrorParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangeUserInput = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input onChange={onChangeUserInput} value={password} type="password" />
        {password.length >= 8 ? null : (
          <ErrorParagraph>
            Your password must be at least 8 characters
          </ErrorParagraph>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}
export default PasswordValidator
