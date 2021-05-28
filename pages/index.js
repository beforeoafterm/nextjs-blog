import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

function Home({ allPostsData, ipStuff }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! 👋🏼 I am <strong>N</strong>.</p>
        <p>I am a solutions architect and software engineer for Web 3.0 technologies.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://api.ipstack.com/check?access_key=07b3ab0aa729c0d40db1f22462d4ab2d')
  const ipStuff = await res.json()
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
      ipStuff
    },
  }
}

export default Home