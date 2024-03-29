import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './components/extraStyle.css';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex ">
      <Sidebar />
      <div className="app__container flex-1 flex flex-col">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-20px)] overflow-y-scroll hide-scrollbar flex xl:flex-row ">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="z-10">
          <SwipeableBottomSheet
            overflowHeight={85}
            fullScreen={true}
            onChange={() => {
              setOpen((per) => {
                return !per;
              });
            }}
            bodyStyle={{
              background: '#000000',
              backdropFilter: 'blur(10px)',
              opacity: 0.9,
              display: 'flex',
              zIndex: '1000',
              alignItems: 'center',
              flexDirection: 'column',
              borderRadius: '5px',
              padding: '10px',
              justifyContent: open ? 'center' : null,
            }}
            open={open}
          >
            <MusicPlayer isOpen={open} />
          </SwipeableBottomSheet>
        </div>
      )}
    </div>
  );
};

export default App;
