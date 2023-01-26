import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

export default function FetchUser() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchUser()
    }, [])
    

    const fetchUser = async ()=>{
        const response = await fetch(`https://api.github.com/users`);
        const data = await response.json();
        console.log(data)
        setUsers(data);
        setLoading(false)
    }

    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {
                    users.map((user)=>
                        <UserItem key={user.id} user={user}/>
                    )
                }
            </div>
        )
    }else{
        return <h3><Spinner/></h3>
    }
}