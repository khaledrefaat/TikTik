import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return <>
        <Head>
            <meta name="description" content="TikTok Clone"/>
            <title>Home</title>
        </Head>
        <>
            <h1 className="text-3xl">Hello World!</h1>
        </>
    </>

}

export default Home
