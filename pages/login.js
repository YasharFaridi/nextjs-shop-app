import Link from "next/link";
import Layout from "../components/Layout";

function LoginPage() {
  return (
    <Layout title="Login">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="font-bold text-2xl">Login Page</h2>
        <form className="border-white border-2 w-1/3 rounded-xl p-4 flex flex-col justify-center items-center">
          <input
            type="email"
            id="email"
            autoFocus
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs mb-4"
          />
          <input
            type="password"
            id="password"
            autoFocus
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs mb-4"
          />
          <div className="flex gap-4"><button className="btn btn-primary">Login</button>
          <Link href='register'><button className="btn btn-secondary">Register</button></Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;
