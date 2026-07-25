import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  test("renders login heading", () => {
    render(<Login />);

    expect(
      screen.getByText("Welcome Back")
    ).toBeInTheDocument();
  });

  test("renders email input", () => {
    render(<Login />);

    expect(
      screen.getByPlaceholderText("Email")
    ).toBeInTheDocument();
  });

  test("renders password input", () => {
    render(<Login />);

    expect(
      screen.getByPlaceholderText("Password")
    ).toBeInTheDocument();
  });

  test("renders login button", () => {
    render(<Login />);

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });
});