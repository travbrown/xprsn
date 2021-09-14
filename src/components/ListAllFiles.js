import React, {useState, useEffect } from 'react';
import { storage } from "../firebase";
import firebase from 'firebase/app';
import "firebase/storage";
import { Column } from './Column';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export function ListAllFiles(folder_name){

    const [columnImage1, setColumnImage1] = useState([]);
    const [columnImage2, setColumnImage2] = useState([]);
    const [columnImage3, setColumnImage3] = useState([]);
    
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    const classes = useStyles();

    useEffect(()=>{
        storageListAllFiles(folder_name.folder_name);
    },[]);

    function splitArrayEvenly(array, num_of_partitions) {
        array = array.slice();
      
        let result = [];
        while (array.length) {
          result.push(array.splice(0, Math.ceil(array.length / num_of_partitions--)));
        }
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

    const FormColumns = (imagesPaths) => {
      return (
        <React.Fragment>
          <Grid item>
              <Column columnImages={imagesPaths} />
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container direction='row' justify='center' spacing={1}>
          <Grid container item direction='column' lg={4} spacing={2}>
            {FormColumns(columnImage1)}
          </Grid>
          <Grid container item direction='column' lg={4} spacing={2}>
            {FormColumns(columnImage2)}
          </Grid>
          <Grid container item direction='column' lg={4} spacing={2}>
            {FormColumns(columnImage3)}
          </Grid>
        </Grid>
      </div>
    );
  }