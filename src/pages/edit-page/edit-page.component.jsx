import React from 'react';

import PageCard from '../../components/page-card/page-card.component';
import SearchableArticlelistContainer from '../../components/searchable-articlelist/searchable-articlelist.container';

const EditPage = () => (
    <div>
        <PageCard>
            <SearchableArticlelistContainer />
        </PageCard>
    </div>
);

export default EditPage;

