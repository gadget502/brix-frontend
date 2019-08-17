import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 40px 20px;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #2e3092;
  margin-bottom: 1em;
`;

const Content = styled.div`
  line-height: 1.4em;
`;

export default function Remark({ title, _id, content }) {
  const linkId = _id && title;

  return (
    <Wrap id={linkId}>
      {title && <Title>{title}</Title>}
      <Content>{content}</Content>
    </Wrap>
  );
}
