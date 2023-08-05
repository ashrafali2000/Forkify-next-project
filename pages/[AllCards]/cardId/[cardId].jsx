import { useRouter } from "next/router";
export default function() {
    const router = useRouter();
    const {cardId} = router.query;
     console.log(cardId);
    return (
        <div>
            <img src={`${cardId}`}></img>
            {/* {h} */}
            <h1>not = {cardId}</h1>
        </div>
    )
}
