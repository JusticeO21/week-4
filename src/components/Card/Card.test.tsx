import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom"; 

describe("Card Component", () => {
  const mockProps = {
    mark: 80,
    total: 100,
    title: "Math",
  };

  it("should render the Card component with the correct content", () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText(mockProps.mark)).toBeInTheDocument();

    expect(screen.getByText(`out of ${mockProps.total}`)).toBeInTheDocument();

    const titleImage = screen.getByAltText(mockProps.title);
    expect(titleImage).toHaveAttribute("src", `images\\${mockProps.title}.svg`);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("should render correct styles for the card container", () => {
  render(<Card {...mockProps} />);

  const cardContainer = screen.getByText(mockProps.title).closest("div");

    cardContainer && expect(cardContainer.className).toContain("_container");
    cardContainer && expect(cardContainer.className).toContain("_card");
});
});
