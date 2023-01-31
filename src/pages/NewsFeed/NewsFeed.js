import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineCamera,
  AiTwotoneLike,
  AiOutlineComment,
} from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { BsEmojiSmile } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";
import NewsFeedCard from "./NewsFeedCard";

const NewsFeed = () => {
  const { user } = useContext(AuthContext);
  const imgBbKey = "5264a75dacc9a5a19565b12a2671f321";

  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const post = form.post.value;
    const img = form.image.files[0];

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
          const postBody = {
            img: imgData.data.url,
            post,
            status: "follow",
            userImage: user.photoURL,
            userName: user.displayName,
          };

          console.log(postBody);

          fetch("https://canva-look-server.vercel.app/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postBody),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(`You have added a post successfully`);
                form.reset("");
              } else {
                toast.error("Error");
              }
            })
            .catch((err) => toast.error(err));
        }
      });
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://canva-look-server.vercel.app/allpost")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);

  return (
    <div className="rounded-3xl ">
      <div className=" bg-[#111827] py-3 px-2 rounded-3xl">
        <form onSubmit={handleAddTask}>
          <div className="flex space-x-3">
            <img
              className="h-24 w-24 border p-2 border-[#A6ADBB]  rounded-full py-2"
              src={user?.photoURL}
              alt=""
            />

            <textarea
              rows="1"
              title="Add an image first"
              name="post"
              className="rounded-3xl w-full text-3xl px-7  pt-5 bg-[#2A303C]"
              placeholder="What is on your mind?"
            ></textarea>
          </div>
          <div className="flex justify-between items-center py-5 px-6">
            <div className="flex space-x-4">
              <AiOutlineCamera className="text-4xl" />
              <label required htmlFor="im">
                {" "}
                <TfiGallery className="text-4xl " />
              </label>

              <input
                name="image"
                required
                id="im"
                type="file"
                className="hidden"
              />
              <BsEmojiSmile className="text-4xl"></BsEmojiSmile>
            </div>
            <button className="px-4 py-2 text-2xl font-medium border-2 rounded-xl">
              Post
            </button>
          </div>
        </form>
      </div>
      {/* all post will be here */}
      <div className="divider"></div>
      <div className="py-7 px-2 bg-[#2A303C] max-h-[100vh] overflow-y-auto">
        <div className="bg-[#2A303C] p-3 ">
          {posts.map((singlePost) => (
            <NewsFeedCard key={singlePost._id} singlePost={singlePost} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
