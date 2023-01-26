import React from 'react'
import { FaUser } from "react-icons/fa"

export default function About() {
    return (
        <div className="flex flex-col justify-center  ">
            <div className='text-center mb-10 flex justify-center items-center text-yellow-500 '>
                <h1 className='font-sans text-2xl '>About us </h1>
                <FaUser className='ml-2 text-3xl' />
            </div>
            <div className='sm:mx-6 lg:mx-24 text-yellow-200 text-center'>
                <p>This app allow Users to Check anyones Github profile and see the recent repositiory</p>
                <br />
                <p>Github is a Open source contributing platform allows users to contribute to anyones project which you like.</p>
                <br />
                <p>This app is made by using Github API(Application program integration)</p>
            </div>
        </div>
    )
}

