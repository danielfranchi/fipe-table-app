import { render, screen } from '@testing-library/react';
import Title from "@/components/title";

describe('Title component', () => {
  it('renders the title text', () => {
    const titleText = 'Teste de Título';
    render(<Title title={titleText} />);
    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});
