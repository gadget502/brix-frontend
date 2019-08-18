import React from 'react';
import styled from 'styled-components';


const Content = styled.span`
  line-height: 1.4em;
  display: contents;
  white-space: pre-wrap;
  font-family: Verdana, Segoe UI, 맑은 고딕;
`;
const NewLine = styled.br`
    display: block;
    margin-bottom: 15px;
    content: " ";
`;

class Run extends React.Component {
    render() {
        if (this.props.newline) {
            return (
                <Content style={{ ...this.props.style }}>
                    {this.props.children}
                    <NewLine />
                </Content>
            );
        } else {
            return (
                <Content style={{ ...this.props.style }}>
                    {this.props.children}
                </Content>
            );
        }
    }
}
Run.defaultProps = {
    style: '',
    newline: false
};

export default Run;
