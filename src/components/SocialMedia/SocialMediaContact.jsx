import React from 'react';
import {BsTwitter,BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';

export default function SocialMediaContact (){

    return(
        <div className='app__socialContact'>
            <div><a href='https://twitter.com/MayueDahake' target="_blank" rel="noopener noreferrer"><BsTwitter /></a></div>
            <div><a href='https://www.instagram.com/mayue.dahake' target="_blank" rel="noopener noreferrer"><BsInstagram/></a></div>
            <div><a href='https://github.com/mayue13' target="_blank" rel="noopener noreferrer"><BsGithub/></a></div>
            <div><a href='https://www.linkedin.com/in/mayurdahake/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></div>            
        </div>

    )

}