import { Container } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { storage } from "../firebase";
import firebase from 'firebase/app';
import "firebase/storage";
import { ImgDisplay } from './ImgDisplay';


export function ListAllFiles(folder_name){

    const [listOfImgs, setListOfImgs] = useState([]);

    useEffect(()=>{
        storageListAllFiles(folder_name.folder_name);
    },[]);

    function storageListAllFiles(folder_name){
        // Find all the prefixes and items.
        const allImages = [];
        const storage = firebase.storage();
        const folderRef = storage.ref(folder_name);
        folderRef.listAll()
        .then((res) => {

            res.items.forEach((itemRef) => {
                allImages.push(itemRef.fullPath);
            });
            setListOfImgs(allImages);

        }).catch((error) => {
        // Uh-oh, an error occurred!
            console.log(error);
        });
    }

    return (
        <Container>
            <tbody>
                
                {listOfImgs.map(function(imgFullPath){
                    return (
                        
                            <ImgDisplay imgFullPath={imgFullPath}/>
                        );
                })}
                
            </tbody>
        </Container>

    );
}