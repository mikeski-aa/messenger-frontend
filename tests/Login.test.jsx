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

    const emailInput = screen.getByPlaceholderText("hello@dm_me.com");
    const loginButton = screen.getByRole("button", { name: "Login" });
    const passwordInput = screen.getByLabelText("Password");

    expect(screen.getByRole("heading").textContent).toMatch("Welcome back");
    expect(screen.getByRole("button").textContent).toMatch("Login");
    expect(emailInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
