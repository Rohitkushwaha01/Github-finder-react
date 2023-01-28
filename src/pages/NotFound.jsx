import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col ">
        <h1 className=" text-5xl mb-10">404 OOPs! Page not found</h1> 
        <Link to="/">
            <button className="btn btn-secondary bg-purle-500 text-white ">Back To Home</button>
        </Link>
    </div>
  )
}
