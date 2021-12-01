import styles from '../../styles/components/layout.module.css'
import Head from 'next/head'

function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
            
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
            {children}
        </div>
    )   
}

export default Layout
