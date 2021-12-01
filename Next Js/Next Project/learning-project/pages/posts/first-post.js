import Link from 'next/link'
import Image from  'next/image'
import Head from 'next/head'
import Layout from '../components/layout'

function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>First Page</title>
        </Head>
        <div>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home!</a>
                </Link>
                
            </h2>
            <img src="/images/img.jfif" alt="img"/>
            {/* <img src="/images/radix.jpg" alt="img"/> */}
            <Image
                src="/images/radix.jpg"
                height={250}
                width={300}
                // layout="fill"
                alt="Radix web"
            ></Image>
        </div>
        </Layout>
    )
}

export default FirstPost

