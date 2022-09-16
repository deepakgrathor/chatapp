import React from "react";
import { ImArrowLeft2 } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";

const ChatBox = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="p-2 bg-green-100 border-b-2 shadow-sm">
          <span className="flex justify-between items-center">
            <ImArrowLeft2
              onClick={() => {
                navigate(-1);
              }}
              className="text-xl"
            />
            <span className="flex items-center space-x-4 relative ">
              <h2 className="w-3 absolute h-3 bg-red-600 rounded-full"></h2>
              <h2 className="font-semibold">{data.name}</h2>
              <img
                className="w-10 object-cover h-10 rounded-full"
                src={data.img}
                alt=""
              />
            </span>
          </span>
        </div>
        <div className="bg-gray-100 p-2 h-screen">
          <div className="bg-white my-2 border shadow  inline-block rounded-r-3xl rounded-tl-3xl  p-1 ">
            <h3 className="px-3 text-sm py-5 tracking-wide">{data.message}</h3>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default ChatBox;
