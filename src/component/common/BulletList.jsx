import React from 'react';
import styled from 'styled-components';

const Wrap = styled.ul`
  margin: 0 40px 40px 35px;
  list-style-type: disc;
`;

const Item = styled.li`
  margin-bottom: 0.75em;
`;

const Title = styled.span`
  font-family: serif;
  font-weight: bold;
  margin-bottom: 1em;
`;

const Content = styled.span`
  line-height: 1.4em;
`;

export default function BulletList({ list }) {
  const renderItem = (item) => {
    return (
      <Item>
        {item.title && <Title>{item.title}: </Title>}
        <Content>{item.content}</Content>
      </Item>
    );
  };

  return <Wrap>{list.map((item) => renderItem(item))}</Wrap>;
}
