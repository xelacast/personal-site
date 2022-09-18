import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Hero from "../components/Hero";

test('Hero Button', () => {
  render(<Hero />);

  const hero = screen.getByText("Check Out My Projects");
  expect(hero.getAttribute("href")).toEqual("https://www.github.com/alexjohn7516");

  cleanup();
})