import { it, describe, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "../src/pages/Login";
import { AuthContext } from "../src/App";

describe("testing login page render", () => {
  it("renders login page", () => {
    render(
      <AuthContext.Provider value={test}>
        <Login />
      </AuthContext.Provider>
    );
    expect(screen.getByRole("heading").textContent).toMatch("Welcome back");
    expect(screen.getByRole("button").textContent).toMatch("Login");
  });
});
