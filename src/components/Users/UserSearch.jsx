import { useState,useContext, useReducer } from 'react';
import GithubContext from '../../context/github/Github.context';


export default function UserSearch() {

  const [text, setText] = useState("");
  const {users, searchUser, clearUser} = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert("please enter something")
    }
    else {
      searchUser(text)
      setText('')
    }
  }

  const handleClear = () => {
    setText('')
    clearUser();
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div className=''>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder='Search' value={text} onChange={handleChange} />
              <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg' >Search</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
        <button className="btn btn-ghost btn-lg" onClick={handleClear}>
          Clear
        </button>
      </div>
      )}
      
    </div>
  )
}
