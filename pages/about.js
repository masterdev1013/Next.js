import Link from 'next/link';
export default function AboutPage() {
    return (
        <div>
            <h1>About Page</h1>
            <Link href={{pathname:'/blog/[slug]' , query:{slug:'123'}}}>Blog</Link>
        </div>
    )
}; 