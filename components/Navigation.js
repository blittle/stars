import React from 'react';
import styles from './Navigation.css';

export default function Navigation() {
	return (
		<nav className={styles.navigation}>
			<div className={styles.wrapper}>
				<a href="#" className={styles.logo}>Types of Stars</a>
				<ul className={styles.ul}>
					<li className={styles.li}><a className={styles.a} href="#">Link 1</a></li>
					<li className={styles.li}><a className={styles.a} href="#">Link 2</a></li>
					<li className={styles.li}><a className={styles.a} href="#">Link 3</a></li>
				</ul>
			</div>
		</nav>
	)
}
