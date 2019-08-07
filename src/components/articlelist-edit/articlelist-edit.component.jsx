import React from 'react';

import ArticleEdit from '../article-edit/article-edit.component';

const ArticleListEdit = ({filteredArticles}) => (
    <div>
        {
            filteredArticles.map((article, i) => {
                return(
                    <ArticleEdit key={i} article={article} />
                );
            })
        }
    </div>
);

export default ArticleListEdit;
