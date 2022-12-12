import { useEffect } from 'react';
import LineAnimation from './components/LineAnimation';
import './App.css';

const App = () => {
	useEffect(() => {
		LineAnimation({ id: 'line1' });
	}, []);

	return (
		<div>
			<div className="itm-line" id="line1">
				<svg className="itm-line-svg" viewBox="0 0 1568 10866" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						className="itm-line-path"
						d=""
						stroke="url(#paint0_linear_111_702)"
						strokeWidth="4"
						strokeDasharray="12"
					/>
					<path className="itm-line-path-active" d="" stroke="#28A1F9" strokeWidth="4" />
					<defs>
						<linearGradient
							id="paint0_linear_111_702"
							x1="1.69348e+08"
							y1="201.537"
							x2="1.69348e+08"
							y2="605.27"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#28A1F9" stopOpacity="0.9" />
							<stop offset="0.8125" stopColor="#28A1F9" stopOpacity="0.67" />
							<stop offset="1" stopColor="#28A1F9" stopOpacity="0.42" />
						</linearGradient>
					</defs>
				</svg>

				<div className="itm-line-container item-1">
					<div className="itm-line-ball" data-position="left">
						2021
					</div>
				</div>
				<div className="itm-line-container item-2">
					<div className="itm-line-ball" data-position="top" style={{ marginLeft: 100 }}>
						2020
					</div>
				</div>
				<div className="itm-line-container item-3">
					<div className="itm-line-ball" data-position="top">
						2019
					</div>
				</div>
				<div className="itm-line-container item-6">
					<div className="itm-line-ball" data-position="right">
						2018
					</div>
				</div>
				<div className="itm-line-container item-7">
					<div className="itm-line-ball" data-position="bottom">
						2017
					</div>
				</div>
				<div className="itm-line-container item-4"></div>
			</div>
		</div>
	);
};

export default App;
