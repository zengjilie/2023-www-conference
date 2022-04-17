import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from '../comps/Footer';
import NavBar from '../comps/NavBar';

const Home: NextPage = () => {

	const numOfSpeakers: number[] = [1, 1, 1];

	return (
		<>
			<NavBar />
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

			<div className={styles.keynoteImg}>
				<div className={styles.keynoteBgColor}>

					<p className={styles.keynoteTitle}>Keynotes</p>

					<a className={styles.keynoteSpeakers}>
						{numOfSpeakers.map((x, index) => {
							return (
								<div className={styles.keynoteSpeaker} key={index}>
									<div className={styles.keynoteImg}></div>
									<p className={styles.keynoteName}>Speaker Name</p>
								</div>
							)
						})}
					</a >

					<div className={styles.keynoteOthers}>

						<a className={styles.keynoteOther}>
							<div className={styles.otherTitle}>
								<span>Schedule</span>
							</div>
							<div className={styles.otherImgWrapper}>
								<div className={styles.otherImg}>
									<div className={styles.otherBgColor}></div>
								</div>
							</div>
						</a>

						<a className={styles.keynoteOther}>
							<div className={styles.otherTitle}>
								<span>About the City</span>
							</div>
							<div className={styles.otherImgWrapper}>
								<div className={styles.otherImg2}>
									<div className={styles.otherBgColor}></div>
								</div>
							</div>
						</a >
					</div>
				</div>
			</div>

			<div className={styles.sponsors}>
				<p className={styles.sponsorTitle}>Sponsors</p>

				<p className={styles.sponsorRank}>Dimond</p>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
				</div>

				<p className={styles.sponsorRank}>Glod</p>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
				</div>

				<p className={styles.sponsorRank}>Silver</p>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
				</div>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
				</div>

				<p className={styles.sponsorRank}>Bronze</p>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
				</div>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
				</div>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
				</div>

				<p className={styles.sponsorRank}>Other</p>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
				</div>

				<div className={styles.sponsorWrapper}>
					<div className={styles.sponsorCard}></div>
					<div className={styles.sponsorCard}></div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Home
