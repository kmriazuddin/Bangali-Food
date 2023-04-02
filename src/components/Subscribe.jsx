import React from 'react';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';

const Subscribe = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-2 justify-between items-center'>
            <div>
                <p className='p-3 text-justify text-xl'>
                <span className='text-2xl font-bold text-orange-500'>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis ipsum, 
                temporibus reprehenderit quas cumque, esse minima corrupti expedita earum nisi! Quisquam officiis autem dicta 
                voluptatibus enim culpa magni cumque excepturi, libero ad quaerat asperiores blanditiis dolorum alias nostrum 
                nobis quo distinctio eum cupiditate sed repellat? Similique cupiditate, voluptatibus dicta quo unde dolorum aliquam nihil. 
                Quaerat dolores nostrum laboriosam ducimus laudantium illo eaque ullam.
                </p>
                <div className='flex gap-3 items-center justify-evenly'>
                    <FaFacebook className="icon text-orange-600" size={30} />
                    <FaTwitter className="icon text-orange-600" size={30} />
                    <FaYoutube className="icon text-orange-600" size={30} />
                    <FaInstagram className="icon text-orange-600" size={30} />
                    <FaPinterest className="icon text-orange-600" size={30} />
                    <button className='border-orange-500 hover:bg-orange-600 hover:text-white'>Subscribe</button>
                </div>
            </div>
            <div>
            <iframe className='rounded-sm' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.915900404254!2d90.36542960000001!3d23.748129149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1680462312657!5m2!1sen!2sbd"
             width="400" height="300" style={{ border : "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;