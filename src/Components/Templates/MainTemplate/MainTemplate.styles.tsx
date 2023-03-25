import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
  overflow: hidden;
  background-color: #f5f5f6;
`;
