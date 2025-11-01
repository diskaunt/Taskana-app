import Create from './icons/Create';
import Inbox from './icons/Inbox';
import Loading from './icons/Loading';
import Moon from './icons/Moon';
import Sun from './icons/Sun';

const Icons = {
  create: Create,
  inbox: Inbox,
  loading: Loading,
  moon: Moon,
  sun: Sun,
};

const Icon = ({ name }) => {
  const Component = Icons[name.toLowerCase()];
  return Component ? <Component /> : null;
};

export default Icon;
