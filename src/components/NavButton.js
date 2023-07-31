"use client"
const NavButton = ({id, children}) => {
    const scrollTo = ()=>{
        document.getElementById(id).scrollIntoView({behavior: "smooth"}, true)

    }
  return (
    <button onClick={scrollTo} className="hover:text-red-200 font-medium">{children}</button>
  )
}

export default NavButton