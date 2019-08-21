import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 40px 20px;
`;

const Title = styled.a`
  font-size: 1em;
  line-height: 1.4em;
`;

export default function Link({ title, link, page = null }) {
  var str;
  if (!page) {
    str = '#' + String(link);
  } else {
    str = String(page);
    if (link) str += '#' + String(link);
  }
  return (
    <Wrap>
      <Title href={str}>{title}</Title>
    </Wrap>
  );
}
