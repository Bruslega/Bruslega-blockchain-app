/*
    author: Alexander Zolotov
*/

import React, { Component } from 'react';

import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

class SearchPage extends React.Component {
  render() {
    return (<div className="container search_results" >
      <SearchHeader onHandleQueryChange={(query) => this.props.onHandleQueryChange(query)} 
      onHandleSearchClicked={(e) => this.props.onHandleStartSearch(e)} query={this.props.query} 
      isSearchInProgress={this.props.isSearchInProgress}/>
        <SearchResults 
        onHandleAddJobToFavorites={(e) => this.props.onHandleAddJobToFavorites(e)}
        onHandleAddEventToFavorites={(e) => this.props.onHandleAddEventToFavorites(e)}
        onHandleAddCourseToFavorites={(e) => this.props.onHandleAddCourseToFavorites(e)}
        onHandleAddFreelancerProjectToFavorites={(e) => this.props.onHandleAddFreelancerProjectToFavorites(e)}/>
      </div>
    );
  }

}

export default SearchPage;