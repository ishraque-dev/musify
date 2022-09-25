import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  return (
    <div className="flex flex-col w-[170px] p-4   animate-slideup rounded-lg- cursor-pointer">
      <div className="relative w-full h-30 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 rounded-lg group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          className="rounded-lg w-full h-full"
          src={song.images?.coverart}
          alt="song_img"
        />
      </div>
      <div className="mt-4 flex flex-col ">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-white mt-1">
          <Link
            to={
              song.artist ? `/artist/${song?.artist[0].adamid}` : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SongCard;
