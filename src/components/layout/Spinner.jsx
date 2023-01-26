import spinner from './assets/spinner.gif';

export default function Spinner() {
  return (
    <div className='w-100'>
        <img src={spinner} alt="loader" className='text-center mx-auto'/>
    </div>
  )
}
