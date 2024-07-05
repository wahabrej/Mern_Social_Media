import React from "react";
import Postshare from "./Postshare";
import Post from "./Post";
import { FcLike } from "react-icons/fc";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import ProfileCard from "./ProfileCard.jsx";
import sharuk from "../../assets/images/sharuk.jpg";
import salman from "../../assets/images/salman.jpg";
import amir from "../../assets/images/amir.jpg";
import saif from "../../assets/images/saif.jpg";
import aryan from "../../assets/images/aryan.jpg";
import ibrahim from "../../assets/images/ibrahhim.jpg";
export default function Postside() {
  const data = [
    {
      name: "Sharuk Khan",
      id: 1,
      img: sharuk,
      desc: "Happy New Year 2024....",
      like: <FcLike />,
      comment: <FaCommentAlt />,
      share: <FaShare />,
    },
    {
      name: "Salman Khan",
      id: 2,
      img: salman,
      desc: "Happy New Year 2024....",
      like: <FcLike />,
      comment: <FaCommentAlt />,
      share: <FaShare />,
    },
    {
      name: "Amir Khan",
      id: 1,
      img: amir,
      desc: "Happy New Year 2024....",
      like: <FcLike />,
      comment: <FaCommentAlt />,
      share: <FaShare />,
    },
    {
      name: "Saif Ali Khan",
      id: 1,
      img: saif,
      desc: "Happy New Year 2024....",
      like: <FcLike />,
      comment: <FaCommentAlt />,
      share: <FaShare />,
    },
    {
      name: "Aryan Khan",
      id: 1,
      img: aryan,
      desc: "Happy New Year 2024....",
      like: <FcLike />,
      comment: <FaCommentAlt />,
      share: <FaShare />,
    },
    {
      name: "Ibrahim Ali Khan",
      id: 1,
      img: ibrahim,
      desc: "Happy New Year 2024....",
      like: <FcLike />,
      comment: <FaCommentAlt />,
      share: <FaShare />,
    },
  ];
  return (
    <div className="scroll-smooth">
      <ProfileCard />
      <Postshare />
      <Post data={data} />
    </div>
  );
}
