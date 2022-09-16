import React from "react";
import { useNavigate } from "react-router-dom";

const ChatHead = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        {chats?.map((e) => {
          return (
            <div
              onClick={() => {
                navigate("/chat-box", { state: e });
              }}
              className="flex shadow-sm justify-between cursor-pointer space-x-3 m-2 p-2 bg-gray-50 rounded-md border"
            >
              <span className="flex relative items-center justify-center">
                <img
                  className="w-12 object-cover h-12 rounded-full"
                  src={e?.img}
                  alt=""
                />
                <span className="w-3 bottom-1 right-0 absolute h-3 bg-red-500 border border-white rounded-full"></span>
              </span>
              <span className="space-y-1">
                <h2 className="text-sm font-semibold ">{e.name}</h2>
                <p className="text-xs text-gray-500">
                  {e?.message?.slice(0, 50) + "..."}
                </p>
              </span>
              <span className="space-y-2">
                <h3 className="text-xs font-medium text-green-700">23min</h3>
                <h3 className="bg-red-500 text-center rounded-full w-5 h-5 text-white text-sm font-semibold">
                  1
                </h3>
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
};

const chats = [
  {
    img: "https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-headshot-portrait-profile-picture-of-pretty-smiling-young-woman-posing-indoors-looking-at-camera-sat.jpg",
    name: "Muskan Jain",
    message:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vitae eligendi. Voluptates natus dolore magni, doloremque blanditiis delectus molestiae! Nesciunt!",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png",
    name: "Shubham Rajput",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et autem maiores, nemo commodi sapiente quae error placeat similique quidem ad ducimus, impedit doloribus explicabo consectetur. Fugit minima atque hic vero aspernatur quia omnis sapiente eaque ut, quasi enim temporibus, ratione impedit, minus officia quibusdam! Commodi iure corporis suscipit sed mollitia?",
  },
  {
    img: "https://deepakrathor.in/wp-content/uploads/2022/03/1619611606148-modified.png",
    name: "Deepak Rathor",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et autem maiores, nemo commodi sapiente quae error placeat similique quidem ad ducimus, impedit doloribus explicabo consectetur. Fugit minima atque hic vero aspernatur quia omnis sapiente eaque ut, quasi enim temporibus, ratione impedit, minus officia quibusdam! Commodi iure corporis suscipit sed mollitia?",
  },
];

export default ChatHead;
