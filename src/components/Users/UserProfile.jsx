import { useContext } from "react"
import GithubContext from "../../context/github/Github.context"
import UsersPopularity from "./UsersPopularity"
import UserRepo from "./UserRepo"

export default function UserProfile() {
    const { user } = useContext(GithubContext)
    const { avatar_url, bio, blog, location, name, html_url, twitter_username, hireable} = user
    
    return (
    <>
        <div className=" sm:w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 text-white w-full">
            <div>
                <img src={avatar_url} alt="" className="rounded-3xl xl:w-[94%] lg:w-[80%] sm:w-[50%] md:w-[80%] m-auto w-[80%]" />
            </div>
            <div className="user-info w-[100%] mt-4 text-center lg:text-left">
                <div className="px-5">
                    <h1 className="text-3xl text-amber-300 ">{name}</h1>
                    <p className="mb-3">{bio}</p>
                    {(hireable === true)?<span className="text-green-500 border border-solid rounded-md text-sm bg-white">hireable</span> :<span className="text-red-500 border border-solid rounded-md text-sm bg-white">Not hireable</span>}
                </div>
                <div className="px-5">
                    <button className="btn mt-5 btn-outline border-amber-300 border-1 hover:bg-amber-300">
                        <a href={html_url}>Visit Github</a>
                    </button>
                </div>
                <div className="flex lg:justify-between sm:justify-center justify-center mt-5 shadow-lg flex-wrap xl:flex-nowrap">
                    {location && <div className="border-amber-300 border-1 p-5">
                        <p>Location</p>
                        <strong className="text-amber-300">{location}</strong>
                    </div>
                    }
                    {blog && <div className="border-amber-300 border-1 p-5">
                        <p>Website</p>
                        <strong className="text-amber-300">{blog}</strong>
                    </div>
                    }
                    {twitter_username && <div className="border-amber-300 border-1 p-5">
                        <p>Twitter</p>
                        <strong className="text-amber-300">{twitter_username}</strong>
                    </div>}
                </div>
            </div>
        </div>
        <UsersPopularity/>
        <UserRepo/>
    </>
    )
}
