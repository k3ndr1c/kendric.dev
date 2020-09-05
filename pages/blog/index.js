import Date from '../../components/Date'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getSortedPostsData } from '../../services/posts'

import utilStyles from '../../styles/utils.module.css'

export default function Blog({ allPostsData }) {

  return (
    <>
      <Layout>
        <Head>
          <title>blog</title>
        </Head>
        <section className={`${utilStyles.headingMd}`}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, description }) => (
              <article className={utilStyles.postItem} key={id}>
                <header>
                  <Link href="/blog/[id]" as={`/blog/${id}`}>
                    <a className={utilStyles.postTitle}>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.dateTextSm}>
                    <Date dateString={date} />
                  </small>
                </header>
                <p className={utilStyles.postDescription}>
                  {description}
                </p>
              </article>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
