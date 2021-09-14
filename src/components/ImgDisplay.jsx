import React, {useState, useEffect} from 'react';
import { storage } from "../firebase";
import firebase from 'firebase/app';
import "firebase/storage";


export const ImgDisplay = (imgFullPath) => { 
    const [url, setUrl] = useState('');

    useEffect(() => {
        getImageFromFirebase(imgFullPath.imgFullPath);
    },[]);

    function getImageFromFirebase(imgFullPath){
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
        <>
            <img src={url}/>
        </>
    );
};