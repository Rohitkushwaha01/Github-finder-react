import GithubContext from "../../context/github/Github.context"
import { useContext } from "react";
import { FaEye, FaCodeBranch } from 'react-icons/fa'

export default function UserRepo() {
    const { repos } = useContext(GithubContext)
    console.log(repos)

    return (
        <div className="container my-8">
            {repos.map((repo, index) => {
                if (index < 6) {
                    return (
                        <div className=" w-full xl:lg:w-4/5 sm:mx-2 mx-0 lg:mx-auto xl:mx-auto lg:mb-5 xl:mb-5 mb-2 border border-1 sm:px-10 sm:py-5 p-5 flex justify-between rounded-md text-white">
                            {console.log(repo)}
                            <div>
                                <div className="text-amber-300">
                                    <h1 className="sm:text-2xl text-md">{repo.name}</h1>
                                </div>
                                <div className="my-2 flex w-10 justify-between items-center">
                                    <FaEye className="text-amber-300 text-xl" />
                                    <p>{repo.watchers}</p>
                                </div>
                            </div>
                            <div className="w-24 flex items-center justify-evenly">
                                <FaCodeBranch className="text-amber-300 text-2xl" />
                                <h3 className="sm:text-2xl hover:cursor-pointer hover:text-blue-500 text-md">Fork</h3>
                            </div>
                        </div>
                    )
                }else{
                    return null;
                }
            })}
        </div>
    )
}
