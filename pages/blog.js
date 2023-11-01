import { useRouter } from "next/router"

export default function BlogPage() {

    const router = useRouter();
    return (
        <div>
            <h1>Blog Page</h1>
            <button onClick={() => {router.push('/')}}>Home</button>
        </div>
    )
};