import {screen, render, cleanup} from '@testing-library/react';
import MoreProjects from '../components/MoreProjects';

import { moreProjects } from '../assets/content/moreProjects';

test("Checks for anchor tag accuracy in MoreProjects Section", () => {
  render(<MoreProjects />);

  const projects = screen.getAllByTitle(/project/i);
  expect(projects.length).toEqual(6);
  projects.forEach((project, i) => expect(project.getAttribute("href")).toEqual(moreProjects[i].url));

  cleanup();
})