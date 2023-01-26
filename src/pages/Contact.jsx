import React from 'react';
import { FaPersonBooth } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-col justify-center  ">
        <div className='text-center mb-10 flex justify-center items-center text-yellow-500 '>
            <h1 className='font-sans text-2xl '>Contact us </h1>
            <FaPersonBooth className='ml-2 text-3xl'/>
        </div>
        <div className='sm:mx-6 lg:mx-24 text-yellow-200 '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ab, corporis voluptatibus eius qui explicabo minima quia voluptates temporibus unde consectetur cum nostrum quas non cupiditate animi eaque, voluptatem facere repellat minus! Sequi perspiciatis accusantium sint corrupti, iste labore quae dolore omnis eveniet harum a? Eos laudantium reiciendis nostrum at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, itaque?</p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid natus enim vel ratione aspernatur distinctio unde cumque eius quasi laborum, cum ipsam quisquam facilis nesciunt nisi. Magnam, animi debitis dignissimos similique incidunt delectus, non aliquid exercitationem commodi sint veritatis labore cupiditate temporibus rem quisquam architecto ipsa, ratione distinctio. Quis, alias.</p>
        </div>
    </div>
  )
}
