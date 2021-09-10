import React, {useState, useEffect} from 'react';
import { Container} from '@material-ui/core';
import { storage } from "../firebase";
import firebase from 'firebase/app';
import "firebase/storage";


export const ImgDisplay = (imgFullPath) => { 
    const [url, setUrl] = useState('');

    useEffect(() => {
        storageHandle(imgFullPath.imgFullPath);
    },[]);

    function storageHandle(imgFullPath){
        const storage = firebase.storage();
        const imgRef = storage.ref(imgFullPath);
        imgRef.getDownloadURL()
        .then((imageUrl) => {
            
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
            const blob = xhr.response;
            };
            xhr.open('GET', imageUrl);
            xhr.send();
            // Or inserted into an <img> element
            const img = document.getElementById('myimg');
            setUrl(imageUrl);
            // console.log('url:',url);
            img.setAttribute('src', imageUrl);
        })
        .catch((error) => {
            // Handle any errors
            console.log(error);
        });
    }

    return (
        <div>
            <img src={url}/>
        </div>
    );
};