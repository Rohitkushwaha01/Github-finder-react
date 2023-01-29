import { useContext } from "react"
import GithubContext from "../../context/github/Github.context"

export default function UserProfile() {
    const { user } = useContext(GithubContext)
    const { avatar_url, bio, blog, location, name, html_url, twitter_username } = user
    // followers, following, created_at, public_repos,  login,
    return (
        <div className="flex justify-around m-auto flex-wrap lg:flex-nowrap">
            <img src={avatar_url} alt="" className="rounded-3xl lg:w-[20%] sm:w-[50%] md:w-[40%] m-auto w-[80%]" />
            <div className="user-info w-[100%] mt-4 lg:w-[52%] text-center lg:text-left">
                <div>
                    <h1 className="text-3xl text-amber-300 ">{name}</h1>
                    <p>{bio}</p>
                </div>
                <div>
                    <button className="btn mt-5 btn-outline border-amber-300 border-1">
                        <a href={html_url}>Visit Github</a>
                    </button>
                </div>
                <div className="flex lg:justify-between sm:justify-center justify-center mt-5 shadow-lg flex-wrap xl:flex-nowrap">
                    <div className="border-amber-300 border-1 p-5">
                        <p>Location</p>
                        <strong className="text-amber-300">{location}</strong>
                    </div>
                    <div className="border-amber-300 border-1 p-5">
                        <p>Website</p>
                        <strong className="text-amber-300">{blog}</strong>
                    </div>
                    <div className="border-amber-300 border-1 p-5">
                        <p>Twitter</p>
                        <strong className="text-amber-300">{twitter_username}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
