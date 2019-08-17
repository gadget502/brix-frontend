import React from 'react';
import styled from 'styled-components';
import { InlineMath, BlockMath } from 'react-katex';

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

export default function Expression({ expression }) {
  return (
    <Wrap>
      <BlockMath>{expression}</BlockMath>
    </Wrap>
  );
}
