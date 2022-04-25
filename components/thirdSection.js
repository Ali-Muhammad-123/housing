import Reac from "react";
import styles from "../styles/thirdSection.module.css";
import image1 from "../images/10.png";
import image2 from "../images/20.png";
import image3 from "../images/30.png";
import image4 from "../images/40.png";
function ThirdSection(props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>
				<p
					style={{
						fontSize: "14px",
						fontWeight: "800",
						marginBottom: "0px",
						textAlign: "center",
						color: "#727272",
					}}
				>
					Our Process
				</p>
				<h2
					style={{
						color: "#4caba7",
						fontWeight: "800",
						marginBottom: "0px",
						marginTop: "2px",
						textAlign: "center",
					}}
				>
					How Does It Work?
				</h2>
				<p
					style={{
						fontSize: "14px",
						fontWeight: "800",
						marginBottom: "0px",
						textAlign: "center",
						marginTop: "2px",
						color: "#727272",
					}}
				>
					Today’s Safest platform for Home Shifting Services
				</p>
			</div>
			<div className={styles.sectionwrapper}>
				<div className={styles.iconsDiv}>
					<div className={styles.sampleCard}>
						<div className={styles.imgDiv}>
							<img src={image1.src} />
						</div>
						<div>
							<p
								style={{
									fontSize: "14px",
									fontWeight: "600",
									marginBottom: "0px",
									textAlign: "center",
									marginTop: "2px",
									color: "#727272",
								}}
							>
								We Collect data from 500+ Whatsapp Groups
							</p>
						</div>
					</div>
					<div className={styles.sampleCard}>
						<div className={styles.imgDiv}>
							<img src={image2.src} />
						</div>
						<div>
							<p
								style={{
									fontSize: "14px",
									fontWeight: "600",
									marginBottom: "0px",
									textAlign: "center",
									marginTop: "2px",
									color: "#727272",
								}}
							>
								Our team of research keep a close eye on market
							</p>
						</div>
					</div>
					<div className={styles.sampleCard}>
						<div className={styles.imgDiv}>
							<img src={image3.src} />
						</div>
						<div className={styles.textDiv}>
							<p
								style={{
									fontSize: "14px",
									fontWeight: "600",
									marginBottom: "0px",
									textAlign: "center",
									marginTop: "2px",
									color: "#727272",
								}}
							>
								Prices are Live and Change according to the Trends of Market
							</p>
						</div>
					</div>
					<div className={styles.sampleCard}>
						<div className={styles.imgDiv}>
							<img src={image4.src} />
						</div>
						<div>
							<p
								style={{
									fontSize: "14px",
									fontWeight: "600",
									marginBottom: "0px",
									textAlign: "center",
									marginTop: "2px",
									color: "#727272",
								}}
							>
								Price Range Differentiate between the locality of Property
							</p>
						</div>
					</div>
				</div>
				<div className={styles.videoDiv}></div>
			</div>
		</div>
	);
}

export default ThirdSection;
