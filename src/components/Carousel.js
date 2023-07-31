"use client"
import CarouselItem from "./CarouselItem"
import { useState } from "react"

const Carousel = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const next = ()=>{
        let newIndex = activeIndex + 1
        if (newIndex >= data.length) newIndex = 0
        setActiveIndex(newIndex)
    }
    const prev = ()=>{
        let newIndex = activeIndex - 1
        if (newIndex < 0) newIndex = data.length - 1
        setActiveIndex(newIndex)
    }
  return (
    <div className="">
    <div className="relative min-h-[450px] md:min-h-[350px]">
        {
        
        data.map((item, i) =>
            <div id = {`carousel-item-${i}`} className={` absolute top ${activeIndex === i ? "visible" : "invisible"} `}  key={item.title}><CarouselItem {...item}/></div>)
    }</div>
    <div className="flex gap-4 justify-center">
        <button onClick={prev} className="px-4 py-2 rounded-full bg-slate-800/30">&#171;</button>
        <a href="#" className=" px-4 py-2 rounded-full bg-slate-800/30">View all</a>
        <button onClick={next} className=" px-4 py-2 rounded-full bg-slate-800/30">&#187;</button>
    </div>
    </div>
  )
}

export default Carousel