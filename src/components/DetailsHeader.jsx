import { Link } from 'react-router-dom';
const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <>
      <div className="relative w-full flex- flex-col mb-5">
        <div className=" rounded-l-full w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"></div>
        <div className="absolute inset-0 flex items-center">
          <img
            className="sm:w-48 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
            src={
              artistId
                ? artistData?.artists[artistId].attributes?.artwork?.url
                    .replace('{w}', '500')
                    .replace('{h}', '500')
                : songData?.images?.coverart
            }
            alt="art"
          />
          <div className="ml-5 ">
            <p className="text-white font-semibold sm:text-3xl text-xl">
              {artistId
                ? artistData?.artists[artistId].attributes.name
                : songData?.title}
            </p>
            {!artistId && (
              <Link to={`/artists/${songData?.artists[0].adamid}`}>
                <p className="text-base text-gray-400 mt-2">
                  {songData?.subtitle}
                </p>
              </Link>
            )}
            <p className="text-base text-gray-400 mt-2">
              {artistId ? artists?.genreNames[0] : songData?.genres?.primary}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailsHeader;
