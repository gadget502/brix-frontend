import React from 'react';
import styled from 'styled-components';

import * as NComp from 'component/note-taking';

const Wrap = styled.div`
    padding: 20px;
`;

export default function NotePage({ page = null }) {
    return (
        <Wrap>
            <NComp.Note
                timestamp="987654321"
                title="저는 학점을 잘 줍니다."
                content="Greyhound divisively hello coldly wonderfully marginally in a far far away galaxy.">
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
            </NComp.Note>
        </Wrap>
    )
}
