'use client'

import Image from "next/image"
import { useState } from "react"

export default function Carrousel() {
  const [currentImg, setCurrentImg] = useState<boolean>(true)

  setTimeout(() => {
    setCurrentImg(!currentImg)
  }, 6000)

  return (
    <div className="flex relative">
      <Image
        className={`translate-y-5 -translate-x-2 absolute transition-all ease-in-out ${!currentImg ? 'opacity-0 duration-[1000ms]' : 'duration-[4000ms]'}`}
        src="/fernando.png"
        alt="Fernando Utizi"
        width={120}
        height={120}
      />
      <Image
        className={`translate-y-5 transition-all ease-in-out ${currentImg ? 'opacity-0 duration-[1000ms]' : 'duration-[4000ms]'}`}
        src="/exodo_on.png"
        alt="Fernando logo"
        width={120}
        height={120}
      />
    </div>
  )
}