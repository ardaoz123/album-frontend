import * as React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from "@material-ui/core/CardHeader";
import {
    CardActionArea,
    Card,
    CardContent,
} from '@material-ui/core';
import AlbumOverview from "../components/AlbumOverview";

const Style = {
    height: "20%",
    width: "15%",

};

const AlbumCard = ({
    id, name, artist, imageUrl}) => {
    return (
        <><CardActionArea style={Style}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt="CardMedia Image Example"
                title="CardMedia Image Example" />
        </CardActionArea>
            <Card style={Style}>
                <CardHeader title={name} subheader={artist}/>
            </Card></>
    );
};

export default AlbumCard