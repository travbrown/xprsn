import React, {useContext, useState, useEffect}  from 'react';
import { ImgDisplay } from './ImgDisplay';
import { MediaContext } from '../MediaContext';



export function Column(prop){
    const {fullImageFilePaths} = useContext(MediaContext);

    return(
        <>
            {prop.columnImages.map(function(imgFullPath){
                return (
                    <ImgDisplay imgFullPath={imgFullPath}/>
                );
            })}
        </>
    );
}