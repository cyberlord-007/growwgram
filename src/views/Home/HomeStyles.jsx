import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: auto;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 410px));
  justify-content: center;
  padding: 150px 50px;
  background: ${({ theme }) => theme.body};
`;
