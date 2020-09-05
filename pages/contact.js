import Head from 'next/head'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'


export default function Contact({ allPostsData }) {

  return (
    <>
      <Layout>
        <Head>
          <title>contact</title>
        </Head>
        <div>
          <ul className={`${utilStyles.contactList} `}>
            <li className={utilStyles.contactListItem}>
              <b>Resume:</b> <a href="https://drive.google.com/file/d/1-i3P-kSuL8yb3BbOjLrhgwBnEGEPeV3a/view?usp=sharing">Google Drive</a>
            </li>
            <li>
              <b>Email:</b> <a href="mailto:postrero.kendric@gmail.com">postrero.kendric@gmail.com</a>
            </li>
            <li>
              <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/kendric-postrero/">Kendric Postrero</a>
            </li>
            <li>
              <b>Github:</b> <a href="http://github.com/k3ndr1c">k3ndr1c</a>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  )
}