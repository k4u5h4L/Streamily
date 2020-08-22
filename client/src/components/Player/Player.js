import React, { useState, useEffect } from "react";

import Playlists from "../Playlists/Playlists";
import Songs from "../Songs/Songs";

import SongListOver from "../Songs/SongListOver";

const Player = () => {
    const [songs, setSongs] = useState([]);
    const [numberOfSongs, setNumberOfSongs] = useState(5);
    const [noOfClicks, setNoOfClicks] = useState(0);
    const [songsOver, setSongsOver] = useState(false);

    useEffect(() => {
        const getSongs = async () => {
            const res = await fetch(`http://127.0.0.1:8000/songs/${numberOfSongs}`);
            const data = await res.json();

            if (data.length < 1) {
                console.log(`That's about all the songs`);
                setSongsOver(true);
                return;
            }

            console.log(data);
            setSongs([...songs, ...data]);
            console.log(`\n\nOLD SONGS ARRAY:\n\n`);
            console.log(songs);
            setNumberOfSongs((prevNo) => prevNo + 5);
            console.log(`numberOfSongs: ${numberOfSongs}`);
        };

        getSongs();
    }, [noOfClicks]);

    const getMoreSongs = (e) => {
        setNoOfClicks((prevNo) => prevNo + 1);
        e.preventDefault();
    };

    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="featured-user mb-5 mb-lg-0">
                            <h3 className="mb-4">Playlists</h3>
                            <ul className="list-unstyled">
                                <Playlists />
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        {songs.map((song, index) => (
                            <Songs
                                key={index}
                                index={index}
                                title={song.name}
                                artist={song.artist}
                                songSrc={song.source}
                            />
                        ))}
                        {songsOver ? <SongListOver /> : null}
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="site-block-27">
                                    <div className="text-center">
                                        <ul>
                                            <div className="text-center">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={(event) => getMoreSongs(event)}
                                                    type="button"
                                                    id="button-addon2"
                                                >
                                                    Load more...
                                                </button>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
