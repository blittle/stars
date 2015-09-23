import React from 'react';
import styles from './Card.css';

export default function Card({title, children, linkText, linkHref}) {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<span className={styles.title}>{title}</span>
				<p>{children}</p>
			</div>
			<div className={styles.actions}>
				<a href={linkHref} className={styles.link}>{linkText}</a>
			</div>
		</div>
	)
}
