import SongBar from './SongBar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white ">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col ">
      {data?.map((song, i) => {
        return (
          <SongBar
            song={song}
            key={`${song.key}`}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        );
      })}
    </div>
  </div>
);

export default RelatedSongs;
