import React from "react";
import { BsShop } from "react-icons/bs";
import { FaHandshake, FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { ImNewspaper } from "react-icons/im";
import NavBar from "../NavBar/NavBar";
import NewsFeed from "../NewsFeed/NewsFeed";

const Home = () => {
  const communications = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/working-code_1098-19858.jpg?size=626&ext=jpg&ga=GA1.1.821203553.1657130385&semt=sph",
      name: "UI/UX Designer",
      member: "128 members",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/online-web-design_53876-95309.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph",
      name: "Front-end Developer",
      member: "250 members",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph",
      name: "Devops",
      member: "178 members",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph",
      name: "React Native Developer",
      member: "118 members",
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex justify-evenly  ">
        {/* clm 1 */}
        <div className="bg-[#111827] px-5  py-10  hidden lg:block rounded-3xl">
          <ul className="space-y-5">
            <li className="text-3xl font-semibold flex space-x-6 items-center">
              {" "}
              <FaHome />
              <p>Home</p>
            </li>
            <li className="text-3xl font-semibold flex space-x-6 items-center">
              <FaHandshake /> <p>Community</p>
            </li>
            <li className="text-3xl font-semibold flex space-x-6 items-center">
              <BsShop />
              <p> Market Place</p>
            </li>
            <li className="text-3xl font-semibold flex space-x-6 items-cente">
              <SlCalender />
              <p>Events</p>
            </li>
            <li className="text-3xl font-semibold flex space-x-6 items-center">
              <ImNewspaper />
              <p>News Feed</p>
            </li>
          </ul>

          <div className="divider py-6"></div>
          <div>
            <h2 className="text-2xl font-bold my-7">My Communication</h2>

            <div>
              {communications.map((communication) => (
                <div
                  key={communication.id}
                  className="flex space-x-4 space-y-5 items-center"
                >
                  <img
                    className="h-16 w-16 rounded-full"
                    src={communication.img}
                    alt=" "
                  />
                  <div>
                    <p className="text-2xl font-bold">{communication.name}</p>
                    <p className="text-2xl font-bol">{communication.member}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* clm 2 */}

        <div className="w-[900px] overflow-y-auto ">
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};

export default Home;
