import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./icon.stories";

const IconStories = composeStories(stories);

describe("Icon", () => {
  it("renders a icon", () => {
    render(<IconStories.Default />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });
});
