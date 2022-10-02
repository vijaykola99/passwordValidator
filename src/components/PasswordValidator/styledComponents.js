import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`
export const PasswordContainer = styled.div`
  background-color: #383a4e;
  height: 45vh;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 90vw;
  box-shadow: 1px 4px 9px 1px #434451;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  color: #f8fafc;
`
export const Input = styled.input`
  background: #ffffff;
  padding: 10px;
  padding-left: 20px;
  outline: none;
  min-width: 25vw;
  border: 0px;
  border-radius: 5px;
`
export const Paragraph = styled.p`
  color: #f8fafc;
`

export const ErrorParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ef4444;
`
