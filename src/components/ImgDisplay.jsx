import React, {useState, useEffect} from 'react';
import { Container} from '@material-ui/core';
import { storage } from "../firebase";
import firebase from 'firebase/app';
import "firebase/storage";
import sunset from "../portfolio/malik_profile.jpg";

/** TODO:
 * - acquire list of file in storage folders
 * - create a running display of images
 */

export const ImgDisplay = (images) => { 
    const [url, setUrl] = useState('');

    useEffect(()=>{
        storageHandle();
    },[]);

    function storageHandle(){
        const storage = firebase.storage();
        const photographyRef = storage.ref('photography/ccc.jpg');
        console.log('ref -->',photographyRef);
        photographyRef.getDownloadURL()
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'

            // This can be downloaded directly:
            console.log('We are here', url);
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
            const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            // Or inserted into an <img> element
            const img = document.getElementById('myimg');
            setUrl(url);
            console.log('url:',url);
            img.setAttribute('src', url);
            

        })
        .catch((error) => {
            // Handle any errors
            console.log(error);
        });

    }

    return (
        <Container>
            {/* pass props in thru 'images' */}
            <img src={url}/>
        </Container>
    );
};