import { Container } from '@material-ui/core';
import React, {useState, useEffect, useContext } from 'react';
import { storage } from "../firebase";
import { MediaContext } from '../MediaContext';
import firebase from 'firebase/app';
import "firebase/storage";
import { ImgDisplay } from './ImgDisplay';
import { Column } from './Column';


export function ListAllFiles(folder_name){

    const [columnImage1, setColumnImage1] = useState([]);
    const [columnImage2, setColumnImage2] = useState([]);
    const [columnImage3, setColumnImage3] = useState([]);
    
    const [url, setUrl] = useState('');
    const {fullImageFilePaths, setImgFilePaths} = useContext(MediaContext);


    useEffect(()=>{
        storageListAllFiles(folder_name.folder_name);
    },[]);

    function splitArrayEvenly(array, num_of_partitions) {
        array = array.slice();
      
        let result = [];
        while (array.length) {
          result.push(array.splice(0, Math.ceil(array.length / num_of_partitions--)));
        }
        console.log(result);
        return result;
    }

/**
 * Takes in the name of a folder and retrieves the file stored in the Google firebase 
 * 
 * @param {*} folder_name 
 * @returns allImages - an array containing all the image's full file path
 */
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
            let split_array = splitArrayEvenly(allImages, 3)

            setColumnImage1(split_array[0]);
            setColumnImage2(split_array[1]);
            setColumnImage3(split_array[2]);

        }).catch((error) => {
        // Uh-oh, an error occurred!
            console.log('Getting the file paths failed --> ',error);
        });
    }

    return (
        <Container>
            <tr>
                <td> <Column columnImages={columnImage1} /> </td>
                <td> <Column columnImages={columnImage2} /> </td>
                <td> <Column columnImages={columnImage3} /> </td>
            </tr>
        </Container>

    );
}