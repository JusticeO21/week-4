import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card"; // Adjust the import based on the actual file structure
import "@testing-library/jest-dom"; // for assertions like "toBeInTheDocument"

describe("Card Component", () => {
  const mockProps = {
    mark: 80,
    total: 100,
    title: "Math",
  };

  it("should render the Card component with the correct content", () => {
    // Render the Card component with mockProps
    render(<Card {...mockProps} />);

    // Check that the mark is rendered correctly
    expect(screen.getByText(mockProps.mark)).toBeInTheDocument();

    // Check that the total text "out of 100" is rendered correctly
    expect(screen.getByText(`out of ${mockProps.total}`)).toBeInTheDocument();

    // Check that the title is rendered (i.e., SubjectTitle component)
    const titleImage = screen.getByAltText(mockProps.title); // Check if the title image is rendered
    expect(titleImage).toHaveAttribute("src", `images\\${mockProps.title}.svg`);

    // Check that the title text is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("should render correct styles for the card container", () => {
    // Render the Card component
    render(<Card {...mockProps} />);

    // Check that the card container class is applied
    const cardContainer = screen.getByText(mockProps.title).closest("div");
   expect(cardContainer).toHaveClass(expect.stringContaining("card_container"));
  });
});
