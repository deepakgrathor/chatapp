import React from "react";
import ChatHead from "./ChatHead";

const Header = () => {
  return (
    <>
      <section>
        <div className="p-2 shadow border-b-2 border-gray-300 bg-green-100">
          <span className="flex justify-between items-center ">
            <h2 className="font-semibold">Chat App</h2>
            <img
              className="w-10 border-2 border-white rounded-full"
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              alt=""
            />
          </span>
          <span>
            <input
              placeholder="Search User Here...."
              type="text"
              className="w-full mt-4 mb-2 border shadow-sm border-gray-300 outline-none  p-2 rounded-md"
              name=""
              id=""
            />
          </span>
        </div>
        <ChatHead />
      </section>
    </>
  );
};

export default Header;
