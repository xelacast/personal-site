import { render, fireEvent, screen, cleanup} from '@testing-library/react';
import Nav from '../components/Nav';

const resiseWindow = (x, y) => {
  window.innerHeight = y;
  window.innerWidth = x;
  window.dispatchEvent(new Event("resize"));
}

beforeEach(() => {
})

it("Checks accuracy HREF of NAV links", () => {

  render(<Nav />);

  const about = screen.getByText("About");
  const projects = screen.getByText("Projects");
  const contact = screen.getByText("Contact");
  const resume = screen.getByText("Resume");
  // const hero = screen.getByText("logo");

  expect(about.getAttribute("href")).toEqual("#about");
  expect(projects.getAttribute("href")).toEqual("#projects");
  expect(contact.getAttribute("href")).toEqual("#contact");
  expect(resume.getAttribute("href")).toEqual("resume.pdf");
  // expect(hero.getAttribute("href")).toEqual("#hero");

  cleanup();

})

test("Tests mobile navigation menu.", () => {
  render(<Nav />);

  resiseWindow(750, 1000);

  const clickable = screen.getByRole('button', {name: "burger"});
})