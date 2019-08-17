import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 40px 20px;
  text-align: right;
  border-top: 2px solid #2e3092;
  padding-top: 0.75em;
`;

const Title = styled.a`
  font-size: 2em;
  font-weight: bold;
  color: #2e3092;
`;

export default function BigTitle({ title, _id }) {
  const linkId = _id && title;

  return (
    <Wrap>
      <Title name={linkId}>{title}</Title>
    </Wrap>
  );
}
