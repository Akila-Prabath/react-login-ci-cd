import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p>Please sign in to continue</p>

        <form>
          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;