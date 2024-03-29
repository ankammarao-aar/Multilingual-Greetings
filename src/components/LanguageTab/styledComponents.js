import styled from 'styled-components'

export const ListItem = styled.li``

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.bgColor ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.bgColor ? '#db1c48' : '#ffffff')};
  height: 32px;
  width: 80px;
  border: 1px solid #db1c48;
  border-radius: 25px;
  padding: 6px;
  margin-right: 32px;
  margin-left: 32px;
  cursor: pointer;
`
