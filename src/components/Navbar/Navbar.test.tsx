import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { vi, it, describe, expect } from "vitest";
import "@testing-library/jest-dom"; 

vi.mock("../ThemeSwitch/ThemeSwitch", () => ({
  default: () => <div>Mocked ThemeSwitch</div>,
}));

vi.mock("../SubjectPreview/SubjectPreview", () => ({
  default: ({
    title,
    titleImageSrc,
  }: {
    title: string;
    titleImageSrc: string;
  }) => (
    <div>
      <img src={titleImageSrc} alt={title} />
      <h1>{title}</h1>
    </div>
  ),
}));

describe("Navbar Component", () => {
  it("renders SubjectTitle when a subject is provided", () => {
    render(<Navbar subject="Math" />);

    const titleElement = screen.getByText("Math");
    expect(titleElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("Math");
    expect(imageElement).toHaveAttribute("src", "images\\Math.svg");
  });

  it("does not render SubjectTitle when no subject is provided", () => {
    render(<Navbar subject="" />);

    const spanElement = screen.getByTestId("placeholder");
    expect(spanElement).toBeInTheDocument(); // Ensures an empty <span> is rendered
  });

  it("renders ThemeSwitch component", () => {
    render(<Navbar subject="Math" />);

    const themeSwitchElement = screen.getByText("Mocked ThemeSwitch");
    expect(themeSwitchElement).toBeInTheDocument();
  });
});
