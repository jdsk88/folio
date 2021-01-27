import React, { useState, useEffect } from 'react';
import axios from "axios"
import { API_URL } from "../config/constants";
export const GeoLocator = () => {
    // const [employerID, setEmployerID] = useState()
    // useEffect( async () => {
    //     await axios.get(`${API_URL}users/:user_id`)
    //     .then((result)=>{
    //         const data = result.data;
    //         setEmployerID(data)
    //     })
    // })

    navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let accuracy = position.coords.accuracy;
        let altitude = position.coords.altitude;
        let altitudeAccuracy = position.coords.altitudeAccuracy;
        let heading = position.coords.heading;
        let speed = position.coords.speed;
        axios.post(`${API_URL}employers/6011584af3a234673b16e318/localization`,
            {

                "localization": [{
                    "timeStamp":new Date(),
                    "coords": [latitude, longitude]
                }]
            }
        
        )
    })

    return (<></>)
}