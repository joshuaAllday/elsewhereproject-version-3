import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/articles/articles.selectors';

import ArticleListEdit from '../articlelist-edit/articlelist-edit.component';
import SearchBox from '../searchbox/searchbox.component';

import { ArticleList, ScrollableContainer } from './searchable-articlelist.styles';

class SearchableArticlelist extends React.Component {
    constructor(){
        super();
        this.state = {
            searchfield:''
        }
    }

    onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

    render(){
        const { searchfield } = this.state;
        const { collections } = this.props;
        const filteredArticles = collections.filter(article => {
            return article.articletitle.toLowerCase().includes(searchfield.toLowerCase())
        });
        return(
            <ArticleList>
                <SearchBox searchChange={this.onSearchChange} />
                <ScrollableContainer>
                    <ArticleListEdit filteredArticles={filteredArticles} />
                </ScrollableContainer>
            </ArticleList>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections 
});


export default connect(mapStateToProps)(SearchableArticlelist);
