import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Categories from "./categories";
import { ProductsList } from "./ProductsList";
import Loader from "../small_components/loader";
import { useStyles } from "./styles_categories"
import { ProductsFilters } from "./filters";
import { Button } from "../small_components/button"
import { API_URL } from "../../config/constants";
import axios from "axios"
import addNotification from 'react-push-notification';
import { ListItemW } from "../small_components/list_item/index";
export const Products = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([10]);
    const [isLoading, setIsLoading] = useState(false);
    const queryParams = new URLSearchParams(useLocation().search);
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitudeArr, setLatitudeArr] = useState([])
    const [SWAPIData, setSWAPIData] = useState([])
    const [speed, setSpeed] = useState('')

    useEffect(() => {
        navigator.geolocation.watchPosition((position, error) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            setSpeed(position.coords.speed)

        });
        //     navigator.geolocation.getCurrentPosition((position, error) => {
        //     setLatitude(position.coords.latitude)
        //     setLongitude(position.coords.longitude)
        //     setInterval(() => {
        //         axios.post(`${API_URL}employers/6011584af3a234673b16e318/localization`,
        //             {
        //                 "localization": [{
        //                     "timeStamp": new Date(),
        //                     "coords": [latitude, longitude]
        //                 }]
        //             }
        //         );
        //     }, 1000);
        // });
    }, [])
    const PositionChange = () => {
        if (latitude != latitude || longitude != longitude) {
            console.log("this id is moving around")
            setLatitudeArr(latitude);
            // axios.post(`${API_URL}employers/6011584af3a234673b16e318/localization`,
            //     {
            //         "localization": [{
            //             "timeStamp": new Date(),
            //             "coords": [latitude, longitude]
            //         }]
            //     }
            // );
            axios({
                method: 'post',
                baseURL: 'https://192.168.0.16/api',
                url: '/employers/6011584af3a234673b16e318/localization',
                data:
                {
                    "localization": [{
                        "timeStamp": new Date(),
                        "coords": [latitude, longitude]
                    }]
                }
            })

        } else {
            console.log("this id is not moving")
            console.log(`latitude: ${latitude} longitude: ${longitude}`)
        }
    };
    PositionChange();
    // GeoLocator();


    const getSW = () => {
        axios.get('https://swapi.dev/api/people/1').then((r)=>{
        // axios.get('https://192.168.0.16:8888/api/employers').then((r)=>{
                const data = r.data; setSWAPIData(JSON.stringify(data))})
    }


    // let bookData = [];

    // let title = latitude;
    // let author = longitude;
    // let pages = speed;
    
    // const Book = (BookTitle, BookAuthor, BookPages) => {
    //   title = BookTitle,
    //   author = BookAuthor,
    //   pages = BookPages
    // }
    // // This function triggers when a button is clicked
    // const  OnGeoChange = () => {
    //    let book = new Book(title.value, author.value, pages.value);
    //    let bookStringified = JSON.stringify(book);
       
    //    bookData.push(bookStringified);
    //    localStorage.setItem('data', bookData)
    // }


    // navigator.geolocation.getCurrentPosition((position, error) => {
    //     setLatitude(position.coords.latitude)
    //     setLongitude(position.coords.longitude)
    //     setInterval(() => {
    //         axios.post(`${API_URL}employers/6011584af3a234673b16e318/localization`,
    //             {
    //                 "localization": [{
    //                     "timeStamp": new Date(),
    //                     "coords": [latitude, longitude]
    //                 }]
    //             }
    //         );
    //     }, 18000);
    //     });
    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition, showError);
    //     } else { 
    //      console.log("Geolocation is not supported by this browser.");
    //     }
    //   }

    //   function showPosition(position) {
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //   }

    //   function showError(error) {
    //     switch(error.code) {
    //       case error.PERMISSION_DENIED:
    //         console.log("User denied the request for Geolocation.")
    //         break;
    //       case error.POSITION_UNAVAILABLE:
    //         console.log("Location information is unavailable.")
    //         break;
    //       case error.TIMEOUT:
    //         console.log("The request to get user location timed out.")
    //         break;
    //       case error.UNKNOWN_ERROR:
    //         console.log("An unknown error occurred.")
    //         break;
    //     }
    //   }

    // useEffect(() => {
    //     const params = new URLSearchParams({
    //         limit: queryParams.get("limit") || 10,
    //         page: queryParams.get("page") || 1,
    //         name: queryParams.get("name") || '',
    //     });
    //     setIsLoading(true);
    //     fetch(`${API_URL}products?${params.toString()}`).then((resp) => resp.json())
    //         .then((data) => setProducts(data))
    //         .finally(() => setIsLoading(false));
    // }, []);
    // console.log(products)

    // const edit = () => {
    //     console.log("item edit")
    // };

    // if (isLoading) {
    //     return <Loader title="Products loading" subtitle="Please wait" />;
    // }
    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
        console.log("notifications")
    };
 

      
    
    return (
        <div>
            <Categories className={classes.categories} />
            <ListItemW/>
            {/* <ProductsFilters onClick={edit} /> */}
            {/* <button style={{ position: "fixed", top: "50vh", left: '50vw' }} onClick={GeoLocator}> send coords </button> */}
            {/* <ProductsList products={products} />
            <h1 style={{ position: "fixed", top: "50vh", left: '50vw' }}>{latitude}</h1>
            <h1 style={{ position: "fixed", top: "40vh", left: '50vw' }}>{longitude}</h1>
            <h1 style={{ position: "fixed", top: "30vh", left: '50vw' }}>{speed}</h1> */}
            {/* <h1 style={{ position: "fixed", top: "60vh", left: '50vw' }}>{latitudeArr}</h1> */}
            {/* <button style={{ position: "fixed", top: "60vh", left: '50vw' }} onClick={getSW}></button>
            <h2 style={{ position: "fixed", top: "70vh", left: '50vw' }}>{SWAPIData}</h2>
                  <button style={{ position: "fixed", top: "70vh", left: '50vw' }} onClick={buttonClick}>
                   Hello world.
                  </button> */}
            {/* <button style={{ position: "fixed", top: "30vh", left: '50vw' }} onClick={GeoLocator}>Try It</button> */}
        </div>
    );

}





