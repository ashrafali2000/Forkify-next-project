import { useRouter } from "next/router"
export default function() {
    const router = useRouter();
    const {AllCards} = router.query;
    return (
        <div>
            <h1>All Cards data = {AllCards}</h1>
        </div>
    )
}