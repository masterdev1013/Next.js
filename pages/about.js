import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function About() {

    const {data , error} = useSWR("api/about" , fetcher);

    if(error) return <p>Error fetching data...</p>
    if(!data) return <p>Loading...</p>
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="You really need to read"/>
            </Head>
            
            <p>My name is {data.name}</p>
        </div>
    )
}; 