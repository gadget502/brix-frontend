import React from 'react';
import styled from 'styled-components';


const ContentWrap = styled.span`
    display: block;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 10px;
    width: fit-content;
    border: solid;
    font-size: 1.0em;
    line-height: 1.4em;
    white-space: pre-wrap;
    font-family: Verdana, Segoe UI, 맑은 고딕;
`;

export const FuncName = styled.span`
    font-variant: small-caps;
`;
export const FuncNameUL = styled.span`
    font-variant: small-caps;
    border-bottom: solid 0.7px;
`;
export const CodeBoxTab = styled.span`
    display: inline-block;
    width: 30px;
`;

class CodeBox extends React.Component {
    render() {
        return (
            <ContentWrap>
                {this.props.children}
            </ContentWrap>
        );
    }
}

export default CodeBox;
