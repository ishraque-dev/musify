import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';
const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useDispatch((state) => state.player);
  const { songid } = useParams();
  console.log(songid);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  console.log(songData);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={''} songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-semibold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((line, i) => {
              return <p className="text-gray-400 text-base my-1">{line}</p>;
            })
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry no Lyrics found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
