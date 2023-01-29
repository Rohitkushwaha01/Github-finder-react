import { useState,useContext} from 'react';
import GithubContext from '../../context/github/Github.context';
import AlertContext from '../../context/alert/Alert.context';

export default function UserSearch() {

  const [text, setText] = useState("");
  const {users, searchUser, clearUser} = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert("Please enter something",'error')
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
    <div className='flex justify-center items-center mb-4'>
      <div className=''>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black focus:outline-amber-300 " placeholder='Search' value={text} onChange={handleChange} />
              <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg text-amber-300 hover:bg-amber-300 hover:text-black' >Search</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
        <button className="btn btn-ghost btn-lg hover:text-amber-300 ml-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      )}      
    </div>
  )
}
