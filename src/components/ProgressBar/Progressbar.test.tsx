import { render, screen, cleanup } from "@testing-library/react";
import ProgressBar from "./ProgressBar";
import "@testing-library/jest-dom";
import { expect, it, describe } from "vitest"

describe("ProgressBar", () => {
  it("renders the progress bar with correct width based on the progress prop", () => {
    render(<ProgressBar progress={50} />);

    // Use queryAllByRole to get all progress bars
    const progressBars = screen.getAllByRole("progressbar");

    // Ensure there is only one progress bar
    expect(progressBars).toHaveLength(1); // There should be only 1 progress bar

    // Get the fill div within that progress bar
    const progressBarFill = progressBars[0].querySelector("div");

    // The width of the filled part should be 50% when progress is 50
    expect(progressBarFill).toHaveStyle("width: 50%");
  });

  it("renders with default height and border radius", () => {
    render(<ProgressBar progress={50} />);

    const progressBar = screen.getByRole("progressbar");

    // Check for default height and border radius
    expect(progressBar).toHaveStyle("height: 9px");
    expect(progressBar).toHaveStyle("border-radius: 10px");
  });

  it("applies custom color when passed as a prop", () => {
    render(<ProgressBar progress={50} color="green" />);

    const progressBarFill = screen.getByRole("progressbar").querySelector("div");

    expect(progressBarFill).toHaveStyle("background-color: rgb(0, 128, 0)");
  });

  it("clamps the progress value between 0 and 100", () => {
    // Test with a value greater than 100
    render(<ProgressBar progress={150} />);
    const progressBarFillOver = screen.getByRole("progressbar").querySelector("div");
    expect(progressBarFillOver).toHaveStyle("width: 100%");

      {cleanup()}
    // Test with a value less than 0
    render(<ProgressBar progress={-10} />);
    const progressBarFillUnder = screen.getByRole("progressbar").querySelector("div");
    expect(progressBarFillUnder).toHaveStyle("width: 0%");
  });
});
