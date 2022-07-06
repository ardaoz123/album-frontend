import react, { useEffect, useState } from "react";

const endpoint = `http://${process.env.REACT_APP_API_URL}/api/album`;

const useAlbums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const request = fetch(endpoint,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        request
            .then((apiResponse) => {
                if (!apiResponse.ok) {
                    console.error(apiResponse.statusText);
                    return;
                }
                return apiResponse.json();
            })
            .then((apiResult) => {
                setAlbums(apiResult);
            });
    }, []);
    return albums;
};

export default useAlbums;