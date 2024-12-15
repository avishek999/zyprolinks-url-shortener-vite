// Core imports
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Components imports
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import DarkModeButton from "../../components/DarkModeButton/DarkModeButton";

// Interface imports
import { IAuth } from "@/interface/auth";

const fakeData = [
  {
    name: "avishek",
    password: "1234567890",
  },
];

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>();

  const navigate = useNavigate();

  const handleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleSignUp = (data: IAuth) => {
    console.log("sign up data:", data);
  };

  const handleLogin = (data: IAuth) => {
    console.log("login data:", data);
    console.log("login data:", fakeData[0].name, fakeData[0].password);

    if (
      data.name === fakeData[0].name &&
      data.password === fakeData[0].password
    ) {
      navigate("/dashboard");
      console.log("success");
    } else {
      alert("Invalid login credentials");
    }
  };
  return (
    <>
      <div className="object-fit bg-[url('https://www.pngall.com/wp-content/uploads/12/Lines-PNG-Free-Image.png')] ">
        <DarkModeButton />
        <div className="flex justify-center items-center h-[calc(100vh-64px)] w-full">
          <Card className="lg:w-[400px] md:w-[500px]  h-[400px]  ">
            <CardHeader>
              <CardTitle className="text-2xl">
                {" "}
                {isLogin ? "Sign up" : "Log in"}
              </CardTitle>
              <CardDescription className="flex flex-col">
                Welcome to Avishek's practice playground!
                <span className="text-blue-400">
                  {" "}
                  <span className="font-bold">
                    {isLogin ? " Start" : "Continue"}
                  </span>{" "}
                  to Journey
                </span>
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit(isLogin ? handleSignUp : handleLogin)}>
              <CardContent>
                <div className="grid items-center gap-4 w-full">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input
                      value={"avishek"}
                      placeholder="Write Your name!!"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="font-semibold text-red-700">
                        This field is required
                      </span>
                    )}
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      value={1234567890}
                      placeholder="Write you  Password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="font-semibold text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button type="submit">Submit</Button>

                <div className="flex gap-2 text-[12px] ">
                  Go back to{" "}
                  <span
                    className="text-gray-500 cursor-pointer hover:text-blue-400 "
                    onClick={handleAuth}
                  >
                    {isLogin ? "Login" : "Sign up"}
                  </span>
                </div>
              </CardFooter>

              {/* ? for future social login */}

              {/* <CardFooter className="">
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                    OR
                  </span>
                </div>
                <div className="flex  w-full  flex-col ">
                  <Button className="flex"  variant={"outline"}>
                        <BsGoogle />
                        <span>GOOGLE</span>
                  </Button>
                  <Button className="flex" variant={"outline"} >
                        <BsGithub />
                        <span>GIHUB</span>
                  </Button>
                </div>
              </CardFooter> */}
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Auth;
