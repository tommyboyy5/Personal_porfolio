import React from 'react'
import { AiFillInstagram,AiFillFacebook,AiOutlineTwitter,AiOutlineWhatsApp } from "react-icons/ai";
import "../styles/footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='logo'>
                <a href="https://www.instagram.com/tommy_lai2/"><AiFillInstagram color='white'/></a>
                <AiFillFacebook color='white'/>
                <AiOutlineTwitter color='white'/>
                < AiOutlineWhatsApp color='white'/>
            </div>
            <p>&copy;</p>
        </div>
    )
}

export default Footer
