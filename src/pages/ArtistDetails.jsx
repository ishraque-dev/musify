import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);
  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
  if (error) return <Error />;
  return <div></div>;
};
export default ArtistDetails;
