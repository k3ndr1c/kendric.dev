import styles from './ProjectDetail.module.css'
import MyCarousel from '../../components/MyCarousel'

export default function ProjectDetail({ name, images, description, srcUrl, siteUrl }) {

  return (
    <div className={styles.projectContainer}>
      <a href={siteUrl} className={styles.name}>{name}</a>
      <MyCarousel 
        images={images}
      />
      <h5 className={styles.desc}>{description}</h5>
      <div className={styles.linksContainer}>
        {(srcUrl) && <a className={styles.url} href={srcUrl}>code</a>}
      </div>
    </div>
  );
}