import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="flex justify-center items-center h-screen"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
      }}
    >
      <div className="max-w-md flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
