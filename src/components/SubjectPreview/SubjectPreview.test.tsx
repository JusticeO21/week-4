import { render, screen } from "@testing-library/react";
import SubjectPreview from "./SubjectPreview";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

describe("SubjectPreview", () => {
  it("renders the component with title image and title", () => {
    const titleImageSrc = "https://example.com/image.jpg";
    const title = "Test Subject";

    render(<SubjectPreview titleImageSrc={titleImageSrc} title={title} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", titleImageSrc);
    expect(image).toHaveAttribute("alt", title);

    const displayedTitle = screen.getByRole("heading", { level: 2 });
    expect(displayedTitle).toHaveTextContent(title);
  });

  it("applies the in_card class when passed as a prop", () => {
    const titleImageSrc = "https://example.com/image.jpg";
    const title = "Test Subject";
    const inCardClass = "cardClass"

    render(
      <SubjectPreview
        titleImageSrc={titleImageSrc}
        title={title}
        in_card={inCardClass}
      />
    );

    const container = screen.getByRole("article"); 
    expect(container.className).toContain(inCardClass);
  });

  it("does not apply the in_card class if not passed", () => {
    const titleImageSrc = "https://example.com/image.jpg";
      const title = "Test Subject";
      const inCardClass = "cardClass";

    render(<SubjectPreview titleImageSrc={titleImageSrc} title={title} />);

    const container = screen.getByRole("article");
    expect(container.className).not.toContain(inCardClass);
  });
});
