import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Component", () => {
  test("renders login heading", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", { name: /welcome back/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/sign in to continue/i)
    ).toBeInTheDocument();
  });

  test("shows validation message when fields are empty", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.click(
      screen.getByRole("button", { name: /^login$/i })
    );

    expect(
      screen.getByText("Email and password are required.")
    ).toBeInTheDocument();
  });

  test("accepts user input", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const emailInput = screen.getByPlaceholderText(
      "Email Address"
    );

    const passwordInput = screen.getByPlaceholderText(
      "Password"
    );

    await user.type(emailInput, "test@gmail.com");
    await user.type(passwordInput, "123456");

    expect(emailInput).toHaveValue("test@gmail.com");
    expect(passwordInput).toHaveValue("123456");
  });

  test("shows loading state after clicking login", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(
      screen.getByPlaceholderText("Email Address"),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText("Password"),
      "123456"
    );

    await user.click(
      screen.getByRole("button", { name: /^login$/i })
    );

    const loginButton = screen.getByRole("button", {
      name: /logging in/i,
    });

    expect(loginButton).toBeDisabled();
    expect(loginButton).toHaveTextContent("Logging in...");
  });

  test("toggles password visibility", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const passwordInput = screen.getByPlaceholderText(
      "Password"
    );

    const toggleButton = screen.getByRole("button", {
      name: /show password/i,
    });

    expect(passwordInput).toHaveAttribute(
      "type",
      "password"
    );

    await user.click(toggleButton);

    expect(passwordInput).toHaveAttribute(
      "type",
      "text"
    );

    expect(
      screen.getByRole("button", {
        name: /hide password/i,
      })
    ).toBeInTheDocument();
  });

  test("renders remember me checkbox", () => {
    render(<Login />);

    expect(
      screen.getByLabelText(/remember me/i)
    ).toBeInTheDocument();
  });

  test("renders forgot password link", () => {
    render(<Login />);

    expect(
      screen.getByRole("link", {
        name: /forgot password/i,
      })
    ).toBeInTheDocument();
  });

  test("renders register section", () => {
    render(<Login />);

    expect(
      screen.getByText(/don't have an account/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/register/i)
    ).toBeInTheDocument();
  });
});