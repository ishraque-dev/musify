import React from 'react';
import './banner.css';
import { bannerImg } from '../assets';
const Banner = ({ activeSong, data }) => {
  return (
    <div className="banner">
      <div className="banner__text-content">
        <div>
          <p className="display__name">
            {activeSong?.hub?.displayname} Enjoy you wants
          </p>
        </div>
        <div>
          <h1 className="song__title">
            {activeSong?.title || ' Discover Top Charts'}
          </h1>
        </div>
        <div>
          <h5 className='song__subtitle'>
   
            {activeSong?.subtitle || `Top ${data?.length} songs on trending `}
          </h5>
        </div>
      </div>
      <div className="banner__image">
        <img
          src={activeSong?.images?.coverart || bannerImg}
          alt="bannerImage"
        />
      </div>
    </div>
  );
};

export default Banner;
