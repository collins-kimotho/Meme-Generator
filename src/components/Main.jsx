import React from 'react'
import meme from '../images/takeMoney.webp'
import { useState, useEffect } from 'react'

const Main = () => {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: 'https://i.imgflip.com/1bij.jpg'
    })
    const [allMemes, setAllMemes] = useState([])

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme, [name]: value
        }))
    }

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }


  return (
    <main className="flex items-center justify-center m-4 p-4 overflow-hidden">
        <section className='flex flex-col items-center justify-center'>
            <div className="flex items-center justify-center w-full gap-4">
                <label htmlFor="" className="">Top Text
                    <input 
                        type="text" 
                        className="border-2 rounded-sm p-2 text-base w-fit block"
                        placeholder='One does not simply'
                        name='topText' 
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label htmlFor="" className="">Bottom Text
                    <input 
                        type="text " 
                        className="border-2 rounded-sm p-2 text-base block"
                        placeholder='Walk into Mordor'
                        name='bottomText'
                        onChange={handleChange}
                        value={meme.bottomText }
                    />

                </label>
               
            </div>
            <button 
                className="bg-purple-500 w-full mb-8 m-4 p-4 rounded-md "
                onClick={getMemeImage}
            >
                Get a new meme image
            </button>
            <div className="relative flex flex-col justify-center items-center mx-4 w-full">
                <img src={meme.imageUrl} alt="" className=' rounded-sm m-4' />
                <span 
                    className="absolute text-center top-0 text-4xl font-bold text-white p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 
                    ">{meme.topText.toUpperCase()}</span>
                <span className="absolute text-center bottom-0 text-4xl font-bold text-white p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                    ">{meme.bottomText.toUpperCase()}</span>
            </div>
        </section>
       
    </main>
  )
}

export default Main