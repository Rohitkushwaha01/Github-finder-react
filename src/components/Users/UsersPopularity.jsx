import React, { useContext } from 'react'
import GithubContext from '../../context/github/Github.context'

export default function UsersPopularity() {
    const { user } = useContext(GithubContext)
    const { followers, following, public_repos, login, } = user
    return (
        <div className='flex shadow-lg xl:px-10 lg:px-10 p-4 justify-between xl:w-[80%] md:w-[100%] m-auto sm:flex-wrap md:flex-nowrap flex-wrap mt-5'>
            <div className="text-center xl:w-48 lg:w-48 md:w-40 sm:w-32 w-28 xl:border-r-2 lg:border-r-2 ">
                <h3 className="text-amber-300 text-xl flex-grow">Followers</h3>
                <p className='text-center text-lg text-white mt-3'>{followers}</p>
            </div>
            <div className="text-center xl:w-48 lg:w-48 flex-grow md:w-40 sm:w-30 w-28 xl:border-r-2 lg:border-r-2  ">
                <h3 className="text-amber-300 text-xl">Following</h3>
                <p className='text-center text-lg text-white mt-3'>{following}</p>
            </div>
            <div className="text-center xl:w-48 lg:w-48 md:w-40 flex-grow sm:w-30 w-28 xl:border-r-2 lg:border-r-2  ">
                <h3 className="text-amber-300 text-xl">Public Repo</h3>
                <p className='text-center text-lg text-white mt-3'>{public_repos}</p>
            </div>
            <div className="text-center xl:w-48 lg:w-48 flex-grow md:w-40 sm:w-30 w-28">
                <h3 className="text-amber-300 text-xl">UserId</h3>
                <p className='text-center text-lg text-white mt-3'>{login}</p>
            </div>
        </div>
    )
}
