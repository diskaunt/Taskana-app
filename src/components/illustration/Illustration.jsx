import React from 'react';
import Logo from './illustrations/Logo';
import EmptyTaskLight from './illustrations/EmptyTask';
import NoteBookLight from './illustrations/NoteBook';

const Illustration = ({ name }) => {
  switch (name.toLowerCase()) {
    case 'logo':
      return <Logo />
    case 'emptytask':
      return <EmptyTaskLight />
    case 'notebook':
      return <NoteBookLight />
    default:
      return null;
  }
};

export default Illustration;
