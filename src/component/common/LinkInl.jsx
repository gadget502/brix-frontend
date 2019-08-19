import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: inline;
`;

const Title = styled.a`
  font-size: 1em;
  line-height: 1.4em;
`;

export default function LinkInl({ title, link }) {
    return (
        <Wrap>
            <Title href={`#${link}`}>{title}</Title>
        </Wrap>
    );
}
