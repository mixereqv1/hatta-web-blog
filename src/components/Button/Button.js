import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.black};
  border: none;
  padding: 10px 25px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.style.semiBold};
  flex-shrink: 0;
`;

export default Button;
