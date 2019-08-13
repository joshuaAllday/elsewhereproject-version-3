import React from 'react';

import PageCard from '../../components/page-card/page-card.component';
import SearchableArticlelistContainer from '../../components/searchable-articlelist/searchable-articlelist.container';
import Header from '../../components/header/header.component';

import './edit-page.styles.css';

const EditPage = () => (
    <div className='edit-page-container'>
        <Header/>
        <PageCard>
            <SearchableArticlelistContainer />
        </PageCard>
    </div>
);

export default EditPage;

