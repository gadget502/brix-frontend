import React from 'react';
import styled from 'styled-components';


const Content = styled.span`
  line-height: 1.4em;
  display: contents;
  white-space: pre-wrap;
  font-family: Verdana, Segoe UI, 맑은 고딕;
`;

const NewLineObj = styled.span`
    display: block;
    margin-bottom: -5px;
`;
class NewLine extends React.Component {
    render() {
        return (
            <NewLineObj> </NewLineObj>
        );
    }
}

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
