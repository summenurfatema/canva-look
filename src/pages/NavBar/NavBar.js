import { useContext, useState } from "react";
import { BsJustify, BsPerson } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
  return (
    <div class="bg-[#111827] w-full sticky top-0">
      <div class="px-4 -py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex  items-center justify-between">
          <div className="lg:hidden">
            {user && (
              <img
                src={user?.photoURL}
                className="h-14 w-14 rounded-full border  p-2"
                alt="user"
              />
            )}
          </div>

          <div className="flex space-x-3 items-center">
            <img
              className="h-16 w-16 rounded-full hidden lg:block"
              src="https://cdn.pixabay.com/photo/2016/04/01/23/39/abstract-1301878_960_720.png"
              alt=" "
            />
            <h1 className="text-5xl font-bold my-10">Canva Look</h1>
          </div>

          <a href="/" className="inline-flex items-center"></a>

          <ul class="flex items-center hidden space-x-4 lg:flex">
            <li>
              <div className="dropdown">
                <label tabIndex={0} className=" text-white text-4xl m-1">
                  {user ? (
                    <div className="flex space-x-6 items-center">
                      <h1 className="text-2xl font-semibold text-[#A6ADBB]">
                        Welcome {user?.displayName} !!!
                      </h1>
                      <img
                        src={user?.photoURL}
                        className="h-14 w-14 rounded-full border  p-2"
                        alt="user"
                      />
                      <button
                        onClick={handleLogOut}
                        className="px-3 py-2 font-semibold text-2xl bg-[#A6ADBB] text-[#111827] rounded-xl"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <BsPerson />
                  )}{" "}
                </label>
              </div>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <BsJustify className="text-2xl text-white" />
            </button>

            {isMenuOpen && (
              <div class="transform top-0 left-0 w-72 bg-gray-800 fixed h-full overflow-auto ease-in-out transition-all duration-1000">
                <div class="p-5 border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a href="/" class="inline-flex items-center">
                        <img
                          src="https://cdn.pixabay.com/photo/2016/04/01/23/39/abstract-1301878_960_720.png"
                          className="h-12 w-14 rounded-full"
                          alt="logo"
                        />
                        <span class="ml-2 text-xl font-bold">Canva Look</span>
                      </a>
                    </div>
                    <div>
                      <button
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <AiOutlineCloseCircle className="text-2xl text-white" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <input
                          placeholder="Search here"
                          className="w-full py-2 pl-3 bg-gray-800 border-2  border-white rounded-md"
                        />
                      </li>
                      <li>
                        <Link to="/" className="font-lg text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="font-lg text-white">
                          Community
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="font-lg text-white">
                          Market Place
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="font-lg text-white">
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="font-lg text-white">
                          News Feed
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
