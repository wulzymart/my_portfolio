import Image from "next/image"
const CarouselItem = ({imageId, title, description, link}) => {
  return (
    <div className=" flex flex-col md:flex-row gap-10 items-center md:w-10/12 mx-auto  bg-slate-800 p-10">
        <div>
        {imageId && <Image src={`https://drive.google.com/uc?id=${imageId}`} width="800" height="500" alt={title}/>}
        </div>
        <div className="text-left flex flex-col gap-4">
            <h6 className="md:text-xl font-medium">{title}</h6>
            <p className="text-sm md:text-base">{description}</p>
            <a className="text-red-200" href={link || "#"} target="blank">check it out</a>
        </div>
    </div>
  )
}

export default CarouselItem