export const Geolocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        })
    return (<><div>{navigator.geolocation.getCurrentPosition.prototype}</div></>)
    }