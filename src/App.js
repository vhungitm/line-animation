import { useEffect } from 'react';
import './App.css';
import LineAnimation from './components/LineAnimation';

const App = () => {
	useEffect(() => {
		LineAnimation({
			id: 'line1',
			speed: 5,
			ballPositions: ['left', 'top', 'left', 'bottom', 'left', 'top'],
			responsive: [
				{ minWidth: 500, speed: 8, ballPositions: ['left', 'top', 'bottom'] },
				{ minWidth: 700, speed: 1.5 },
				{ minWidth: 600, speed: 1.5 }
			]
		});
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
					<div className="itm-line-ball">2021</div>
				</div>
				<div className="itm-line-container item-2">
					<div className="itm-line-ball" style={{ marginLeft: 100 }}>
						2020
					</div>
				</div>
				<div className="itm-line-container item-3">
					<div className="itm-line-ball">2019</div>
				</div>
				<div className="itm-line-container item-6">
					<div className="itm-line-ball">2018</div>
				</div>
				<div className="itm-line-container item-7">
					<div className="itm-line-ball">2017</div>
				</div>
				<div className="itm-line-container item-4">
					<div className="itm-line-ball">2016</div>
				</div>
			</div>
		</div>
	);
};

export default App;
