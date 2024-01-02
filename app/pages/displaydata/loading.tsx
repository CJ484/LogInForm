'use client';
import React from 'react';
import {MagnifyingGlass} from 'react-loader-spinner';
import style from '../../Styles/loading.module.scss';
function Loading() {
	return (
		<div className={style.loading}>
			<MagnifyingGlass
				visible={true}
				width={100}
				height={100}
				ariaLabel='magnifying-glass-loading'
				wrapperStyle={{}}
				wrapperClass='magnifying-glass-wrapper'
				glassColor='#c0efff'
				color='#e15b64'
			/>
		</div>
	);
}

export default Loading;
