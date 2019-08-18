import React from 'react';
import styled from 'styled-components';


const Content = styled.span`
    font-size: 1.0em;
    line-height: 1.4em;
    display: block;
    white-space: pre-wrap;
    font-family: Verdana, Segoe UI, 맑은 고딕;
    text-align: center;
    margin: 20px 0px 20px 0px;
`;
const Desc = styled.span`
    font-size: 1.0em;
    line-height: 1.4em;
    display: inline;
    white-space: pre-wrap;
    font-family: Verdana, Segoe UI, 맑은 고딕;
    text-align: justify;
`;

class Figure extends React.Component {
    input2comp(component_or_string, fwValue) {
        if (!component_or_string)
            return null;

        var str = String(component_or_string);
        if (str !== component_or_string)
            return component_or_string;

        return (
            <Desc style={{ fontWeight: fwValue }}>{str}</Desc>
        );
    }
    render() {
        var caption_list = [];

        var str_id = String(this.props.typename) + ' ' + String(this.props.num) + '.';
        caption_list.push(this.input2comp(str_id, 'bold'));

        var e = this.input2comp(this.props.title, 'bold');
        if (e) {
            caption_list.push(this.input2comp(' ', 'normal'));
            caption_list.push(e);
        }
        e = this.input2comp(this.props.desc, 'normal');
        if (e) {
            caption_list.push(this.input2comp(' ', 'normal'));
            caption_list.push(e);
        }

        var border_option = (this.props.boxed) ? 'solid' : 'none';
        return (
            <Content id={this.props._id} style={{ border: border_option }}>
                {this.props.children}
                {caption_list}
            </Content>
        );
    }
}
Figure.defaultProps = {
    title: null,
    desc: null,
    num: null,
    typename: 'Figure',
    _id: null,
    boxed: false
};

export default Figure;
