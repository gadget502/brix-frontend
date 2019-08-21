import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 20px 20px;
`;

const Title = styled.a`
  font-size: 1em;
  line-height: 1em;
  text-decoration: none;
  color: black;
  font-weight: ${(props) => (props.isSubLink ? 'regular' : 'bold')};
`;

export default function Link({ title, link, page = null, isSubLink = false }) {
  var str;
  if (!page) {
    str = '#' + String(link);
  } else {
    str = String(page);
    if (link) str += '#' + String(link);
  }
  return (
    <Wrap>
      <Title isSubLink={isSubLink} href={str}>
        {isSubLink ? <span>&emsp;</span> : ''}
        {title}
      </Title>
    </Wrap>
  );
}
