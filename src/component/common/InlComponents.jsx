import React from 'react';
import styled from 'styled-components';
import { InlineMath, BlockMath } from 'react-katex';


export const Italic = styled.i`
  font-style: italic
`;
export const Bold = styled.b`
  font-weight: bold
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
