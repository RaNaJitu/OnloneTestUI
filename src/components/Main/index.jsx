import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>ONLINE TEST</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<section className={styles.main_container}>
				<div className={styles.removeItem}>
					<h1>my name is JItu</h1>
					Username: <input type="text"/><br/><br/>
					Email: <input type="email"/> <br/><br/>
					<button>START</button>
				</div>
			</section>
		</div>
	);
};

export default Main;