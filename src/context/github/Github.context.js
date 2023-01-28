import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUser = async (text) => {
        setloading();

        const param = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${param}`);
        const {items} = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const clearUser = () => {
        dispatch({
            type: 'CLEAR_USERS',

        })
    }

    const setloading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    return <GithubContext.Provider
        value={{
            users: state.users, loading: state.loading, searchUser, clearUser
        }}
    >
        {children}
    </GithubContext.Provider>
}


export default GithubContext;