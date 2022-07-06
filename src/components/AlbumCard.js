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



export const AlbumCardInfo = ({
    id = "1", name = "Section. 80", artist = "Kendrick Lamar", imageUrl = "https://media.pitchfork.com/photos/5929b026b1335d7bf169a080/1:1/w_600/2d538998.jpg" }) => {
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

export default function AlbumCard() {
    return (
                <AlbumCardInfo/>
    );
}