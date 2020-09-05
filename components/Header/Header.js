import Typist from 'react-typist';
import Link from 'next/link'
import { withRouter } from 'next/router'

import styles from './Header.module.css'
import utilStyles from '../../styles/utils.module.css'


function Header({ router, showTypist }) {

  function getLinkClass(paths) {

    const hasPath = paths.includes(router.pathname);
    return (hasPath) ? `${styles.headerLink} ${styles.borderUnderline}` : `${styles.headerLink}`;
  }
  

  return (
    <header className={utilStyles.marginBottom3rem}>
      <div className={styles.headerLogo}>
        {(showTypist) ? (
          <>
            <Typist 
            cursor={{
              show: true, 
              blink: true,
              hideWhenDone: true,
              hideWhenDoneDelay: 1500 
            }}
            startDelay={1200}
            avgTypingDelay={100}
            className={utilStyles.unhighlightable}
          >
              <Link href="/">
                <a className={styles.logoLink}>
                  kendric.dev 
                </a>
              </Link>
            </Typist>
          </>
        ) : (
          <Link href="/">
            <a className={styles.logoLink}>
              kendric.dev 
            </a>
          </Link>
        )
        }
      </div>
      <div className={styles.headerLinkContainer}>
        <Link href="/blog">
          <a className={getLinkClass(['/blog', '/blog/[id]'])}>
            blog
          </a>
        </Link>
        <Link href="/projects">
          <a className={getLinkClass(['/projects','/projects/[id]'])}>
            projects
          </a>
        </Link>
        <Link href="/contact">
          <a className={getLinkClass(['/contact'])}>
            contact
          </a>
        </Link>
      </div>
    </header>
  )
}

export default withRouter(Header);