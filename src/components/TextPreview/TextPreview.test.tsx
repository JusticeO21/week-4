import { render, screen } from "@testing-library/react";
import TextPreview from "./TextPreview";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

describe("TextPreview", () => {
  it("renders the component with the correct text", () => {
    const text = "This is a test preview";

    render(<TextPreview text={text} />);

    // Check if the text is rendered inside an h4 element
    const displayedText = screen.getByRole("heading", { level: 4 });
    expect(displayedText).toHaveTextContent(text);
  });

  it("applies the correct container class", () => {
    const text = "This is a test preview";

    render(<TextPreview text={text} />);

    const container = screen.getByRole("heading", { level: 4 }).parentElement; 
    expect(container?.className).toContain("container");
  });
});
