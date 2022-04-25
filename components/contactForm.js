import React from "react";
import styles from "../styles/ContactForm.module.css";
function ContactForm(props) {
	return (
		<div className={styles.outerDiv}>
			<div style={{ display: "flex", paddingBottom: "50px" }}>
				<div className={styles.heading}></div>
				<h1
					style={{
						fontWeight: "400",
						margin: "0px",
						// inlineSize: "500px",
						// overflowWrap: "break-word",
					}}
				>
					Get a Call Back for your Property Prices
				</h1>
			</div>
			<div className={styles.form}>
				<div className={styles.inputBox}>
					<input placeholder="Full Name" />
				</div>
				<div className={styles.inputBox}>
					<input placeholder="Phone" />
				</div>
				<div className={styles.inputBox}>
					<input placeholder="City" />
				</div>
				<div className={styles.inputBox}>
					<input placeholder="Plot Details" />
				</div>
				<div>
					<button className={styles.sendButton}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
