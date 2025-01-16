import React from 'react'
import meme from '../images/takeMoney.webp'

const Main = () => {
  return (
    <main className="p-8 flex flex-col items-center justify-center m-auto">
        <section className=''>
            <div className="m-4  flex gap-4 w-full items-center justify-between">
                <label htmlFor="" className="block">Top Text
                    <input 
                        type="text" 
                        className="border-2 block rounded-sm p-2 text-base"
                        placeholder='One does not simply'
                        name='topText' 
                    />
                </label>
                <label htmlFor="" className="">Bottom Text
                    <input 
                        type="text " 
                        className="border-2 block rounded-sm p-2 text-base"
                        placeholder='Walk into Mordor'
                    />

                </label>
                
            </div>
            <button className="bg-purple-500 w-full mb-8 mx-4 p-4 rounded-md">Get a new meme image</button>
            <div className="relative flex flex-col justify-center items-center m-4 w-full">
                <img src={meme} alt="" className=' rounded-sm m-4' />
                <span className="absolute text-center top-0 text-4xl font-bold text-white p-4">One does not simply</span>
                <span className="absolute text-center bottom-0 text-4xl font-bold text-white p-4">Walk into Mordor</span>
            </div>
        </section>
       
    </main>
  )
}

export default Main