import type { NextPage } from 'next'
import { CSSProperties } from 'react';
import { useState } from 'react';
import Head from 'next/head'
import Header from '../comps/Header/Header';
import Footer from '../comps/Footer/Footer';
import CommitteeCard from '../comps/CommitteeCard/CommitteeCard';

const Home: NextPage = () => {

	const numOfSpeakers: number[] = [1, 1, 1];

	return (
		<div className='home'>
			<Header />

			<Head>
				<title>International World Wide Web Conference 2023</title>
				<meta name="description" content="World Wide Web Conference 2023, Austin TX" />
				{/* <meta name='keywords' content='' /> */}
				<meta name='author' content='The University of Texas at Austin, School of Information' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="bg-img">
				<div className="bg-color">
					<div className="home-info">
						<h1 className="home-title">Welcome to The Web Conference 2023 in Austin, Texas, USA</h1>
						<p className="home-date">May 1-5, 2023</p>
						<a href="./research-track.html" className="home-btn">Research Tracks Preliminary Call For Papers (CFP)</a>
					</div>
				</div>
			</div>

			<div className="committee">
				<h1 className="t1"> Committees </h1>

				<p className="t2"> General Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/ying-UT.jpeg" person="Ying Ding" affiliation="UT Austin" socialLink="https://yingding.ischool.utexas.edu/" />
					<CommitteeCard imageUrl="./images/committee/JieTang.jpeg" person="Jie Tang" affiliation="Tsinghua University" socialLink="https://keg.cs.tsinghua.edu.cn/jietang/" />
					<CommitteeCard imageUrl="./images/committee/JuanSequeda.webp" person="Juan Sequeda" affiliation="data.world" socialLink="https://juansequeda.com/" />
				</div>

				<p className="t2">Program Committee Co-Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/LoraAroyo.webp" person="Lora Aroyo" affiliation="Google" socialLink="https://lora-aroyo.org/" />
					<CommitteeCard imageUrl="./images/committee/CarlosCastillo.webp" person="Carlos Castillo" affiliation="ICREA" socialLink="http://chato.cl/research/vitae" />
					<CommitteeCard imageUrl="./images/committee/GeertJanHouben.jpeg" person="Geert-Jan Houben" affiliation="TU Delft" socialLink="https://www.wis.ewi.tudelft.nl/houben" />
				</div>

				<p className="t2">Tutorial Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/OlafHartig.jpeg" person="Olaf Hartig" affiliation="Linköping University" socialLink="http://olafhartig.de/" />
					<CommitteeCard imageUrl="./images/committee/ValeriaFionda.jpeg" person="Valeria Fionda" affiliation="University of Calabria" socialLink="https://www.mat.unical.it/fionda/" />
				</div>

				<p className="t2">Workshop Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/RiccardoTommasini.jpeg" person="Riccardo Tommasini" affiliation="University of INSA Lyon" socialLink="https://riccardotommasini.com/" />
					<CommitteeCard imageUrl="./images/committee/FemkeOngenae.png" person="Femke Ongenae" affiliation="Ghent University" socialLink="https://sites.google.com/view/femkeongenae/home?authuser=0" />
				</div>

				<p className="t2">Posters and Demos Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/LorenaEtcheverry.jpeg" person="Lorena Etcheverry" affiliation="Universidad de la República de Uruguay" socialLink="https://www.researchgate.net/profile/Lorena-Etcheverry" />
					<CommitteeCard imageUrl="./images/committee/MariaPovedaVillalon.jpeg" person="María Poveda Villalón" affiliation="Universidad Politécnica de Madrid" socialLink="https://thepetiteontologist.wordpress.com/about/" />
				</div>

				<p className="t2">PhD Symposium Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/Yizhou Sun.jpeg" person="Yizhou Sun" affiliation="UCLA" socialLink="http://web.cs.ucla.edu/~yzsun/" />
					<CommitteeCard imageUrl="./images/committee/Yuxiao Dong.jpeg" person="Yuxiao Dong" affiliation="Tsinghua University" socialLink="https://keg.cs.tsinghua.edu.cn/yuxiao/" />
					<CommitteeCard imageUrl="./images/committee/Mayank Kejriwal.jpeg" person="Mayank Kejriwal" affiliation="ISI/USC" socialLink="https://usc-isi-i2.github.io/kejriwal/" />
				</div>

				<p className="t2">Diversity, Equity, Inclusion Chairs </p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/Sarah Luger.jpeg" person="Sarah Luger" affiliation="Oriange Silicon Valley" socialLink="https://www.linkedin.com/in/sarahluger/" />
					<CommitteeCard imageUrl="./images/committee/Tiffany Deng.jpeg" person="Tiffany Deng" affiliation="Google" socialLink="https://www.linkedin.com/in/tiffanydeng/" />
				</div>

				<p className="t2">Industry Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/AnnaLisaGentile.jpeg" person="Anna Lisa Gentile" affiliation="IBM Research" socialLink="https://anligentile.github.io/" />
					<CommitteeCard imageUrl="./images/committee/PetraSelmer.webp" person="Petra Selmer" affiliation="Neo4j" socialLink="https://www.linkedin.com/in/petra-selmer-phd-61b291/?originalSubdomain=uk" />
				</div>

				<p className="t2">W3C and Developer</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/PierreAntoineChampin.jpeg" person="Pierre-Antoine Champin" affiliation="Université Claude Bernard Lyon 1" socialLink="https://perso.liris.cnrs.fr/pierre-antoine.champin/en/" />
					{/* <CommitteeCard imageUrl="./images/committee/default.jpeg" person="TBC" affiliation="TBC" socialLink="#" /> */}
				</div>


				<p className="t2">Special Track: Web4Good</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/Alex Jaimes.jpeg" person="Alex Jaimes" affiliation="Dataminr" socialLink="http://www.alexjaimes.com/" />
					{/* <CommitteeCard imageUrl="./images/committee/default.jpeg" person="TBC" affiliation="TBC" socialLink="#" /> */}
				</div>

				<p className="t2">Proceedings Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/Filip Ilievski.jpeg" person="Filip Ilievski" affiliation="ISI/USC" socialLink="https://usc-isi-i2.github.io/ilievski/" />
					<CommitteeCard imageUrl="./images/committee/Daniel Garijo.jpeg" person="Daniel Garijo" affiliation="UPM" socialLink="https://dgarijo.com/" />
					<CommitteeCard imageUrl="./images/committee/Lionel Medini.jpeg" person="Lionel Medini" affiliation="U Lyon 1" socialLink="https://perso.liris.cnrs.fr/lionel.medini/" />
				</div>

				<p className="t2">Sponsor Chairs</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/ChenHuajun.jpeg" person="Chen Huajun" affiliation="Zhejiang University" socialLink="https://person.zju.edu.cn/en/huajun" />
					<CommitteeCard imageUrl="./images/committee/EdgarMeij.jpeg" person="Edgar Meij" affiliation="Bloomberg" socialLink="https://edgar.meij.pro/" />
					<CommitteeCard imageUrl="./images/committee/JoshuaShinavier.jpeg" person="Josh Shinavier" affiliation="Linkedin" socialLink="https://www.knowledgegraph.tech/speakers/joshua-shinavier/" />
				</div>

				<p className="t2">Local Volunteers</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/Song Wang.jpeg" person="Song Wang" affiliation="UT Austin" socialLink="https://www.linkedin.com/in/song-wang-424369151/" />
					<CommitteeCard imageUrl="./images/committee/Cynthia Henry.jpeg" person="Cynthia Henry" affiliation="Texas Tech University" socialLink="https://guides.library.ttu.edu/chenry" />
				</div>

				<p className="t2">Global Volunteers</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/Mark Schueler.jpeg" person="Mark Schueler" affiliation="" socialLink="#" />
					<CommitteeCard imageUrl="./images/committee/Sebastien Forget.jpeg" person="Sebastien Forget" affiliation="" socialLink="https://www.researchgate.net/profile/Sebastien-Forget" />
				</div>

				<p className="t2">Communications</p>
				<div className="committee-section">
					<CommitteeCard imageUrl="./images/committee/Jilie Zeng.jpeg" person="Jilie Zeng" affiliation="UT Austin" socialLink="https://www.linkedin.com/in/zengjilie/" />
					<CommitteeCard imageUrl="./images/committee/Hady Wirawan LAUW.jpeg" person="Hady Wirawan LAUW" affiliation="Singapore Management University" socialLink="https://www.hadylauw.com/" />
				</div>

				<p className="t2">Organized by</p>
				<div className="committee-section" style={{ flexDirection: 'column', alignItems: 'center' }}>
					<img src="./ischool.png" alt="" width="300px" style={{ margin: 20 }} />
					<img src="./dataWorld.webp" alt="" width="200px" style={{ margin: 20 }} />
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Home
