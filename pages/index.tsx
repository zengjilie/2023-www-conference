import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from '../comps/Footer';
import NavBar from '../comps/NavBar';
import OrganizerCard from '../comps/OrganizerCard';
import type { OrganizerType } from '../global/types';

const Home: NextPage = () => {

	const numOfSpeakers: number[] = [1, 1, 1];

	return (
		<>
			<NavBar />
			<Head>
				<title>International World Wide Web Conference 2023</title>
				<meta name="description" content="World Wide Web Conference 2023, Austin TX" />
				{/* <meta name='keywords' content='' /> */}
				<meta name='author' content='The University of Texas at Austin, School of Information' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.bgImg}>
				<div className={styles.bgColor}>
					<div className={styles.homeInfo}>
						<h1 className={styles.homeTitle}>Welcome to The Web Conference 2023 in Austin, Texas, USA</h1>
						<p className={styles.homeDate}>May 1-5, 2023</p>
						<a className={styles.homeBtn}>More Info Soon</a>
					</div>
				</div>
			</div>

			{/* <div className={styles.winnerBtn}>
				<a className={styles.winnerText}>winners</a>
			</div> */}

			{/* <div className={styles.keynoteImg}>
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
			</div> */}

			<div className={styles.organizer}>
				<h1 className={styles.t1}> Committees </h1>

				<p className={styles.t2}> General Chairs</p>
				<div className={styles.orgSection}>
					<OrganizerCard image="/images/committee/ying-UT.jpeg" person="Ying Ding" affiliation="UT Austin" socialLink="https://yingding.ischool.utexas.edu/" />
					<OrganizerCard image="/images/committee/JieTang.jpeg" person="Jie Tang" affiliation="Tsinghua University" socialLink="https://keg.cs.tsinghua.edu.cn/jietang/" />
					<OrganizerCard image="/images/committee/JuanSequeda.webp" person="Juan Sequeda" affiliation="data.world" socialLink="https://juansequeda.com/" />
				</div>

				<p className={styles.t2}>Program Committee Co-Chairs</p>
				<div className={styles.orgSection}>
					<OrganizerCard image="/images/committee/LoraAroyo.webp" person="Lora Aroyo" affiliation="Google" socialLink="https://lora-aroyo.org/" />
					<OrganizerCard image="/images/committee/CarlosCastillo.webp" person="Carlos Castillo" affiliation="ICREA" socialLink="http://chato.cl/research/vitae" />
				</div>

				<p className={styles.t2}>Sponsor Chairs</p>
				<div className={styles.orgSection}>
					<OrganizerCard image="/images/committee/ChenHuajun.jpeg" person="Chen Huajun" affiliation="Zhejiang University" socialLink="https://person.zju.edu.cn/en/huajun" />
					<OrganizerCard image="/images/committee/EdgarMeij.jpeg" person="Edgar Meij" affiliation="Bloomberg" socialLink="https://edgar.meij.pro/" />
					<OrganizerCard image="/images/committee/JoshuaShinavier.jpeg" person="Josh Shinavier" affiliation="Linkedin" socialLink="https://www.knowledgegraph.tech/speakers/joshua-shinavier/" />
				</div>

				<p className={styles.t2}>Organized by</p>
				<div className={styles.orgSection} style={{ flexDirection: 'column' }}>
					<img src="/ischool.png" alt="" width="300px" style={{ margin: 20 }} />
					<img src="/dataWorld.webp" alt="" width="200px" style={{ margin: 20 }} />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home
