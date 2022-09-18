import { render, fireEvent, screen, cleanup} from '@testing-library/react';
import Nav from '../components/Nav';

it("Checks accuracy HREF of NAV links", () => {

  render(<Nav />);

  const about = screen.getByText("About");
  const projects = screen.getByText("Projects");
  const contact = screen.getByText("Contact");
  const resume = screen.getByText("Resume");
  const hero = screen.getByTitle("logo");

  expect(about.getAttribute("href")).toEqual("#about");
  expect(projects.getAttribute("href")).toEqual("#projects");
  expect(contact.getAttribute("href")).toEqual("#contact");
  expect(resume.getAttribute("href")).toEqual("resume.pdf");
  expect(hero.getAttribute("href")).toEqual("#hero");

  cleanup();

})

test("Opens and closes mobile navigation menu button.", () => {
  render(<Nav />);

  const clickable = screen.getByRole('button');
  const menu = screen.getByTitle("menu");

  expect(menu.className).toEqual("hidden linkContainer");
  expect(menu.hasAttribute("class")).toEqual(true);

  expect(clickable.getAttribute("name")).toEqual("burger");
  expect(clickable.className).toEqual("burger closed");

  fireEvent.click(clickable);

  expect(clickable.className).toEqual("burger opened");
  expect(menu.className).toEqual("visible linkContainer");

  fireEvent.click(clickable);

  expect(clickable.className).toEqual("burger closed");
  expect(menu.className).toEqual("hidden linkContainer");

  cleanup()
})