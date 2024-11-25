import React from "react";
import {UnsplashImage} from "../App";

const ImageCard = ({ image }: { image: UnsplashImage}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image.urls.full}
        alt="asd" className="w-full"
      />
      <div className="px-6 py">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user.name}
        </div>
        <ul>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          @{image.user.instagram_username ? image.user.instagram_username : "unknown"}
        </span>
      </div>
    </div>
  )
}

export default ImageCard;