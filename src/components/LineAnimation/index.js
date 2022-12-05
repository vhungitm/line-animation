import './LineAnimation.scss';

const LineAnimation = () => {
	const getBallHTML = (lineItemRect, containerItems, ball) => {
		const top = lineItemRect.top;
		const center = window.innerHeight / 2;

		let html = '';

		containerItems.forEach((containerItem, index) => {
			const containerItemRect = containerItem.getBoundingClientRect();

			let ballItems = containerItem.getElementsByClassName('itm-line-ball');
			ballItems = Object.values(ballItems);

			ballItems.forEach(ballItem => {
				const ballItemRect = ballItem.getBoundingClientRect();
				const dataPosition = ballItem.dataset.position || 'left';

				const height =
					dataPosition === 'top' || dataPosition === 'bottom'
						? center - top - ball.width / 2
						: center - top + ball.borderWidth / 2;

				let x =
					dataPosition === 'left'
						? ball.borderWidth
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

				const fillWidth = ball.width - ball.borderWidth * 4;
				const isActive = height > y;

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

		return html;
	};

	const getPathData = (lineItemRect, containerItems, pathWidth, ballWidth, isActive) => {
		let d = '';
		let oldY = 0;
		const radius = parseFloat(5);
		pathWidth /= 2;

		containerItems.forEach((containerItem, index) => {
			const containerItemRect = containerItem.getBoundingClientRect();

			if (index === 0) d += `M ${pathWidth + ballWidth / 2} 0`;

			if (containerItems.length > 0) {
				oldY = oldY + containerItem.offsetHeight;
				const top = lineItemRect.top;
				const center = window.innerHeight / 2;
				const height = center - top;

				if (index === containerItems.length - 1) {
					if (isActive && oldY > height) return (d += `V ${height}`);
					else d += ` V ${oldY + 140}`;
				} else {
					const right = containerItemRect.right - lineItemRect.left - ballWidth / 2;
					const left = containerItemRect.left - lineItemRect.left + ballWidth / 2;

					const nextItem = containerItems[index + 1];
					const nextItemRect = nextItem.getBoundingClientRect();
					const nextItemRight = nextItemRect.right - lineItemRect.left - ballWidth / 2;
					const nextItemLeft = nextItemRect.left - lineItemRect.left + ballWidth / 2;

					const c1 = index % 2 === 0 ? left + pathWidth : right - pathWidth;
					const c2 = index % 2 === 0 ? left + pathWidth + radius : right - pathWidth - radius;
					const c3 = index % 2 === 0 ? left + pathWidth + radius * 2 : right - pathWidth - radius * 2;

					let c4 = index % 2 === 0 ? nextItemRight - pathWidth - radius * 2 : nextItemLeft + pathWidth + radius * 2;
					let c5 = index % 2 === 0 ? nextItemRight - pathWidth - radius : nextItemLeft + pathWidth + radius;
					let c6 = index % 2 === 0 ? nextItemRight - pathWidth : nextItemLeft + pathWidth;

					if (index === containerItems.length - 2) {
						c4 = lineItemRect.width / 2;
						c5 = index % 2 === 0 ? (lineItemRect.width - 2) / 2 + radius : (lineItemRect.width - 2) / 2 - radius;
						c6 =
							index % 2 === 0 ? (lineItemRect.width - 2) / 2 + radius * 2 : (lineItemRect.width - 2) / 2 - radius * 2;
					}

					// Draw path
					d += `V `;

					if (isActive && oldY > height) return (d += height);
					else d += `${oldY - radius * 2}`;

					d += ` C ${c1} ${oldY - radius} ${c2} ${oldY} ${c3} ${oldY} H ${c4}`;
					d += ` C ${c5} ${oldY} ${c6} ${oldY + radius} ${c6} ${oldY + radius * 2}`;
				}
			}
		});

		return d;
	};

	const clearBallHTML = svg => {
		let rects = svg.getElementsByTagName('rect');
		rects = Object.values(rects);

		rects.forEach(rect => rect.remove());
	};

	const initChild = lineItem => {
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

		const dPath = getPathData(lineItemRect, containerItems, pathMaxWidth, ball.width);
		const dPathActive = getPathData(lineItemRect, containerItems, pathMaxWidth, ball.width, true);

		svg.setAttribute('viewBox', `0 0 ${lineItemRect.width} ${lineItemRect.height}`);
		path.setAttribute('d', dPath);
		pathActive.setAttribute('d', dPathActive);

		clearBallHTML(svg);
		const BallHTML = getBallHTML(lineItemRect, containerItems, ball);
		svg.innerHTML += BallHTML;
	};

	const init = () => {
		let items = document.getElementsByClassName('itm-line');
		items = Object.values(items);

		items.forEach(lineItem => {
			initChild(lineItem);
		});
	};

	init();

	window.addEventListener('resize', init);
	window.addEventListener('scroll', init);
};

export default LineAnimation;
