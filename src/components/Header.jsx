import React from 'react'
import trollFace from "../images/troll-face.png"

const Header = () => {
  return (
    <header className=" bg-purple-700 font-inter w-full overflow-hidden">
      <div className="flex items-center justify-start md:justify-center p-6 gap-4">
        <img src={trollFace} alt="troll-face" width={50}
              className=''
          />
          <h1 className="font-bold text-2xl text-white">Meme Generator</h1>
        </div>
       
    </header>
  )
}

export default Header