import React, { useContext } from "react";
import { AiOutlineComment, AiTwotoneLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { AuthContext } from "../../context/UserContext";

const NewsFeedCard = ({ singlePost }) => {
  const { userName, userImage, img, post } = singlePost;
  const { user } = useContext(AuthContext);

  const handleFollowing = (_id) => {
    fetch(`https://canva-look-server.vercel.app/user/following/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="my-6 bg-[#111827] rounded-2xl">
      <div className="flex justify-between px-5 py-4">
        <div className="flex space-x-4">
          <img
            className="h-14 w-14 rounded-full border p-2 border-[#A6ADBB]"
            src={userImage}
            alt=""
          />
          <div>
            <h1 className="text-2xl font-bold">{userName}</h1>
            <p className="text-xl font-medium">few minutes ago</p>
          </div>
        </div>
        {user?.displayName !== userName && (
          <button
            onClick={() => handleFollowing(singlePost._id)}
            className="px-4 py-2 capitalize text-2xl font-medium border-2 rounded-xl"
          >
            {singlePost.status}
          </button>
        )}
      </div>
      <div>
        <h1 className="text-3xl font-semibold py-10 px-4">{post}</h1>
        <img className="h-[200px] md:h-[500px] w-full mb-4" src={img} alt="" />
      </div>
      <div className="flex justify-evenly items-center pt-2 pb-4">
        <li className="list-none flex space-x-2 items-center  text-2xl btn">
          {" "}
          <AiTwotoneLike /> <p>Like</p>
        </li>
        <li className="list-none flex space-x-2 items-center  text-2xl btn">
          {" "}
          <AiOutlineComment className="" /> <p>Comment</p>
        </li>
        <li className="list-none flex space-x-2 items-center  text-2xl btn">
          {" "}
          <FaShare /> <p>Share</p>
        </li>
      </div>
      <div className="flex items-center space-x-3 relative py-4 px-4">
        <img
          className="h-14 w-14 rounded-full border p-2 border-[#A6ADBB]"
          src={user?.photoURL}
          alt="user"
        />
        <textarea
          rows=""
          className="rounded-3xl w-full text-2xl px-4 pt-5 bg-[#2A303C]"
          placeholder="Comment"
        ></textarea>
        <BsEmojiSmile className="absolute right-6 text-4xl bottom-10" />
      </div>
    </div>
  );
};

export default NewsFeedCard;
