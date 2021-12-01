import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

export const Footer = () => { 

    return (
        <>
            <footer id='footer' style={{textAlign:"center", marginBottom:"10px"}}>
                <div className="socialMediaLinks">
                    <SocialMediaIconsReact 
                    iconSize="6" 
                    size="40" 
                    backgroundColor="rgba(20,21,21,1)" 
                    iconColor="rgba(255,255,255,1)" 
                    roundness="50%" 
                    icon="github" 
                    url="https://github.com/travbrown"/>
                    <div style={{width:"15px"}}></div>
                    
                    <SocialMediaIconsReact 
                    iconSize="6" 
                    size="40" 
                    backgroundColor="rgba(20,21,21,1)" 
                    iconColor="rgba(255,255,255,1)" 
                    roundness="50%" 
                    icon="instagram" 
                    url="https://instagram.com/_xprsv"/>
                    <div style={{width:"15px"}}></div>
                    
                    <SocialMediaIconsReact 
                    iconSize="6" 
                size="40" 
                backgroundColor="rgba(20,21,21,1)" 
                iconColor="rgba(255,255,255,1)" 
                roundness="50%" 
                icon="linkedin" 
                url="https://linkedin.com/in/xprsn"/>
                </div>
            </footer>
        </>
    );
};