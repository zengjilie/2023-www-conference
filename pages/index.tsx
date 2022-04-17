import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>World Wide Web Conference 2023</title>
				<meta name="description" content="World Wide Web Conference 2023, Austin TX" />
				<meta name='keywords' content='' />
				<meta name='author' content='The University of Texas at Austin, School of Information' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.bgImg}>
				<div className={styles.bgColor}>
					<h1 className={styles.homeTitle}>Welcome to Austin</h1>
					<p className={styles.homeDate}>APRIL 20-24 2023</p>
					<a className={styles.homeBtn}>Registe<span>r</span></a>
				</div>
			</div>

			<div className={styles.winnerBtn}>
				<a className={styles.winnerText}>winners</a>
			</div>

			<div className={styles.keynote}>
			
			</div>
		</>
	)
}

export default Home
