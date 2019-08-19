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
                content="Greyhound divisively hello coldly wonderfully marginally in a far far away galaxy." />
        </Wrap>
    )
}
