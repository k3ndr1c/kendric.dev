import Date from '../../components/Date'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../services/posts'

import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <link rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/styles/hybrid.min.css"/>
        <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/highlight.min.js"></script>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.dateTextMd}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={utilStyles.backToHome}>
          <Link href="/blog">
            <a>← back to blog</a>
          </Link>
      </div>
    </Layout>
  )

}


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
