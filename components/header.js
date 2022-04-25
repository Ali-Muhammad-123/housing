import styles from "../styles/Header.module.css";
import logo from "../images/logo-white.png";
import ContactForm from "./contactForm";
function Header(props) {
	console.log(logo);
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.topSection}>
				<img src={logo.src} className={styles.logo} />
				<div className={styles.leftDiv}>
					<a className={styles.headerButton}>List Property</a>
					<a className={styles.freeButton}>Free</a>
					<a className={styles.headerButton}>📰News</a>
				</div>
			</div>
			<div className={styles.remainingHeader}>
				<div className={styles.div1}>
					<div className={styles.internalDiv1}></div>
					<div className={styles.internalDiv2}>
						<h1 style={{ fontSize: "78px", marginBottom: "0px" }}>
							Latest Prices
						</h1>
						<p>
							Bahria Town Karachi only online service with live update of prices
						</p>
					</div>
				</div>
				<div className={styles.div2}>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}

export default Header;
