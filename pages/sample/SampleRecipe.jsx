export default function SampleRecipe({img}) {
    // const mySampleImg = img;
    console.log(img);
    return (
        <div>
             <Card
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
          boxShadow:" 2px 5px 16px 3px #999"
        }}
        cover={
         <img
            alt="example"
            src={img}
            style={{
              width: 280,
              height: 250
            }
            }
          />
        }
      ></Card>
        </div>
    )
}