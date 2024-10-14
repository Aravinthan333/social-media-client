import { BiSolidHome } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
// import { IoChatboxEllipses } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="flex justify-between items-center mx-6 mr-12 p-3 pr-6">
          <h1 className="text-4xl font-bold cursor-pointer">Connect...</h1>
          <ul className="flex gap-4">
            <Link to={"/"}>
              <li
                title="Home"
                className="hover:bg-black hover:text-white hover:rounded-full p-2 text-2xl hover:shadow-md transition-all ease-in-out duration-300"
              >
                <BiSolidHome />
              </li>
            </Link>

            <Link to="/chat">
              <li
                title="Chat"
                className="hover:bg-black hover:text-white hover:rounded-full p-2 text-2xl hover:shadow-md transition-all ease-in-out duration-500"
              >
                {/* <IoChatboxEllipses /> */}
                <BsChatDotsFill />
              </li>
            </Link>

            <Link to="/profile">
              <li
                title="Profile"
                className="hover:bg-black hover:text-white hover:rounded-full p-2 text-2xl hover:shadow-md transition-all ease-in-out duration-300"
              >
                <BsFillPersonFill />
                {/* <BsPersonCircle /> */}
              </li>
            </Link>

            <Link to={"/logout"}>
              <li
                title="Logout"
                className="hover:bg-black hover:text-white hover:rounded-full p-2 text-2xl hover:shadow-md transition-all ease-in-out duration-300"
              >
                <FaPowerOff />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="px-3 pt-2">{children}</div>
      {/* {child} */}
    </>
  );
};

export default AppLayout;
