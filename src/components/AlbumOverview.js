import AlbumCard from './AlbumCard';
import Grid from '@material-ui/core/CardMedia';
import useAlbums from '../hooks/useAlbums';


export default function AlbumOverview() {
    const albums = useAlbums()
    console.log(albums)
    return (
        <Grid direction="rows" container spacing={2}>
            {albums.map((album) => (
                <Grid item xs={2} key={album.id}>
                    <AlbumCard id={album.id} name={album.name} artist={album.artist} imageUrl={album.imageUrl} />
                </Grid>
            ))}
        </Grid>
    );
}
