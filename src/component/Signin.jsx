// Hook from Component.here all the work done by hook from

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast } from "react-toastify";

const SignInPage = () => {
  const { register, control, handleSubmit,reset, formState } = useForm();
  const { errors } = formState;

   
const onSubmit = (data ) => {
  notify();
  reset(); // Reset the form
  console.log("Form Submitted", data);
};

  // react toastify here
  const notify = () => toast.success("Successfully Submitted Your Data!");
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", {
                    required: "User Name Is Required",
                  })}
                  type="text"
                  autoComplete="name"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
                <p className="text-red-300">{errors.name?.message}</p>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                <p className="text-red-300">{errors.email?.message}</p>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <p className="text-red-300">{errors.password?.message}</p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
