import React from 'react';
import styled from 'styled-components';
import { InlineMath, BlockMath } from 'react-katex';


export const Italic = styled.i`
  font-style: italic
`;
export const Bold = styled.b`
  font-weight: bold
`;

export const BoldItalic = styled.b`
  font-weight: Bold;
  font-style: Italic;
`;

export class InlMat extends React.Component {
  render() {
    return (
      <InlineMath>
        {this.props.children}
      </InlineMath>
    )
  }
}
