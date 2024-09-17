import { v4 as uuid4 } from 'uuid';
import { img1, img2, img3, img4, img5, img6 ,threeMBg,boschBg,criBg,kiaBg,larsenBg,renaultBg} from '../assets/index';
const navItems = [
  { id: uuid4(), path: '/', title: 'Home' },
  { id: uuid4(), path: '/about', title: 'About' },
  { id: uuid4(), path: '/contact', title: 'Contact' },
];
const home_carousel_items = [
  {
    img: img1,
    id: uuid4(),
  },
  {
    img: img2,
    id: uuid4(),
  },
  {
    img: img3,
    id: uuid4(),
  },
  {
    img: img4,
    id: uuid4(),
  },
  {
    img: img5,
    id: uuid4(),
  },
  {
    img: img6,
    id: uuid4(),
  },
];
const client_carousel_items = [
	{
		img: boschBg,
		id: uuid4(),
	},
	{
		img: threeMBg,
		id: uuid4(),
	},
	{
		img: criBg,
		id: uuid4(),
	},
	{
		img: kiaBg,
		id: uuid4(),
	},
	{
		img: larsenBg,
		id: uuid4(),
	},
	{
		img: renaultBg,
		id: uuid4(),
	},
];
export { navItems, home_carousel_items ,client_carousel_items};
