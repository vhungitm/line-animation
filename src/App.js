import { useEffect } from 'react';
import LineAnimation from './components/LineAnimation';
import './App.css';

const App = () => {
	useEffect(() => {
		LineAnimation();
	}, []);

	return (
		<div>
			<div className="itm-line">
				<svg className="itm-line-svg" viewBox="0 0 1568 10866" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						className="itm-line-path"
						d="M2 0V518.316C2 523.839 6.47715 528.316 12 528.316H1556C1561.52 528.316 1566 532.794 1566 538.316V1169C1566 1174.52 1561.52 1179 1556 1179H12C6.47713 1179 2 1183.48 2 1189V1860C2 1865.52 6.47715 1870 12 1870H1475C1480.52 1870 1485 1874.48 1485 1880V2551.5C1485 2557.02 1480.52 2561.5 1475 2561.5H12C6.47713 2561.5 2 2565.98 2 2571.5V3270.5C2 3276.02 6.47715 3280.5 12 3280.5H1556C1561.52 3280.5 1566 3284.98 1566 3290.5V4473C1566 4478.52 1561.52 4483 1556 4483H12C6.47713 4483 2 4487.48 2 4493V5276C2 5281.52 6.47715 5286 12 5286H1556C1561.52 5286 1566 5290.48 1566 5296V5793.5C1566 5799.02 1561.52 5803.5 1556 5803.5H12C6.47713 5803.5 2 5807.98 2 5813.5V6500.5C2 6506.02 6.47715 6510.5 12 6510.5H1556C1561.52 6510.5 1566 6514.98 1566 6520.5V7258C1566 7263.52 1561.52 7268 1556 7268H12C6.47713 7268 2 7272.48 2 7278V7990.5C2 7996.02 6.47715 8000.5 12 8000.5H1556C1561.52 8000.5 1566 8004.98 1566 8010.5V8927.5C1566 8933.02 1561.52 8937.5 1556 8937.5H12C6.47713 8937.5 2 8941.98 2 8947.5V9630.5C2 9636.02 6.47715 9640.5 12 9640.5H1556C1561.52 9640.5 1566 9644.98 1566 9650.5V10194.5C1566 10200 1561.52 10204.5 1556 10204.5H12C6.47713 10204.5 2 10209 2 10214.5V10703C2 10708.5 6.47715 10713 12 10713H785.5C791.023 10713 795.5 10717.5 795.5 10723V10865.5"
						stroke="url(#paint0_linear_111_702)"
						strokeWidth="4"
						strokeDasharray="12"
					/>
					<path
						className="itm-line-path-active"
						d="M2 0V518.316C2 523.839 6.47715 528.316 12 528.316H1556C1561.52 528.316 1566 532.794 1566 538.316V1169C1566 1174.52 1561.52 1179 1556 1179H12C6.47713 1179 2 1183.48 2 1189V1860C2 1865.52 6.47715 1870 12 1870H1475C1480.52 1870 1485 1874.48 1485 1880V2551.5C1485 2557.02 1480.52 2561.5 1475 2561.5H12C6.47713 2561.5 2 2565.98 2 2571.5V3270.5C2 3276.02 6.47715 3280.5 12 3280.5H1556C1561.52 3280.5 1566 3284.98 1566 3290.5V4473C1566 4478.52 1561.52 4483 1556 4483H12C6.47713 4483 2 4487.48 2 4493V5276C2 5281.52 6.47715 5286 12 5286H1556C1561.52 5286 1566 5290.48 1566 5296V5793.5C1566 5799.02 1561.52 5803.5 1556 5803.5H12C6.47713 5803.5 2 5807.98 2 5813.5V6500.5C2 6506.02 6.47715 6510.5 12 6510.5H1556C1561.52 6510.5 1566 6514.98 1566 6520.5V7258C1566 7263.52 1561.52 7268 1556 7268H12C6.47713 7268 2 7272.48 2 7278V7990.5C2 7996.02 6.47715 8000.5 12 8000.5H1556C1561.52 8000.5 1566 8004.98 1566 8010.5V8927.5C1566 8933.02 1561.52 8937.5 1556 8937.5H12C6.47713 8937.5 2 8941.98 2 8947.5V9630.5C2 9636.02 6.47715 9640.5 12 9640.5H1556C1561.52 9640.5 1566 9644.98 1566 9650.5V10194.5C1566 10200 1561.52 10204.5 1556 10204.5H12C6.47713 10204.5 2 10209 2 10214.5V10703C2 10708.5 6.47715 10713 12 10713H785.5C791.023 10713 795.5 10717.5 795.5 10723V10865.5"
						stroke="#28A1F9"
						strokeWidth="4"
					/>
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

				<div className="itm-line-item item-1"></div>
				<div className="itm-line-item item-2"></div>
				<div className="itm-line-item item-3"></div>
				<div className="itm-line-item item-6"></div>
				<div className="itm-line-item item-4"></div>
			</div>
			<div className="itm-line">
				<svg className="itm-line-svg" viewBox="0 0 1568 10866" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						className="itm-line-path"
						d="M2 0V518.316C2 523.839 6.47715 528.316 12 528.316H1556C1561.52 528.316 1566 532.794 1566 538.316V1169C1566 1174.52 1561.52 1179 1556 1179H12C6.47713 1179 2 1183.48 2 1189V1860C2 1865.52 6.47715 1870 12 1870H1475C1480.52 1870 1485 1874.48 1485 1880V2551.5C1485 2557.02 1480.52 2561.5 1475 2561.5H12C6.47713 2561.5 2 2565.98 2 2571.5V3270.5C2 3276.02 6.47715 3280.5 12 3280.5H1556C1561.52 3280.5 1566 3284.98 1566 3290.5V4473C1566 4478.52 1561.52 4483 1556 4483H12C6.47713 4483 2 4487.48 2 4493V5276C2 5281.52 6.47715 5286 12 5286H1556C1561.52 5286 1566 5290.48 1566 5296V5793.5C1566 5799.02 1561.52 5803.5 1556 5803.5H12C6.47713 5803.5 2 5807.98 2 5813.5V6500.5C2 6506.02 6.47715 6510.5 12 6510.5H1556C1561.52 6510.5 1566 6514.98 1566 6520.5V7258C1566 7263.52 1561.52 7268 1556 7268H12C6.47713 7268 2 7272.48 2 7278V7990.5C2 7996.02 6.47715 8000.5 12 8000.5H1556C1561.52 8000.5 1566 8004.98 1566 8010.5V8927.5C1566 8933.02 1561.52 8937.5 1556 8937.5H12C6.47713 8937.5 2 8941.98 2 8947.5V9630.5C2 9636.02 6.47715 9640.5 12 9640.5H1556C1561.52 9640.5 1566 9644.98 1566 9650.5V10194.5C1566 10200 1561.52 10204.5 1556 10204.5H12C6.47713 10204.5 2 10209 2 10214.5V10703C2 10708.5 6.47715 10713 12 10713H785.5C791.023 10713 795.5 10717.5 795.5 10723V10865.5"
						stroke="url(#paint0_linear_111_702)"
						strokeWidth="4"
						strokeDasharray="12"
					/>
					<path
						className="itm-line-path-active"
						d="M2 0V518.316C2 523.839 6.47715 528.316 12 528.316H1556C1561.52 528.316 1566 532.794 1566 538.316V1169C1566 1174.52 1561.52 1179 1556 1179H12C6.47713 1179 2 1183.48 2 1189V1860C2 1865.52 6.47715 1870 12 1870H1475C1480.52 1870 1485 1874.48 1485 1880V2551.5C1485 2557.02 1480.52 2561.5 1475 2561.5H12C6.47713 2561.5 2 2565.98 2 2571.5V3270.5C2 3276.02 6.47715 3280.5 12 3280.5H1556C1561.52 3280.5 1566 3284.98 1566 3290.5V4473C1566 4478.52 1561.52 4483 1556 4483H12C6.47713 4483 2 4487.48 2 4493V5276C2 5281.52 6.47715 5286 12 5286H1556C1561.52 5286 1566 5290.48 1566 5296V5793.5C1566 5799.02 1561.52 5803.5 1556 5803.5H12C6.47713 5803.5 2 5807.98 2 5813.5V6500.5C2 6506.02 6.47715 6510.5 12 6510.5H1556C1561.52 6510.5 1566 6514.98 1566 6520.5V7258C1566 7263.52 1561.52 7268 1556 7268H12C6.47713 7268 2 7272.48 2 7278V7990.5C2 7996.02 6.47715 8000.5 12 8000.5H1556C1561.52 8000.5 1566 8004.98 1566 8010.5V8927.5C1566 8933.02 1561.52 8937.5 1556 8937.5H12C6.47713 8937.5 2 8941.98 2 8947.5V9630.5C2 9636.02 6.47715 9640.5 12 9640.5H1556C1561.52 9640.5 1566 9644.98 1566 9650.5V10194.5C1566 10200 1561.52 10204.5 1556 10204.5H12C6.47713 10204.5 2 10209 2 10214.5V10703C2 10708.5 6.47715 10713 12 10713H785.5C791.023 10713 795.5 10717.5 795.5 10723V10865.5"
						stroke="#1e96ff"
						strokeWidth="10"
					/>
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

				<div className="itm-line-item item-7"></div>
				<div className="itm-line-item item-8"></div>
				<div className="itm-line-item item-9"></div>
				<div className="itm-line-item item-10"></div>
				<div className="itm-line-item item-11"></div>
			</div>
		</div>
	);
};

export default App;
