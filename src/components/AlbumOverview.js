import AlbumCard from './AlbumCard';
import Grid from '@material-ui/core/CardMedia';
import useAlbums from '../hooks/useAlbums';


function albums() {
    return (
        useAlbums()
    );
}


const albums = [1,2,3,4,5]

export default function AlbumOverview({ id, name, artist, imageUrl }) {
    return (
        <Grid direction="rows" container spacing={2}>
            {albums.map((album) => (
                <Grid item xs={2} key={album.id}>
                    <AlbumCard />
                </Grid>
            ))}
        </Grid>
    );
}
