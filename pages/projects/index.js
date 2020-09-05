import Head from 'next/head'
import Layout from '../../components/Layout'
import ProjectDetail from '../../components/ProjectDetail'
import { getProjectsData, getAllProjectIds } from '../../services/projects'

import utilStyles from '../../styles/utils.module.css'


export default function Project({ allProjectsData }) {

  return (
    <Layout>
      <Head>
        <title>projects</title>
      </Head>
      <ul className={utilStyles.list}>
        {allProjectsData.map(({ name, description, srcUrl, siteUrl, images }) => (
          <ProjectDetail 
            name={name}
            description={description}
            srcUrl={srcUrl}
            siteUrl={siteUrl}
            images={images}
          />
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjectsData = getProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}

