'use client';
import React, {useEffect, useState} from 'react';
import styles from '../../Styles/page.module.scss';
const CursorEffect = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [clientX, setClientX] = useState(0);
	const [clientY, setClientY] = useState(0);

	useEffect(() => {
		document.addEventListener('mousemove', (e: MouseEvent) => {
			setClientX(e.clientX);
			setClientY(e.clientY);
		});
	});

	useEffect(() => {
		setX(clientX);
		setY(clientY);
		const interval = setInterval(() => {
			setX(prev => prev + (clientX * 2));
			setY(prev => prev + (clientY * 2));
		}, 10);
		clearInterval(interval);
	}, [clientX, clientY]);

	return (
		<div id='interactive' className={styles.interactive} style={{left: `${x}px`, top: `${y}px`}}>
		</div>

	);
};

export default CursorEffect;
