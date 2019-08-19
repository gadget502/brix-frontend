import React from 'react';
import styled from 'styled-components';
import Reply from './Reply';

import * as Material from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Wrap = styled(Material.Card)``;
const Label = styled.div`
    font-family: Roboto, "Noto-Sans CJK KR", Verdana, "Segoe UI", "맑은 고딕";
`;

class VSpace extends React.Component {
    render() {
        return (
            <div style={{ padding: '0px', paddingBottom: this.props.height }} />
        );
    }
}
VSpace.defaultProps = {
    height: '1.0em'
};

export default class Note extends React.Component {
    onClickHandler() {
        alert('Barney Aye! Add popup menu!');
    }
    render() {
        var e = (x) => {
            x = String(x);
            return (x.length == 1) ? ('0' + x) : (x);
        };

        var d = new Date(Number(this.props.timestamp));
        var str_timestamp = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" +
            d.getDate() + " " + e(d.getHours()) + ":" + e(d.getMinutes()) + ":" + e(d.getSeconds());
        return (
            <Wrap style={{ padding: '24px' }}>
                <Material.Box style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Label style={{ fontSize: '1.8em', display: 'inline-block', width: 'calc(100% - 66px)' }}>{this.props.title}</Label>
                    <Material.IconButton onClick={this.onClickHandler.bind(this)}
                        aria-label="more" aria-controls="long-menu" aria-haspopup="true">
                        <MoreVertIcon />
                    </Material.IconButton>
                </Material.Box>
                <Label style={{ fontSize: '1.0em', color: '#808080', marginBottom: '32px' }}>{str_timestamp}</Label>
                <Label style={{ fontSize: '1.0em' }}>{this.props.content}</Label><br />
                <VSpace height="24px" />
                <Material.TextField placeholder="댓글을 입력하세요..." style={{ width: '100%', marginBottom: '8px' }}></Material.TextField>
                <Material.Button variant="contained">등록</Material.Button>
                <VSpace height="24px" />
                {this.props.children}
            </Wrap>
        );
    }
}
Note.defaultProps = {
    uid: null,
    uuid: null,
    title: "DefaultTitle",
    content: "DefaultContent",
    timestamp: 0
};
