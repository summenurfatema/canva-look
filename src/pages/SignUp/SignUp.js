import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const imgBbKey = "5264a75dacc9a5a19565b12a2671f321";

  console.log(imgBbKey);
  // display image

  const [previewImage, setPreviewImage] = useState();
  const check = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPreviewImage(e.target.files[0]);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      toast.error("Please enter at least 6 characters !!");
      return;
    }
    if (password !== confirm) {
      toast.error("Please enter correct password !!");
      return;
    } else {
      toast.success("Welcome to Canva Look !!!");
    }

    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const userInfo = {
            name,
            email,
            img: imgData.data.url,
            status: "unfollow",
          };

          createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              form.reset();
              updateUser({ displayName: name, photoURL: imgData.data.url })
                .then(() => {})
                .catch((err) => console.log(err));
            })
            .catch((error) =>
              toast.error(`${error}.Please  valid Email/Password`)
            );

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                navigate("/");
              } else {
                toast.error("Error");
              }
            })
            .catch((err) => toast.error(err));
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-900 flex justify-center items-center py-16">
        <div className="flex flex-col items-center space-y-1 shadow-lg bg-gray-900  w-[600px] p-10  border-white border-2 rounded-lg hover:shadow-lg hover:shadow-white md:space-y-3">
          <h1 className="text-3xl font-bold mb-10 text-white">
            Please Create an Account Here !!!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start space-y-4 w-3/4"
          >
            <div
              onChange={previewImage}
              className="hover:scale-110 duration-300"
            >
              {previewImage ? (
                <img
                  className="h-96 w-[400px]"
                  src={URL.createObjectURL(previewImage)}
                  alt=""
                />
              ) : (
                <img
                  className="h-96 w-[400px] mb-5"
                  src="https://img.freepik.com/free-vector/paper-pencil-cartoon-icon-illustration-education-object-icon-concept-isolated-flat-cartoon-style_138676-2137.jpg?size=338&ext=jpg&ga=GA1.1.821203553.1657130385&semt=sph"
                  alt=""
                />
              )}
            </div>
            <input
              className=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full focus:outline-none  bg-gray-900 text-white"
              type="file"
              name="img"
              id=""
              onChange={check}
              accept="image/*"
              required
            />

            <label className="text-xl text-white " htmlFor="name">
              Name
            </label>

            <input
              className="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
              type="text"
              name="name"
              id=""
              required
            />

            <label className="text-xl text-white" htmlFor="email">
              Email address
            </label>
            <input
              className="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
              type="text"
              name="email"
              id=""
              required
            />

            <label className="text-xl text-white" htmlFor="password">
              Password
            </label>
            <input
              className=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="*****************"
              required
            />

            <label className="text-xl text-white" htmlFor="password">
              Confirm Password
            </label>
            <input
              className=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
              type="password"
              name="confirm"
              id=""
              placeholder="*****************"
              required
            />

            <button className="font-semibold text-xl py-2 rounded-md bg-[#A6ADAD] text-[#111827] w-full">
              Register
            </button>
            <p className="text-xl text-white">
              Already have an account?{" "}
              <Link className="text-xl text-blue-700 hover:underline" to="/">
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
