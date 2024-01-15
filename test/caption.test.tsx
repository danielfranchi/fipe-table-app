import { render, screen } from "@testing-library/react";

import Caption from "@/components/caption";

describe("Caption component", () => {
  it("renders the caption text", () => {
    const captionText = "Teste de Legenda";
    render(<Caption text={captionText} />);
    const captionElement = screen.getByText(captionText);
    expect(captionElement).toBeInTheDocument();
  });
});
