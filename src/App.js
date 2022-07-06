import { Link } from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Album Index</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/AlbumOverview">Album overview</Link> |{" "}
            </nav>
        </div>
    );
}