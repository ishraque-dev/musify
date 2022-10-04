import React from 'react';
import { Link } from 'react-router-dom';
const Track = ({ activeSong }) => (
  <div className="flex items-center justify-start">
    <div className="sm:block h-16 w-16 mr-4">
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <Link to={`/songs/${activeSong?.key}`}>
        <p className="truncate text-white font-bold text-lg">
          {activeSong?.title ? activeSong?.title : activeSong.key}
        </p>
      </Link>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
