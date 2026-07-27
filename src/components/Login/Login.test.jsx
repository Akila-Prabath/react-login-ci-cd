import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Component", () => {
  test("renders login heading", () => {
    render(<Login />);

    expect(screen.getByText("Welcome Back")).toBeInTheDocument();
  });

  test("shows validation message when fields are empty", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(
      screen.getByText("Email and password are required.")
    ).toBeInTheDocument();
  });

  test("accepts user input", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");

    await user.type(email, "test@gmail.com");
    await user.type(password, "123456");

    expect(email).toHaveValue("test@gmail.com");
    expect(password).toHaveValue("123456");
  });

  test("shows loading state after clicking login", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(
      screen.getByPlaceholderText("Email"),
      "test@gmail.com"
    );

    await user.type(
      screen.getByPlaceholderText("Password"),
      "123456"
    );

    await user.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(
      screen.getByRole("button")
    ).toHaveTextContent("Logging in...");
  });
});