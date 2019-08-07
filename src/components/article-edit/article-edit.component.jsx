import React from 'react';

import {ArticleContainer} from './article-edit.styles';

const ArticleEdit = ({article}) => (
    <ArticleContainer>
        <h5>
            {article.articletitle}
        </h5>
    </ArticleContainer>
);

export default ArticleEdit;
