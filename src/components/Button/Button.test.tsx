import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button"; // Adjust the import based on your file structure
import { describe, it, vi, expect } from "vitest";
import "@testing-library/jest-dom"; 

describe("Button Component", () => {
  it("renders with the correct text", () => {
    render(<Button text="Click Me" onClick={vi.fn()} />);
    const buttonText = screen.getByText("Click Me");
    expect(buttonText).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button text="Click Me" onClick={handleClick} />);

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with the correct classes based on props", () => {
    render(
      <Button
        text="Click Me"
        onClick={vi.fn()}
        option_container="optionContainer"
        submit_container="submitContainer"
        customize="specialStyle"
      />
    );

    const button = screen.getByRole("button");
    expect(button.className).toContain("optionContainer");
    expect(button.className).toContain("submitContainer");
    expect(button.className).toContain("specialStyle");
  });
});
