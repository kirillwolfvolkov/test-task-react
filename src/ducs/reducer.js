import {
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
    GENERATE_LIST,
    CHANGE_FILTER,
    FILTER_USERS,
    CHANGE_PAGE
} from './constants';

export const initialState = {
    users: [],
    filtered: null,
    pageItems: [],
    itemsPerPage: 5,
    currentPage: 1,
    pages: 1,
    loading: false,
    filter: {
      name: '',
      year: '',
      country: ''
    }
}

const setPageList = (store, newPage = 1) => {
    const { itemsPerPage, filtered, users } = store;
    const perPage = [];
    const arr = filtered ? [...filtered] : false || [...users];

    for(let i = (newPage - 1) * itemsPerPage; i<(newPage * itemsPerPage); i++) {
      if (arr[i]) {
        perPage.push(arr[i]);
      }
    }

   return ({
      pageItems: perPage,
      pages: arr.length > itemsPerPage ? parseInt(arr.length / itemsPerPage) : 1,
      currentPage: newPage
    })
}

const filter = (state) => {
    const { users, filter } = state;
    try {
        const temp = users.filter((user) => (
            user.name.indexOf(filter.name) > -1
             && `${user.year}`.indexOf(`${filter.year}`) > -1
             && user.region.indexOf(filter.country) > -1
            )
          );
          return ({
              filtered: [...temp],
              ...setPageList(state),
              currentPage: 1,
          });
    } catch(e) {
        console.log(e);
    }
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_REQUEST:
            return {...state, loading: true};
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            };
        case CHANGE_FILTER:
            const {name, value} = action.payload;
            return {...state, filter: {...state.filter, [name]: value}};
        case FILTER_USERS:
            return {...state, ...filter(state)};
        case GENERATE_LIST:
            return {...state, ...setPageList(state, action.payload), loading: false};
        case CHANGE_PAGE:
            return {...state, ...setPageList(state, action.payload)};
        default:
            return state;
    }
};
