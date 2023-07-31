"use client"
import Button from "./Button"
import TextInput from "./TextInput"
import { useState } from "react"

const ContactForm = () => {
    const [contactInfo, SetContactInfo] = useState({
        name: "",
        email: "",
        purpose: ""
    })
    const setContact =(e)=>{
        const {name, value} = e.target;
        SetContactInfo({...contactInfo, [name]: value})
    }
  return (
    <form>
        <div>
            <div className="w-full flex flex-col gap-4">
                <TextInput type="text" name="name" value={contactInfo.name} handleChange={(e)=> setContact(e)} inputStyle="rounded w-full h-10 p-4"/>
                <TextInput type="email" name="email" value={contactInfo.email} handleChange={(e)=> setContact(e)} inputStyle="rounded w-full h-10 p-4"/>
                <textarea name="purpose" value={contactInfo.purpose} onChange={(e)=>setContact(e)} placeholder="Enter your message here" className="rounded w-full p-4" />
                <Button type="submit" addedStyle="bg-blue-950 hover:bg-blue-600">Submit</Button>
            </div>
        </div>
    </form>
  )
}

export default ContactForm