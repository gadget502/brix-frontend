import React from 'react';
import NotePage from 'page/Reader/Note/NotePage'

function _queryToProps(query) {
    return {
        ArticleId: query.ArticleId,
    };
}

export default function ArticleDetail({ ArticleId }) {
    return (
        <NotePage />
    );
}

ArticleDetail.getInitialProps = async (ctx) => {
    const { store, query } = ctx;

    return {
        ..._queryToProps(query),
    }
}
