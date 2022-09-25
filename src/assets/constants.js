import {
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { GiEarthAsiaOceania } from 'react-icons/gi';
export const genres = [
  {
    title: 'Pop',
    value: 'POP',
    image:
      'https://i.ytimg.com/an/tcYodQoapMg/390959279857750954_mq.jpg?v=60264f94',
  },
  {
    title: 'Hip-Hop',
    value: 'HIP_HOP_RAP',
    image:
      'https://raptology.com/wp-content/uploads/2021/05/dj-khaled-leopard.jpg',
  },
  {
    title: 'Dance',
    value: 'DANCE',
    image:
      'https://scontent.fdac155-1.fna.fbcdn.net/v/t1.6435-9/159909423_284904046336499_4906397880439615843_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=cciGJ3u5u5AAX9P6kcv&_nc_ht=scontent.fdac155-1.fna&oh=00_AT_aEfAqBuOg2y4q_hJO4c69NXtC8EgFvKtyMFvT-oraJw&oe=6356BA02',
  },
  {
    title: 'Electronic',
    value: 'ELECTRONIC',
    image:
      'https://musictech.com/wp-content/uploads/2021/03/Calvin-harris-Cooper-Neill-@1400x1050.jpg',
  },
  {
    title: 'Soul',
    value: 'SOUL_RNB',
    image:
      'https://www.nme.com/wp-content/uploads/2021/08/michael-jackson-1988-credit-gary-gershoff@200x1270.jpg',
  },
  {
    title: 'Alternative',
    value: 'ALTERNATIVE',
    image:
      'https://www.rollingstone.com/wp-content/uploads/2019/11/billie-eilish.jpg',
  },
  {
    title: 'Rock',
    value: 'ROCK',
    image:
      'https://static.wikia.nocookie.net/oneokrock/images/8/86/Nirvana_band.jpg/revision/latest?cb=20160509024826',
  },

  {
    title: 'Country',
    value: 'COUNTRY',
    image: 'https://i.scdn.co/image/ab67706f00000003ffa79f0007cbf0018743eeec',
  },
  ,
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: GiEarthAsiaOceania },
];
