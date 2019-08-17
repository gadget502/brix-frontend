import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 40px 20px;
`;

const Title = styled.a`
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  color: #2e3092;
  margin-bottom: 1em;
`;

const Content = styled.div`
  line-height: 1.4em;
`;

export default function Article({ title, _id, content }) {
  const linkId = _id && title;

  return (
    <Wrap>
      {title && <Title name={linkId}>{title}</Title>}
      <Content>{content}</Content>
    </Wrap>
  );
}
