import { render } from "@testing-library/react";
import Home from "../page"; // adjust the import path as needed

describe("Home Page Snapshot", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
