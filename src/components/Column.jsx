import React from 'react';
import { ImgDisplay } from './ImgDisplay';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


export function Column(prop){

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

    return(
        <>
            {prop.columnImages.map(function(imgFullPath){
                return (
                    <Paper className={classes.paper}>
                        <ImgDisplay imgFullPath={imgFullPath}/>
                    </Paper>
                );
            })}
        </>
    );
}