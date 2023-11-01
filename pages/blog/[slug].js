import { useRouter } from 'next/router'

function PostPage() {
    const router = useRouter()
    return (
        <div>
            <h1>My post: {router.query.slug}</h1>
        </div>
    )
}

export default PostPage