import React, { Component } from 'react';
import { connect } from 'react-redux'

import List from './List';
import Filter from './Filter';
import Pagination from './Pagination';
import * as actions from '../ducs/actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.loadUsers();
  }
  render() {
    const { pageItems, pages, filter, filterUsers, changePage, currentPage, loading } = this.props;
    return (
      <article className="App">
          <h1>Filter:</h1>
          <hr />
          <Filter
            change={filterUsers}
            filter={filter}
           />
           {loading
             ? <h3>Loading...</h3>
             : <List title={"users"} list={pageItems} />
            }
         
          <Pagination current={currentPage} count={pages} change={changePage} />
      </article>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users,
    currentPage: store.currentPage,
    pageItems: store.pageItems,
    pages: store.pages,
    filter: store.filter,
    loading: store.loading,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(actions.loadUsers()),
    filterUsers: (value, name) => dispatch(actions.filterUsers({value, name})),
    changePage: (page) => dispatch(actions.changePage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
