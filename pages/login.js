import Link from "next/link";
import Layout from "../components/Layout";

import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleFormSubmit({ email, password }) {}

  return (
    <Layout title="Login">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold">Login Page</h2>
        <form
          className="w-1/2 max-w-sm p-6 mx-auto mt-10 space-y-4 border-2 border-white shadow-md rounded-xl"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="mb-4">
            <input
              {...register("email", {
                required: "Please enter email.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email.",
                },
              })}
              type="email"
              id="email"
              autoFocus
              placeholder="Email"
              className={`input input-bordered w-full max-w-xs transition-colors ${
                errors.email
                  ? "input-error"
                  : watch("email")
                  ? "input-success"
                  : "input-primary "
              }`}
            />
            {errors.email && (
              <p className="text-error">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("password", {
                required: "Please enter password.",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters.",
                },
              })}
              type="password"
              id="password"
              autoFocus
              placeholder="Password"
              className={`input input-bordered w-full max-w-xs transition-colors ${
                errors.email
                  ? "input-error"
                  : watch("password")
                  ? "input-success"
                  : "input-primary "
              }`}
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>
          <div className="flex gap-4">
            <button className="btn btn-primary">Login</button>
            <Link href="register">
              <button className="btn btn-secondary">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;
