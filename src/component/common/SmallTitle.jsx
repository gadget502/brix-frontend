import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 5px 20px;
`;


const Title = styled.a`
  display: block;
  font-size: 1.1em;
  font-weight: bold;
  color: #2e3092;
  margin-bottom: 1em;
`;

export default function SmallTitle({ title, _id }) {
    const linkId = _id;

    return (
        <Wrap>
            <Title id={linkId}>{title}</Title>
        </Wrap>
    );
}
