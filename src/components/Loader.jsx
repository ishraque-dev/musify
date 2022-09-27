import { loader } from '../assets';
import './loader.css';
const Loader = ({ title }) => (
  <div className="w-full flex flex-col justify-center items-center">
    <div>
      {' '}
      <h4 className="text-white font-medium font-lg">{title || 'Loading'}</h4>
    </div>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
