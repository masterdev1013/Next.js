import Head from 'next/head';
import Link from 'next/link';
export default function AboutPage() {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="You really need to read"/>
            </Head>
            <h1>About Page</h1>
            <Link href={{pathname:'/blog/[slug]' , query:{slug:'123'}}}>Blog</Link>
        </div>
    )
}; 