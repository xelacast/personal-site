import { render, fireEvent, screen} from '@testing-library/react';
import Nav from '../components/Nav';

it("navigates appropriatley", async () => {
  render(<Nav />);

  const hero = await screen.findByTestId("hero");

  fireEvent.click(hero);

  // expect()
})