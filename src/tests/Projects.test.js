import {screen, render} from '@testing-library/react';

import Projects from '../components/Projects';

test("Anchor tag accuracy in Projects Section.", () => {
  render(<Projects />);

  const projects = screen.getAllByTitle(/project/i);
  expect(projects.length).toEqual(3);

})