import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire,faMusic,faPodcast,faGamepad,faTrophy,faAngleRight,faShoppingBag ,faVideo, faClock, faHistory, faThumbsUp, faUserTie} from "@fortawesome/fontawesome-free-solid";
import "../assets/subscription.svg";
import { Link } from "react-router-dom";
import { faVimeo } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen); 


  return (
    <div
      className={`absolute  top-16 inset-y-0 left-0 max-[322px]:w-7/12 bg-white shadow-lg overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="h-[90vh] pt-5 pb-5 hover:overflow-y-scroll overflow-hidden sticky top-[75px] lg:w-[15vw] md:w-[20vw] sm:w-[25vw]">
        <div>
        <Link to="/"><h1 className="font-bold text-lg pb-3 hover:bg-gray-200 rounded-lg pl-3 pt-1"> Home</h1></Link>
          <h1 className="font-bold text-lg pb-3 cursor-pointer hover:bg-gray-200 rounded-lg pl-3 pt-1 "> Shorts</h1>
          <h1 className="font-bold text-lg pb-3 cursor-pointer hover:bg-gray-200 rounded-lg pl-3 pt-1"> Subscription</h1>
        </div>
        <div className="h-[1px] bg-gray-700 mb-3"/>
        <div>
          <h1 className="font-bold text-xl pb-3 pl-3 flex gap-3">
            <span>You</span>
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </h1>
          <ul className="pl-3">
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span className="text-black">
                <FontAwesomeIcon icon={faUserTie} />
              </span>
              <span className="text-sm font-semibold">Your Channel</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faHistory} />
              </span>
              <span className="text-sm font-semibold">History</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faMusic} />
              </span>
              <span className="text-sm font-semibold">Playlists</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faVideo} />
              </span>
              <span className="text-sm font-semibold">Your Videos</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className="text-sm font-semibold">Watch Later</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <span className="text-sm font-semibold">Liked Videos</span>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-gray-700 mb-3"></div>
        <div className="pl-3">
          <h1 className="font-bold text-xl pb-3"> Explore</h1>
          <ul className="">
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span className="text-black">
                <FontAwesomeIcon icon={faFire} />
              </span>
              <span className="text-sm font-semibold">Trending</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faShoppingBag} />
              </span>
              <span className="text-sm font-semibold">Shopping</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faMusic} />
              </span>
              <span className="text-sm font-semibold">Music</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faVimeo} />
              </span>
              <span className="text-sm font-semibold">Movies</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faPodcast} />
              </span>
              <span className="text-sm font-semibold">Live</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faGamepad} />
              </span>
              <span className="text-sm font-semibold">Gaming</span>
            </li>
            <li className="pb-2 flex gap-3  cursor-pointer">
              <span>
                <FontAwesomeIcon icon={faTrophy} />
              </span>
              <span className="text-sm font-semibold">Sports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
