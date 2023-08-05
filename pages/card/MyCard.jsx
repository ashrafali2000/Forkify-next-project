import React from "react"
import Link from "next/link"
import { BiLike } from "react-icons/bi"
import { BsHeart } from "react-icons/bs"
import {FaRegCommentDots} from "react-icons/fa"
import { Card } from "antd"
import { useState } from "react"
export default function MyCard({ img, name, publisher }) {

  const [like, setLike] = useState(0);
  const [love, setLove] = useState(0);
  const [commet, setComment] = useState(0);
  
let nameText = "";
    if(name.length > 28 ) {
        name = name.split("")
        name.splice(25);
        nameText = name.join("") + "...";
    }
    else{
        nameText = name;
    }

  const addLikeHandler = () => {
    setLike(prev => prev + 1);
  }

  const addLoveHandler = () => {

  //   if(love === 0) {
  //  let love = document.getElementById("love");
  //  love.style.color = "#f00";
  //   }


    setLove(prev => prev + 1);
  }
  const addCommentHandler = () => {
    setComment(prev => prev + 1);
  }

  return (
    <div>
      <Card className="myCards"
        style={{
          width: 350,
          textAlign: "center",
          height: 460,
          fontSize: 20,
          backgroundColor: "#f0eed3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 15,
          boxShadow: " 2px 5px 16px 3px #999"
        }}
        cover={
        <Link href={`myCard/${img}`}>  <img
            alt="example"
            src={img}
            style={{
              width: 280,
              height: 250
            }
            }
          /></Link>
        }
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 15
        }}>

          {/* For title */}
          <div style={{
            display: "flex",
            flexDirection:"column"
          }}>
          {nameText}
          {/* {publisher} */}
          </div>

          <div style={{
            width: 220,
            display: "flex",
            justifyContent: "space-between"
          }}>

            {/* For Likes */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: 21,
              width: 60
            }}>
              <BiLike style={{
                fontSize: 30
              }} onClick={addLikeHandler}></BiLike>
              {like}
            </div>

            {/* For Love */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: 21,
              width: 60,
            }}>
              <BsHeart style={{
                fontSize: 30,
                color: "#666",
              }} onClick={ addLoveHandler } id="love"></BsHeart>
              {love}
            </div>


            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontSize: 21,
              width: 60
            }}>
              <FaRegCommentDots style={{
                fontSize: 30
              }} onClick={addCommentHandler}></FaRegCommentDots>
              {commet}
            </div>
          </div>
        </div>
      </Card>

    </div>
  )
}