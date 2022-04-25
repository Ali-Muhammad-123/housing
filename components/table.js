import React, { useEffect, useState } from "react";
import styles from "../styles/Table.module.css";
import SearchIcon from "@mui/icons-material/Search";
import upArrow from "../images/Up0.png";
import downArrow from "../images/Down0.png";
function Table(props) {
	var frequency = 3;
	var amountPercentage = 1;
	const [data, setData] = useState(props.data);
	const [style, setStyle] = useState(0);
	const [numberOfItems, setNumberOfItems] = useState(10);
	var copyOfData = props.data;
	var internationalNumberFormat = new Intl.NumberFormat("en-US");

	useEffect(() => {
		setStyle(0);
		setTimeout(() => setStyle(1), 1000);

		var newArr = data.map((el) => el);
		const timer = setInterval(() => {
			for (let index = 0; index < amountPercentage; index++) {
				var randomNumber = Math.floor(Math.random() * data.length);
				console.log(
					(copyOfData[randomNumber].hp *
						(Math.random() * copyOfData[randomNumber].deltahp)) /
						100
				);
				newArr[randomNumber] = {
					...newArr[randomNumber],
					lp:
						Math.random() > 0.5
							? Math.random() > 0.5
								? copyOfData[randomNumber].lp +
								  (copyOfData[randomNumber].lp *
										(Math.random() * copyOfData[randomNumber].deltalp)) /
										100
								: copyOfData[randomNumber].lp -
								  (copyOfData[randomNumber].lp *
										(Math.random() * copyOfData[randomNumber].deltalp)) /
										100
							: copyOfData[randomNumber].lp,
					hp:
						Math.random() > 0.5
							? Math.random() > 0.5
								? copyOfData[randomNumber].hp +
								  (copyOfData[randomNumber].hp *
										(Math.random() * copyOfData[randomNumber].deltahp)) /
										100
								: copyOfData[randomNumber].hp -
								  (copyOfData[randomNumber].hp *
										(Math.random() * copyOfData[randomNumber].deltahp)) /
										100
							: copyOfData[randomNumber].hp,
				};
				setData(newArr);
			}
		}, frequency * 1000);

		return () => {
			clearInterval(timer);
		};
	}, [data]);

	useEffect(() => {
		// setNumberOfItems(10)
	}, [numberOfItems]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div style={{ padding: "0px 10px" }}>
					<h2
						style={{ color: "#4caba7", fontWeight: "800", marginBottom: "0px" }}
					>
						LIVE PRICES
					</h2>
					<p style={{ marginTop: "2px" }}>
						Select Your Society and Know Current Market Prices
					</p>
					<div className={styles.selectBoxes}>
						<div className={styles.box}>
							<p>Select Society :</p>
							<select
								className={styles.selectBox}
								style={{ height: "26px", margin: "auto 2px" }}
							>
								<option value="" disabled selected>
									Choose...
								</option>

								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div className={styles.box}>
							<p>Select Precincts :</p>
							<select
								className={styles.selectBox}
								style={{ height: "26px", margin: "auto 2px" }}
							>
								<option value="" disabled selected>
									Choose...
								</option>

								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div className={styles.searchBox}>
							<input placeholder="Search" className={styles.search} />
							<SearchIcon />
						</div>
					</div>
				</div>
				<div className={styles.tableWrapper}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th className={styles.left}>Name</th>
								<th className={styles.mid}>Lower Price</th>
								<th className={styles.mid}>Higher Price</th>
								<th className={styles.right}>Trend</th>
							</tr>
						</thead>
						<tbody>
							{data.map((el, i) => (
								<tr>
									<td className={styles.left}>{el.name}</td>
									<td
										className={styles.mid}
										style={{
											backgroundColor:
												parseFloat(copyOfData[i].lp) > el.lp
													? "#eddeea"
													: parseFloat(copyOfData[i].lp) < el.lp
													? "#edf4f3"
													: "#fff",
											opacity:
												parseFloat(copyOfData[i].lp) > el.lp
													? style.toString()
													: parseFloat(copyOfData[i].lp) < el.lp
													? style.toString()
													: "1",
											transition: "opacity 4s",
										}}
									>
										PKR {internationalNumberFormat.format(Math.ceil(el.lp))}
									</td>
									<td
										className={styles.mid}
										style={{
											backgroundColor:
												parseFloat(copyOfData[i].hp) > el.hp
													? "#eddeea"
													: parseFloat(copyOfData[i].hp) < el.hp
													? "#edf4f3"
													: "#fff",
											opacity:
												parseFloat(copyOfData[i].hp) > el.hp
													? style.toString()
													: parseFloat(copyOfData[i].hp) < el.hp
													? style.toString()
													: "1",
											transition: "opacity 4s",
										}}
									>
										PKR {internationalNumberFormat.format(Math.ceil(el.hp))}
									</td>
									<td className={styles.right}>
										{el.trend === "up" ? (
											<img style={{ width: "35px" }} src={upArrow.src} />
										) : (
											<img style={{ width: "35px" }} src={downArrow.src} />
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{/* <div className={styles.tableBottom}>
					<div>
						<p style={{ fontSize: "12px", color: "#727272" }}>
							Showing 1 - 10 out of 57 entries
						</p>
					</div>
					<div className={styles.middleBottom}>
						<p
							style={{
								fontSize: "12px",
								color: "#727272",
								paddingRight: "10px",
							}}
						>
							Show
						</p>
						<div className={styles.pagination}>
							<input
								defaultValue={"0"}
								className={styles.paginationNumber}
								type={"number"}
							/>
							<div className={styles.paginationButtons}>
								<button
									className={styles.paginationButton}
									style={{
										height: "12px",
										padding: "0px",
										overflow: "hidden",
										fontSize: "9px",
										borderLeft: "0px",
										borderBottom: "0px",
										borderStyle: "double",
										borderRadius: "0px 5px 0px 0px",
										borderColor: "#4caba7",
										backgroundColor: "#4caba7",
										width: "30px",
										color: "#fff",
									}}
								>
									&#9650;
								</button>
								<button
									className={styles.paginationButton}
									style={{
										height: "12px",
										padding: "0px",
										overflow: "hidden",
										fontSize: "9px",
										borderLeft: "0px",
										borderTop: "0px",
										borderStyle: "double",
										borderRadius: "0px 0px 5px 0px",
										borderColor: "#4caba7",
										backgroundColor: "#4caba7",
										width: "30px",
										color: "#fff",
									}}
								>
									&#9660;
								</button>
							</div>
						</div>
						<p
							style={{
								fontSize: "12px",
								color: "#727272",
								paddingLeft: "8px",
							}}
						>
							Enteries
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Table;
