import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Search User 
    const searchUser = async (text) => {
        setloading();

        const param = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${param}`);
        const { items } = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    // Getting a single user
    const getUser = async (login) => {
        setloading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`);
        console.log(response)
        if (response.status === 404) {
            window.location = '/notfound'
        }
        else {
            const data = await response.json();

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
    }

    // Clear all the result obtained when searched
    const clearUser = () => {
        dispatch({
            type: 'CLEAR_USERS',

        })
    }

    // loader(spinner)
    const setloading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    return <GithubContext.Provider
        value={{
            users: state.users, loading: state.loading, user: state.user , searchUser, clearUser, getUser
        }}
    >
        {children}
    </GithubContext.Provider>
}


export default GithubContext;