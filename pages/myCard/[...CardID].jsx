import React from "react"
import Image from 'next/image'
import { useRouter } from "next/router"
import { RiContactsFill } from "react-icons/ri"
import { MdOutlineWatchLater } from "react-icons/md"
import { IoIosAddCircleOutline } from "react-icons/io"
import { FiMinusCircle } from "react-icons/fi"
import { PiBookmarkSimpleFill } from "react-icons/pi"
import { GiCheckMark } from "react-icons/gi"
import { FormOutlined } from "@ant-design/icons"
import { GoBookmark } from "react-icons/go"
import Link from "next/link"

import { Button, Card } from "antd"
import { useState } from "react"

export default function CardID({ name }) {

    const [love, setLove] = useState(1);
    const router = useRouter();
    const { CardID } = router.query;
console.log(CardID)
    const time = "60  MINUTES";
    const serving = "  SERVINGS";
    const recipe = "RECIPE INGREDIENTS";
    let numMath = Math.round(Math.random() * 10 + 1);

    const myJoinStr = CardID.join("/");
    const myArr = myJoinStr.split("");
    myArr.splice(5, 0, "/");
    // console.log(myArr.join(""))


    const addServingHandler = () => {
        setLove(prev => prev + 1);
    }

    const minServingHandler = () => {
        setLove(prev => prev > 1 ? prev - 1 : 1);
    }

    const setColor = () => {

        let a = document.querySelector(".myBookMark");
        if (a.style.color === "white") {
            a.style.color = "#000";
        }
        else {
            a.style.color = "white";
        }
    }
    return (
        <div className="myDetailCard">
            <Card
                style={{
                    width: 950,
                    textAlign: "center",
                    paddingTop: 20,
                    fontSize: 20,
                    backgroundColor: "#f0eed3",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: " 2px 5px 16px 3px #999"
                }}
                cover={
                    <div>

                        <div className="container0">
                            <Image
                                src="/forkify-logo.png"
                                alt="Forkify-logo Logo"
                                width={180}
                                height={60}
                            />
                            <div className="navContent">
                                <FormOutlined style={{
                                    fontSize: 30,
                                    color: "#ed850e"
                                }} />{"ADD RECIPE"}
                            </div>
                            <div className="navContent">
                                <GoBookmark style={{
                                    fontSize: 30,
                                    color: "#ed850e"
                                }} />{"BOOK MARKS"}
                            </div>
                        </div>
                        {/* Card-image */}
                        <img
                            alt={myJoinStr}
                            src={`${myArr.join("")}`}

                            style={{
                                marginTop:15,
                                width: 735,
                                height: 450
                            }
                            }
                        />
                    </div>
                }
            >

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>

                    <div style={{
                        width: 500,
                        display: "flex",
                        justifyContent: "space-between"
                    }}>

                        {/* For Likes */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            fontSize: 21,
                            width: 160
                        }}>
                            <MdOutlineWatchLater style={{
                                fontSize: 30,
                                color: " #d95318"
                            }} />
                            {time}
                        </div>

                        {/* For Love */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            fontSize: 21,
                            width: 170,
                        }}>
                            <RiContactsFill style={{
                                fontSize: 30,
                                color: "#d95318 "
                            }}></RiContactsFill>
                            {love}
                            {serving}
                        </div>


                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: 80
                        }}>

                            {/* addHandler */}
                            <IoIosAddCircleOutline style={{
                                fontSize: 30
                            }} onClick={addServingHandler}></IoIosAddCircleOutline>

                            {/* minHandler */}
                            <FiMinusCircle style={{
                                fontSize: 28
                            }} onClick={minServingHandler}></FiMinusCircle>

                        </div>

                        {/* BookMark*/}
                        <div className="backGroundBookMark">
                            <PiBookmarkSimpleFill className="myBookMark" style={{
                                fontSize: 28,
                                color: "white",
                            }} onClick={setColor} />
                        </div>
                    </div>

                    <div className="detailsRecipe">
                        <h4>{recipe}</h4>

                        <div className="bothReciepe">

                            <div className="flexContainer">
                                <div><GiCheckMark />  {numMath}<span>. oz weight short fusilli or rotini pasta</span></div>
                                <div><GiCheckMark /> {numMath}<span>. cup shredded parmesan cheese</span></div>
                                <div><GiCheckMark /> {numMath} <span>. cup sour cream</span></div>
                                <div><GiCheckMark /> {numMath} <span>. tsp salt</span></div>
                                <div><GiCheckMark /> {numMath} <span>. head romaine lettuce sliced into 1-inch pieces</span></div>
                                <div><GiCheckMark /> {numMath}  <span>. cup black or kalamata olives halved</span></div>
                                <div><GiCheckMark /> {numMath}  <span>. tbsps pine nuts</span></div>
                            </div>

                            <div className="flexContainer">
                                <div><GiCheckMark /> {numMath} <span>.  cup prepared pesto</span></div>
                                <div><GiCheckMark /> {numMath} <span>.  cup mayonnaise</span></div>
                                <div><GiCheckMark /> {numMath}  <span>. cup milk more for thinning</span></div>
                                <div><GiCheckMark /> {numMath}  <span>. tsp pepper</span></div>
                                <div><GiCheckMark /> {numMath} <span>. cup grape tomatoes halved</span></div>
                                <div><GiCheckMark /> {numMath} <span>. oz weight mozzarella cheese cut into cubes</span></div>
                                <div><GiCheckMark /> {numMath}  <span>. extra parmesan for sprinkling</span></div>
                            </div>

                        </div>

                    </div>

                    <div className="footer">
                        <h1 >HOW TO COOK IT</h1>
                        <p>This recipe was carefully designed and tested by BBC Good Food. Please check out directions at their website.</p>
                        <Link href={"https://www.bbcgoodfoodme.com/"}><Button className="btn">DIRECTION</Button></Link>
                    </div>

                </div>
            </Card>

        </div>
    )
}