import React, {Component, useState} from "react"
import axios from "axios"

// TODO: Rename, dont use switch
function Switch() {
    const [firstGenre, setGenre] = useState("");

    async function callApi(){
        // Use from POSTMAN "API Token"
        const accessToken = await axios.post("https://accounts.spotify.com/api/token", {
            // TODO: Add here request BODY stuff, like code, grant_type
        });

        // .then can be removed if using async/await
        // .then(res=>{
        //     setGenre(prevGenre => res.items[0].genres[0]);
        // })

        // Access token you can try out hardcoded first, slowly work your way back from Get Artists > API Token > Authorize
        const accessToken = "BQBiJaApYPti1HtBdN1nDGD8vyewTvFk1eN0jJJtFU-ttlp7PwqH0AP-6EJlYbesYQZ6dSenuCVz7Drsp8_PUJAQvZmBC_k930mKFLGjGuhMNkzK6eam4w4WMmwt6du7EgwAvOlrjgZkODvY";
        const genre = await axios.get("https://api.spotify.com/v1/me/top/artists", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        // .then(res=>{

        // TODO: Set genre to firstGenre properly using React hooks
            setGenre(prevGenre => genre);
        // })
    }

    return (
        <div>
            <h1>{firstGenre}</h1>
            <button onClick={callApi}>Get Artists</button>
        </div>
    )

}

export default Switch