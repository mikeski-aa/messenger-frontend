import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("something truthy and falsy", () => {
  it("expect true to be true", () => {
    expect(true).toBe(true);
  });

  it("expect false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
