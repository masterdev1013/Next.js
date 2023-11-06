// import { useRouter } from "next/router"
import Head from "next/head";

export default function Blog({name}) {

    // const router = useRouter();
    return (
        <div>
            <Head>
                <title>Blog</title>
                <meta name="description" content="You reall need to read"/>
            </Head>
            {/* <h1>Blog Page</h1>
            <button onClick={() => {router.push('/about')}}>About</button> */}

            <p>My name is {name}</p>
        </div>
    )
};


export async function getServerSideProps() {
  const data = await fetch("https://randomuser.me/api").then((res) =>
    res.json()
  );

  return {
    props: { name: data.results[0].name.first },
  };
}