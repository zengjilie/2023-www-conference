import styles from './Footer.module.scss';

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <p className={styles.footerTitle}>The Web Conference @ Austin</p>
        <div className={styles.footerSocial}>
          <a href="" className={styles.footerSocialLink}></a>
          <a href="" className={styles.footerSocialLink}></a>
          <a href="" className={styles.footerSocialLink}></a>
          <a href="" className={styles.footerSocialLink}></a>
          <a href="" className={styles.footerSocialLink}></a>
          <a href="" className={styles.footerSocialLink}></a>
        </div>
      </div>

      <p className={styles.footerText}>The Web Conference 2023 is organized by the School of Information at The University of Texas at Austin</p>
    </>
  )
}

export default Footer;