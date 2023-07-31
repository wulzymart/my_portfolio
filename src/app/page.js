import Image from 'next/image'
import "@/additional-css/mouse_scroll.css"
import Button from '@/components/Button'
import ContactForm from '@/components/ContactForm'
import {FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp} from "react-icons/fa"
import Carousel from '@/components/Carousel'
import Navbar from '@/components/Navbar'

const stack = [
  "HTML","CSS","Javascript","Nodejs","Express","ReactJs","React Native","NextJs","C","Python","Mongodb","SQL","Firebase"
]
const projects = [
  {
    title: "Logistics Suite",
    description: "An all in one logistics suite, built using Reactjs, Nodejs, Express and Firebase. Features include waybill creation, route and trip management, item tracking, staff management...",
    imageId:"16tWLqxaopHSvSyFyiLMkeNnfiFQHkyoO"
  },
  {
    title: "Logistics Company website",
    description: "A logistics company built with NextJs and Firebase. features include shipment tracking, user management, quote generation and order request",
    imageId:"1vpt7h_tlOpYFmhvcxpiVvkkoZURjHEJO",
    link: "https://www.firstlinelogistics.ng/"
  },
]


export default function Home() {
  return (
   <main className='scroll-smooth'>
    <Navbar/>
    <section id='hero' className='bg-[url("../assets/bg.jpg")] bg-cover bg-center h-screen w-full flex align-middle items-center relative animate-pulse'>
      <div className='w-full flex flex-col p-10 gap-12'>
      <h1 className='font-bold text-center text-3xl md:text-5xl uppercase font-sans tracking-wider'>Hi, I am Martins Olawole</h1>
      <div className='text-center font-openSans flex flex-col gap-3'>
        <p className='text-xl'>I am a software engineer and a web and mobile app developer.</p>
        <p>I create stunning and responsive websites and applications that guarantee the success of your brand</p>
      </div>
      <div className='mx-auto flex flex-wrap gap-5 md:gap-10'>
        <Button
        addedStyle="bg-[#0D1282] hover:bg-blue-600"
        >My Works
        </Button>
        <Button
        addedStyle="bg-[#0D1282] hover:bg-blue-600"
        >Get in Touch
        </Button>
        </div>
      </div>
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </section>
    <section id='about' className=' pt-20 md:p-20 lg:px-32 lg:pt-32 bg-slate-950'>
    <div className='text-center'>
      <h2 className='text-4xl font-bold font-sans mb-14'>About</h2>
      <div className='flex flex-col gap-3 font-openSans px-10 md:px-10 lg:px-20'>
        <p>I am a <em>Software Engineer</em> and a <em>Fullstack Developer</em>, I build both frontend and backend web and modile applications with developing expertise on desktop applications.</p>
        <p>I also love to share my knowledge with friends and partners. I make free youtube tutorials on my channel <a>code with mart</a>.</p>
        <p>I am open to forming new network connections and eager to collaborate on projects, feel free to connect with me on my social media handles.</p>
        <p>I am also open to new employment opportunites, where I can learn and bond with an awesome team, please kindly contact me if you have such opportunities that match my skills</p>
      </div>
    </div>
    <div className='mt-20'>
      <h3 className='text-center text-2xl font-bold font-sans mb-20'>My Stack</h3>
      <div className='grid grid-cols-3 gap-10 md:flex md:flex-wrap md:gap-x-20 md:gap-y-10 place-content-center w-[60%] mx-auto'>
        {
          stack.map(skill => (<div className='flex flex-col gap-6 flex-2' key = {skill}><Image src={`/icons/${skill.toLowerCase()}.png`} width={50} height={50} alt={skill}/> <p>{skill}</p></div>))
        }
      </div>
    </div>
    
    </section>
    <section id='portfolio' className='pt-20 pb-10 px-10 md:p-16 lg:px-32 lg:pt-20 bg-slate-950'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold font-sans mb-14'>My Works</h2>
      <div className='flex flex-col gap-3 font-openSans px-10 md:px-10 lg:px-20 mb-10'>
        <p>Here are some of my past jobs, feel free to have a look</p>
      </div>
      <Carousel data={projects}/>
      </div>

    </section>
    <section id='contact' className='p-10 md:px-32 md:pt-32 bg-slate-950'>
      <div>
        <h2 className='text-center text-3xl font-sans font-bold'>Get in touch</h2>
        <div className='mt-20'>
          <ContactForm/>
        </div>
      </div>
    </section>
    <footer className='p-4 bg-slate-950'>
      <div className='flex flex-row gap-4 justify-center'>
            <a href='https://github.com/wulzymart'><FaGithub className='text-2xl'/></a>
            <a href='https://www.linkedin.com/in/olawale-martins-olawole-67ab9310a/'><FaLinkedinIn className='text-2xl'/></a>
            <a href='https://twitter.com/OlawoleMartins?t=CT1xnFm6uKIdz3aVAuwcxA&s=09'><FaTwitter className='text-2xl'/></a>
            <a href='mailto:olawalemart@gmail.com'><FaEnvelope className='text-2xl'/></a>
            <a href='https://wa.link/7wcnie'><FaWhatsapp className='text-2xl'/></a>
          </div>
    </footer>
   </main>
  )
}
