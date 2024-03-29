import { Banner, Loader, SongCard } from '../components';
import { useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  const { data, isFetching } = useGetTopChartsQuery();

  const genreTitle = 'Pop';

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(activeSong);
  if (isFetching) return <Loader title="Loading songs..." />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-7 mb-4">
        Discover {genreTitle}
      </h2>
      <select
        disabled
        title="Work in progress..."
        onChange={() => {
          second;
        }}
        value=""
        className=" text-gray p-1 text-sm rounded-lg outline-none sm:mt-0 mt-5 w-20"
      >
        {genres.map((genre) => {
          return <option key={genre.value}>{genre.title}</option>;
        })}
      </select>

      <Banner activeSong={activeSong} data={data} />
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
        <div className="flex flex-wrap sm:justify-center justify-center gap-8">
          {data
            ?.filter((item) => item.images != undefined)
            .map((song, i) => {
              return (
                <SongCard
                  key={song.key}
                  song={song}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
