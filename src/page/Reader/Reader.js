import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
`;

const __DUMMY_JSON__ = [
  {
    _id: '',
    content: 'asdfsadf',
    type: 'text',
  },
];

export default function Reader() {
  return (
    <Wrap>
      <Header>헤더</Header>
    </Wrap>
  );
}
