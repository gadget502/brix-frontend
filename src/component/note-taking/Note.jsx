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
                <Reply timestamp="123456789"
                    content="최고의 강의입니다. 추천하고싶네요. 값 싸게 산 책인데도 강의 내용이 만족스럽습니다.
                    학점을 매우 엄정하게 주셔서 맘에 드네요. 너무 맘에 들어서 다음 학기에 또 들으러 와야해요^^;" />
                <Reply timestamp="98123456789"
                    content="수학과학생들이 소위최상위권 대학원인 서카포에 지원한다면 이책으로 공부하는것이
                    바람직하다고 생각하네요. Group, symmetric group, linear group중에 classical group들의
                    관계를 옅게나마 서술해주셔서 풍부했습니다. Basic Algebra 읽기전에 추천해요." />
                <Reply timestamp="990123456789"
                    content="국내 인공지능 관련 커뮤니티 현업 종사자님들이 추천해주신 아주 유용한 책입니다.
                    커넥트 재단의 선형대수 강의와 함께 보면 이해안되는 부분이 많이 풀릴 거에요. 참고하세요~" />
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
