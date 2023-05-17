import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./modal.stories";

const Stories = composeStories(stories);

describe("Modal", () => {
  it("renders a modal", () => {
    render(<Stories.Default />);
    const modal = screen.getByTestId("modal");

    expect(modal).toBeInTheDocument();
  });
});
