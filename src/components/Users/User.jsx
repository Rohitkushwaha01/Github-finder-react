import { useEffect, useContext } from "react"
import GithubContext from "../../context/github/Github.context"
import { useParams } from "react-router-dom"
import UserProfile from "./UserProfile"

export default function User() {

    const { getUser } = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
        getUser(params.login)
    })

    return (
        <div>
            <UserProfile />
        </div>
    )
}
