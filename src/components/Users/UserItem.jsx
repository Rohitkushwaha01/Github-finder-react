import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function UserItem({ user: { login, avatar_url, followers_url, following_url } }) {

    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div className='w-[100%] flex-row flex justify-evenly items-center'>
                    <div className="avatar">
                        <div className="rounded-full shadow w-20 h-20">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                    <div className="login text-center">
                        <h1 className='card-title my-2 '>{login}</h1>
                        <Link to={`/user/${login}`}>Show Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem