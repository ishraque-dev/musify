import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import './extraStyle.css';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  console.log(song);
  return (
    <div
      style={{ transition: 'all ease-in-out 0.3s' }}
      className={`w-full flex flex-row items-center  py-2 p-4 rounded-lg  cursor-pointer top__song ${
        activeSong?.title === song?.title ? 'bg-[#181717]' : 'bg-transparent'
      }`}
    >
      <h3 className="text-black font-semibold ">{i + 1}.</h3>
      <div className="ml-2 flex flex-1 flex-row justify-between items-center">
        <img
          className="w-10 h-10 rounded-lg"
          src={song?.images?.coverart}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className=" font-semibold text-[white]">{song?.title}</p>
          </Link>
          <Link to={`/songs/${song?.artist?.adamid}`}>
            <p
              style={{ fontSize: '13px' }}
              className="font-semibold text-gray-300"
            >
              {song?.subtitle}
            </p>
          </Link>
        </div>
      </div>
      <PlayPause
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};
const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  const topPlays = data?.slice(1, 6);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flx-1 max-w-[300px]  flex flex-col top__charts "
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold font-md">Top Charts</h2>
          <Link to="/top-charts">
            <small className="text-white">See more</small>
          </Link>
        </div>
        <div className="  mt-4 mb-4 flex flex-col gap-1 rounded-lg song-container ">
          {topPlays?.map((song, i) => {
            console.log(song?.artists ?? [0]);
            return (
              <TopChartCard
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
                song={song}
                i={i}
                key={song.key}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col  mt-10">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold font-md">Top Artist</h2>
          <Link to="/top-charts">
            <small className="text-white">See more</small>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          module={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((song, i) => {
            return (
              <SwiperSlide
                key={song.key}
                style={{ width: '25%', height: 'auto' }}
                className="shadow-lg rounded-full animate-slideRight"
              >
                <Link to={`/artist/${song?.artists ?? [0].adamid}`}>
                  <img
                    src={song?.images?.background}
                    alt="name"
                    className="rounded-full w-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default TopPlay;
