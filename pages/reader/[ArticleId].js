import React from 'react';
import Prologue from '../../src/component/algorithms-jeffe/Prologue'
import Chapter0 from '../../src/component/algorithms-jeffe/Chapter0'
import Chapter1 from '../../src/component/algorithms-jeffe/Chapter1'
import Chapter2 from '../../src/component/algorithms-jeffe/Chapter2'
import Reader from '../../src/page/Reader/Reader'

function _queryToProps(query) {
    return {
        ArticleId: query.ArticleId,
    };
}

export default function ArticleDetail({ ArticleId }) {
    var dictObject = {};
    dictObject['prologue'] = (<Prologue />);
    dictObject['0'] = (<Chapter0 />);
    dictObject['1'] = (<Chapter1 />);
    dictObject['2'] = (<Chapter2 />);

    var dictTitle = {};
    dictTitle['prologue'] = 'Prologue';
    dictTitle['0'] = 'Chapter 0. Introduction';
    dictTitle['1'] = 'Chapter 1. Recursion';
    dictTitle['2'] = 'Chapter 2. Backtracking';

    if (ArticleId in dictObject) {
        return Reader({ page: dictObject[ArticleId], title: dictTitle[ArticleId] });
    }
    return (
        <div>{ArticleId}</div>
    )
}

ArticleDetail.getInitialProps = async (ctx) => {
    const { store, query } = ctx;

    return {
        ..._queryToProps(query),
    }
}