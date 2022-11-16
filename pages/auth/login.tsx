import useAuth from "context/hooks/useAuth";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useAuth();

  const customId = React.useId();

  const onSubmit = async (data: any) => {
    console.log(data);
    const { email, password } = data;

    const login = async () => await signIn(email, password);

    toast.promise(
      login,
      {
        pending: "logging in...",
        success: {
          render: (data) => {
            console.log(data);
            reset();
            // @ts-ignore
            return `Welcome back ${data?.data?.email}`;
          },
        },
        error: {
          render: (error) => {
            console.log(error?.data);
            // reset();
            return `${
              // @ts-ignore
              error?.data?.message
                ?.toLowerCase()
                .replace("firebase", "")
                .replace(":", "")
                .replace("/", "")
                .replace("error", "")
                .replace("(", "")
                .replace("auth", "")
                .replace(")", "")
                .replaceAll("-", " ") || "error"
            }!`;
          },
        },
      },
      {
        toastId: customId,
      }
    );
  };

  return (
    <form
      className="w-full md:w-4/12 mx-auto py-10 mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="block text-sm mb-1" htmlFor="emailinput">
        Your Email
      </label>
      <input
        className="form-input"
        type="email"
        placeholder="Ex. james@bond.com"
        id="emailinput"
        required
        {...register("email", { required: true })}
      />
      <label className="block text-sm mb-1 mt-4" htmlFor="passwordinput">
        Your Password
      </label>
      <input
        className="form-input"
        type="password"
        placeholder="••••••••"
        id="passwordinput"
        required
        {...register("password", { required: true })}
      />
      <label className="flex items-center mt-4">
        <input type="checkbox" className="form-checkbox" />
        <span className="ml-2 cursor-pointer text-sm">Remember me</span>
      </label>
      <input
        type="submit"
        className="btn btn-primary w-full mt-4"
        value="Login"
      />
    </form>
  );
};

export default Login;
