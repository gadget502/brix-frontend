import react from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 300px 0;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 6em;
  color: #2e3092;
`;

const Author = styled.div`
  font-weight: bold;
  color: black;
  font-size: 2em;
`;

export default function ExampleBookCover() {
  return (
    <Wrap>
      <Title>Algorithms</Title>
      <Author>Jeff Erickson</Author>
    </Wrap>
  );
}
