import { it, describe, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Login from "../src/pages/Login";
import { AuthContext } from "../src/App";

describe("testing login page render", () => {
  it("renders login page", () => {
    render(
      <AuthContext.Provider value={{ test: true }}>
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

// TO DO: add user interaction with fields check

describe("test user typing", () => {
  it("test user typing email", async () => {
    render(
      <AuthContext.Provider value={{ test: true }}>
        <Login />
      </AuthContext.Provider>
    );

    const emailInput = screen.getByTestId("add-email");
    const passwordInput = screen.getByTestId("add-password");

    await userEvent.type(screen.getByTestId("add-email"), "testTyping");
    expect(emailInput).toHaveValue("testTyping");
  });

  it("test user typing password", async () => {
    render(
      <AuthContext.Provider value={{ test: true }}>
        <Login />
      </AuthContext.Provider>
    );

    const passwordInput = screen.getByTestId("add-password");

    await userEvent.type(screen.getByTestId("add-password"), "testPassword");
    expect(passwordInput).toHaveValue("testPassword");
  });

  it("test user typing wrong email", async () => {
    render(
      <AuthContext.Provider value={{ test }}>
        <Login />
      </AuthContext.Provider>
    );
  });
});

describe("test submitted email and password", () => {
  it("correct submit", async () => {
    render(
      <AuthContext.Provider value={{ test: true }}>
        <Login />
      </AuthContext.Provider>
    );

    const submitButton = screen.getByTestId("submit-login");
    await userEvent.type(screen.getByTestId("add-email"), "test@test.com");
    await userEvent.type(screen.getByTestId("add-password"), "password");
    userEvent.click(submitButton);
  });
});

// testing for error mesage
// describe("testing error message for email and password", () => {
//   it("test email is entered", async () => {
//     render(
//       <AuthContext.Provider value={{ test }}>
//         <Login />
//       </AuthContext.Provider>
//     );

//     const submitButton = screen.getByTestId("submit-login");
//     userEvent.click(submitButton);

//     const errorMessage = screen.getByText("Please fill out this field.");
//     expect(errorMessage).toBeInTheDocument();
//   });
// });
