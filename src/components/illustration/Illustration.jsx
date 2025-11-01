import Logo from './illustrations/Logo';
import EmptyTaskLight from './illustrations/EmptyTask';
import NoteBookLight from './illustrations/NoteBook';

const Illustrations = {
  logo: Logo,
  emptytask: EmptyTaskLight,
  notebook: NoteBookLight,
};

const Illustration = ({ name }) => {
  const Component = Illustrations[name.toLowerCase()];
  return Component ? <Component /> : null;
};

export default Illustration;
