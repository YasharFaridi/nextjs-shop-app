import Link from "next/link";
import Layout from "../components/Layout";

import { useForm } from "react-hook-form";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

function LoginPage() {
  const { data: session } = useSession();

  const [loginError, setLoginError] = useState("");

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode:'onBlur'});

  async function handleFormSubmit({ email, password }) {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        setLoginError(result.error);
      }else {
    setLoginError("");
    // اگر میخوای بعد از لاگین برو صفحه اصلی
    window.location.href = "/";
  }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout title="Login">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold">Login Page</h2>
        <form
        autoComplete="off"
          className="w-1/2 max-w-sm p-6 mx-auto mt-10 space-y-4 border-2 border-white shadow-md rounded-xl"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {loginError && <p className="text-red-500">{loginError}</p>}
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
              autoComplete="username"
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
              autoComplete="current-password"
              placeholder="Password"
              className={`input input-bordered w-full max-w-xs transition-colors ${
                errors.password
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
          <div className="flex gap-4 w-full justify-center">
            <button type="submit" className="btn btn-primary">Login</button>
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
