import './LineAnimation.scss';

const LineAnimation = props => {
	const { id } = props;

	const getBallHTML = (lineItemRect, containerItems, ball, activePoint) => {
		let html = '';
		const fillWidth = ball.width - ball.borderWidth * 4;

		containerItems.forEach((containerItem, containerIndex) => {
			const containerItemRect = containerItem.getBoundingClientRect();

			let ballItems = containerItem.getElementsByClassName('itm-line-ball');
			ballItems = Object.values(ballItems);

			ballItems.forEach(ballItem => {
				const ballItemRect = ballItem.getBoundingClientRect();
				const dataPosition = ballItem.dataset.position || 'left';
				const realIndex = dataPosition === 'top' ? containerIndex - 1 : containerIndex;

				let x =
					dataPosition === 'left'
						? ball.borderWidth / 2
						: dataPosition === 'right'
						? containerItemRect.right - lineItemRect.left - ball.width - ball.borderWidth
						: dataPosition === 'top' || dataPosition === 'bottom'
						? ballItemRect.left - lineItemRect.left
						: 0;

				let y =
					dataPosition === 'left' || dataPosition === 'right'
						? ballItemRect.bottom - ballItemRect.height / 2 - ball.width / 2 - lineItemRect.top + ball.borderWidth * 2
						: dataPosition === 'top'
						? containerItemRect.top - lineItemRect.top - ball.width / 2
						: dataPosition === 'bottom'
						? containerItemRect.bottom - lineItemRect.top - ball.width / 2
						: 0;

				let isActive = false;

				if (dataPosition === 'left' || dataPosition === 'right') {
					isActive = activePoint.y >= y - ball.borderWidth / 2;
				} else {
					const ballY = parseInt((y + ball.width / 2).toFixed(0));
					const activeY = parseInt(activePoint.y.toFixed(0));

					if (ballY < activeY) isActive = true;
					else if (activeY === ballY) {
						if (realIndex % 2 === 0) isActive = activePoint.x >= x - ball.borderWidth / 2;
						else isActive = activePoint.x <= x + ball.width + ball.borderWidth / 2;
					}
				}

				if (isActive) {
					html += `<rect x="${x}" y="${y}" width="${ball.width}" height="${ball.width}" rx="${ball.width / 2}"`;
					html += ` fill="white" stroke="${ball.activeBorderColor}" stroke-width="${ball.borderWidth}"/>`;

					html += `<rect x="${x + ball.borderWidth * 2}" y="${y + ball.borderWidth * 2}"`;
					html += ` width="${fillWidth}" height="${fillWidth}"`;
					html += ` rx="${fillWidth / 2}" fill="${ball.activeFillColor}"/>`;
				} else {
					html += `<rect x="${x}" y="${y}" width="${ball.width}" height="${ball.width}"`;
					html += ` rx="${ball.width / 2}" fill="${ball.fillColor}" `;
					html += `stroke="${ball.borderColor}" stroke-width="${ball.borderWidth}"/>`;
				}
			});
		});

		html += `<rect x="${activePoint.x - ball.width / 2}" y="${activePoint.y - ball.width / 2}" `;
		html += `width="${ball.width}" height="${ball.width}" rx="${ball.width / 2}"`;
		html += ` fill="white" stroke="${ball.activeBorderColor}" stroke-width="${ball.borderWidth}"/>`;

		html += `<rect x="${activePoint.x - ball.width / 2 + ball.borderWidth * 2}" `;
		html += `y="${activePoint.y - ball.width / 2 + ball.borderWidth * 2}"`;
		html += ` width="${fillWidth}" height="${fillWidth}"`;
		html += ` rx="${fillWidth / 2}" fill="${ball.activeFillColor}"/>`;

		console.log(activePoint.y);

		return html;
	};

	const getPathData = (lineItemRect, containerItems, pathWidth, ball) => {
		let d = '';
		let oldY = 0;
		const radius = parseFloat(5);
		pathWidth /= 2;

		containerItems.forEach((containerItem, index) => {
			const containerItemRect = containerItem.getBoundingClientRect();

			if (index === 0) d += `M ${pathWidth + ball.width / 2} ${ball.width / 2 + ball.borderWidth / 2}`;

			if (containerItems.length > 0) {
				if (index === containerItems.length - 1) {
					d += ` V ${oldY + 140 - ball.width / 2 - ball.borderWidth / 2}`;
				} else {
					const right = containerItemRect.right - lineItemRect.left - ball.width / 2;
					const left = containerItemRect.left - lineItemRect.left + ball.width / 2;

					const nextItem = containerItems[index + 1];
					const nextItemRect = nextItem.getBoundingClientRect();
					const nextItemRight = nextItemRect.right - lineItemRect.left - ball.width / 2;
					const nextItemLeft = nextItemRect.left - lineItemRect.left + ball.width / 2;

					const c1 = index % 2 === 0 ? left + pathWidth : right - pathWidth;
					const c2 = index % 2 === 0 ? left + pathWidth + radius : right - pathWidth - radius;
					const c3 = index % 2 === 0 ? left + pathWidth + radius * 2 : right - pathWidth - radius * 2;

					let c4 = index % 2 === 0 ? nextItemRight - pathWidth - radius * 2 : nextItemLeft + pathWidth + radius * 2;
					let c5 = index % 2 === 0 ? nextItemRight - pathWidth - radius : nextItemLeft + pathWidth + radius;
					let c6 = index % 2 === 0 ? nextItemRight - pathWidth : nextItemLeft + pathWidth;

					oldY = oldY + containerItem.offsetHeight;

					if (index === containerItems.length - 2) {
						c4 = lineItemRect.width / 2;
						c5 = index % 2 === 0 ? (lineItemRect.width - 2) / 2 + radius : (lineItemRect.width - 2) / 2 - radius;
						c6 =
							index % 2 === 0 ? (lineItemRect.width - 2) / 2 + radius * 2 : (lineItemRect.width - 2) / 2 - radius * 2;
					}

					const h1 = oldY - radius * 2;
					const h2 = oldY - radius;
					const h3 = oldY + radius;
					const h4 = oldY + radius * 2;

					// Draw path
					d += ` V`;
					d += ` ${h1}`;
					d += ` C ${c1} ${h2} ${c2} ${oldY} ${c3} ${oldY} H ${c4} ${c4}`;
					d += ` C ${c5} ${oldY} ${c6} ${h3} ${c6} ${h4}`;
				}
			}
		});

		return d;
	};

	const getPathActiveOffsetLength = pathActive => {
		const totalLength = pathActive.getTotalLength();
		const center = window.innerHeight / 2;
		const boundaries = pathActive.getBoundingClientRect();
		const { top, height } = boundaries;
		const percentage = (center - top) / height;
		const drawLength = percentage > 0 ? totalLength * percentage : 0;
		const offset = drawLength < totalLength ? totalLength - drawLength : 0;

		return offset;
	};

	const clearBallHTML = svg => {
		let rects = svg.getElementsByTagName('rect');
		rects = Object.values(rects);

		rects.forEach(rect => rect.remove());
	};

	const init = () => {
		const lineItem = document.getElementById(id);

		let containerItems = lineItem.getElementsByClassName('itm-line-container');
		containerItems = Object.values(containerItems);

		const lineItemRect = lineItem.getBoundingClientRect();
		const svg = lineItem.getElementsByClassName('itm-line-svg')[0];

		const path = lineItem.getElementsByClassName('itm-line-path')[0];
		const pathWidth = path.getAttribute('stroke-width');

		const pathActive = lineItem.getElementsByClassName('itm-line-path-active')[0];
		const pathActiveWidth = parseFloat(pathActive.getAttribute('stroke-width'));
		const pathMaxWidth = pathWidth > pathActiveWidth ? pathWidth : pathActiveWidth;

		const ball = {
			width: 37,
			borderWidth: 3,

			fillColor: 'white',
			activeFillColor: '#1EA0FF',

			borderColor: '#1EA0FF',
			activeBorderColor: '#1EA0FF'
		};

		const dPath = getPathData(lineItemRect, containerItems, pathMaxWidth, ball);
		const dPathActive = getPathData(lineItemRect, containerItems, pathMaxWidth, ball);
		const activeTotalLength = pathActive.getTotalLength();
		const activeOffsetLength = getPathActiveOffsetLength(pathActive);

		svg.setAttribute('viewBox', `0 0 ${lineItemRect.width} ${lineItemRect.height}`);
		path.setAttribute('d', dPath);
		pathActive.setAttribute('d', dPathActive);
		pathActive.setAttribute('stroke-dashoffset', activeOffsetLength);
		pathActive.setAttribute('stroke-dasharray', activeTotalLength);

		clearBallHTML(svg);

		const activePoint = pathActive.getPointAtLength(activeTotalLength - activeOffsetLength);
		const BallHTML = getBallHTML(lineItemRect, containerItems, ball, activePoint);
		svg.innerHTML += BallHTML;
	};

	init();
	window.addEventListener('resize', init);
	window.addEventListener('scroll', init);
};

export default LineAnimation;
