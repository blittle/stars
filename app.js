import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

import * as styles from './components/App.css';

function App({items}) {
	return (
		<div className={styles.app}>
			<Navigation/>
			<MainContent items={items}/>
		</div>
	)
}

let starList = [
	{
		name: 'Class O',
		description: 'Class O stars are very hot and extremely luminous, with most of their radiated output in the ultraviolet range. These are the rarest of all main-sequence stars. About 1 in 3,000,000 (0.00003%) of the main-sequence stars in the solar neighborhood are class O stars. Some of the most massive stars lie within this spectral class. Class O stars frequently have complicated surroundings which make measurement of their spectra difficult.',
		href: 'https://en.wikipedia.org/wiki/Stellar_classification'
	},
	{
		name: 'Class B',
		description: 'Class B stars are very luminous and blue. Their spectra have neutral helium, which are most prominent at the B2 subclass, and moderate hydrogen lines. As O and B stars are so energetic, they only live for a relatively short time. Thus, due to the low probability of kinematic interaction during their lifetime, they do not, and are unable to, stray far from the area in which they were formed, apart from runaway stars.',
		href: 'https://en.wikipedia.org/wiki/Stellar_classification'
	},
	{
		name: 'Class A',
		description: 'Class A stars are among the more common naked eye stars, and are white or bluish-white. They have strong hydrogen lines, at a maximum by A0, and also lines of ionized metals (Fe II, Mg II, Si II) at a maximum at A5. The presence of Ca II lines is notably strengthening by this point. About 1 in 160 (0.625%) of the main-sequence stars in the solar neighborhood are class A stars.',
		href: 'https://en.wikipedia.org/wiki/Stellar_classification'
	},
	{
		name: 'Class F',
		description: 'Class F stars have strengthening H and K lines of Ca II. Neutral metals (Fe I, Cr I) beginning to gain on ionized metal lines by late F. Their spectra are characterized by the weaker hydrogen lines and ionized metals. Their color is white. About 1 in 33 (3.03%) of the main-sequence stars in the solar neighborhood are class F stars.',
		href: 'https://en.wikipedia.org/wiki/Stellar_classification'
	},
	{
		name: 'Class G',
		description: 'Class G stars, including the Sun have prominent H and K lines of Ca II, which are most pronounced at G2. They have even weaker hydrogen lines than F, but along with the ionized metals, they have neutral metals. There is a prominent spike in the G band of CH molecules. Class G main-sequence stars make up about 7.5%, nearly one in thirteen, of the main-sequence stars in the solar neighborhood.',
		href: 'https://en.wikipedia.org/wiki/Stellar_classification'
	},
	{
		name: 'Class K',
		description: 'Class K stars are orangish stars that are slightly cooler than the Sun. They make up about 12%, nearly one in eight, of the main-sequence stars in the solar neighborhood. There are also giant K-type stars, which range from hypergiants like RW Cephei, to giants and supergiants, such as Arcturus, whereas orange dwarfs, like Alpha Centauri B, are main-sequence stars',
		href: 'https://en.wikipedia.org/wiki/Stellar_classification'
	},
	{
		name: 'Class M',
		description: 'Class M stars are by far the most common. About 76% of the main-sequence stars in the Solar neighborhood are class M stars. However, because main-sequence stars of spectral class M have such low luminosities, none are bright enough to be visible to see with the unaided eye unless under exceptional conditions. The brightest known M-class main-sequence star is M0V Lacaille 8760 at magnitude 6.6 (the limiting magnitude for typical naked-eye visibility under good conditions is typically quoted as 6.5) and it is extremely unlikely that any brighter examples will be found.',
		href: 'https://en.wikipedia.org/wiki/Stellar_classification'
	}
]

ReactDOM.render(
	<App items={starList}/>, document.getElementById('app')
)

