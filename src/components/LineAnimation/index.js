const LineAnimation = () => {
	const getPathData = (lineItemRect, containerItems, pathWidth, isActive) => {
		containerItems = Object.values(containerItems);

		let d = '';
		let oldY = 0;
		const radius = parseFloat(5);
		pathWidth /= 2;

		containerItems.forEach((containerItem, index) => {
			const containerItemRect = containerItem.getBoundingClientRect();

			if (index === 0) d += `M ${pathWidth} 0`;

			if (containerItems.length > 0) {
				oldY = oldY + containerItem.offsetHeight;
				const top = lineItemRect.top;
				const center = window.innerHeight / 2;
				const height = center - top;

				if (index === containerItems.length - 1) {
					if (isActive && oldY > height) return (d += `V ${height}`);
					else d += ` V ${oldY + 140}`;
				} else {
					const right = containerItemRect.right - lineItemRect.left;
					const left = containerItemRect.left - lineItemRect.left;

					const nextItem = containerItems[index + 1];
					const nextItemRect = nextItem.getBoundingClientRect();
					const nextItemRight = nextItemRect.right - lineItemRect.left;
					const nextItemLeft = nextItemRect.left - lineItemRect.left;

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

	const initChild = lineItem => {
		let containerItems = lineItem.getElementsByClassName('itm-line-container');
		const lineItemRect = lineItem.getBoundingClientRect();
		const svg = lineItem.getElementsByClassName('itm-line-svg')[0];

		const path = lineItem.getElementsByClassName('itm-line-path')[0];
		const pathWidth = path.getAttribute('stroke-width');

		const pathActive = lineItem.getElementsByClassName('itm-line-path-active')[0];
		const pathActiveWidth = parseFloat(pathActive.getAttribute('stroke-width'));
		const pathMaxWidth = pathWidth > pathActiveWidth ? pathWidth : pathActiveWidth;

		const dPath = getPathData(lineItemRect, containerItems, pathMaxWidth);
		const dPathActive = getPathData(lineItemRect, containerItems, pathMaxWidth, true);

		svg.setAttribute('viewBox', `0 0 ${lineItemRect.width} ${lineItemRect.height}`);
		path.setAttribute('d', dPath);
		pathActive.setAttribute('d', dPathActive);
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
