import React from 'react';
import Card from './Card';

import styles from './MainContent.css';

export default function MainContent({items}) {
	return (
		<div className={styles.mainContent}>
			{getCards(items)}
		</div>
	)
}

function getCards(items) {
	return items.map((item) => (
		<Card key={item.name} title={item.name} linkText='Learn more' linkHref={item.href}>
			{item.description}
		</Card>
	));
}
