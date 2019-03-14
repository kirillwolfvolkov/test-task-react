import {
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
    GENERATE_LIST,
    CHANGE_FILTER,
    FILTER_USERS,
    CHANGE_PAGE
} from './constants';

const createArray = (data) => {
    return data.map((item, key) => {
        return ({
            name: `${item.surname} ${item.name} ${item.gender}`,
            region:  item.region,
            year: new Date(item.birthday ? item.birthday.mdy : 1990).getFullYear(),
            id: item.birthday ?  key+ item.birthday.raw : key
        })
    })
}

export function loadUsers() {
    return dispatch => {
        dispatch({
            type: LOAD_USERS_REQUEST
        })

        fetch('https://uinames.com/api/?amount=120&ext')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: LOAD_USERS_SUCCESS,
                    payload: createArray(data)
                });
                dispatch({
                    type: GENERATE_LIST,
                })
            })
            .catch(err => {
                console.log("ERROR__", err);
            });;
    }
}

export function filterUsers(filter) {
    return dispatch => {
        dispatch({
            type: CHANGE_FILTER,
            payload: filter
        });
        dispatch({
            type: FILTER_USERS
        });
        dispatch({
            type: GENERATE_LIST,
        });
    }
}

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    payload: page
})