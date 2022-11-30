const LineAnimation = () => {
	const checkActive = pathActive => {
		const totalLength = pathActive.getTotalLength();
		const center = window.innerHeight / 2;
		const boundaries = pathActive.getBoundingClientRect();
		const top = boundaries.top;
		const height = boundaries.height;
		const percentage = (center - top) / height;
		const drawLength = percentage > 0 ? totalLength * percentage : 0;
		const offset = drawLength < totalLength ? totalLength - drawLength : 0;

		pathActive.setAttribute('stroke-dasharray', totalLength);
		pathActive.setAttribute('stroke-dashoffset', offset);
	};

	const getPathData = (lineItems, pathWidth) => {
		lineItems = Object.values(lineItems);

		let d = '';
		let oldY = 0;
		const radius = parseFloat(5);
		pathWidth /= 2;

		lineItems.forEach((item, index) => {
			if (index === 0) d += `M${pathWidth} 0`;

			if (lineItems.length > 0) {
				if (index === lineItems.length - 1) d += `V${oldY + 140}`;
				else {
					oldY = oldY + item.offsetHeight;
					const itemWidth = item.offsetWidth;

					const c1 = index % 2 === 0 ? pathWidth : itemWidth - pathWidth;
					const c2 = index % 2 === 0 ? pathWidth + radius : itemWidth - pathWidth - radius;
					const c3 = index % 2 === 0 ? pathWidth + radius * 2 : itemWidth - pathWidth - radius * 2;

					let c4 = index % 2 === 0 ? itemWidth - pathWidth - radius * 2 : pathWidth + radius * 2;
					let c5 = index % 2 === 0 ? itemWidth - pathWidth - radius : pathWidth + radius;
					let c6 = index % 2 === 0 ? itemWidth - pathWidth : pathWidth;

					if (index === lineItems.length - 2) {
						c4 = itemWidth / 2;
						c5 = index % 2 === 0 ? (itemWidth - 2) / 2 + radius : (itemWidth - 2) / 2 - radius;
						c6 = index % 2 === 0 ? (itemWidth - 2) / 2 + radius * 2 : (itemWidth - 2) / 2 - radius * 2;
					}

					d += `V ${oldY - radius * 2} C ${c1} ${
						oldY - radius
					} ${c2} ${oldY} ${c3} ${oldY} H ${c4} C ${c5} ${oldY} ${c6} ${oldY + radius} ${c6} ${oldY + radius * 2}`;
				}
			}
		});

		return d;
	};

	const initChild = item => {
		let lineItems = item.getElementsByClassName('itm-line-item');
		const itemRect = item.getBoundingClientRect();
		const svg = item.getElementsByClassName('itm-line-svg')[0];

		const path = item.getElementsByClassName('itm-line-path')[0];
		const pathWidth = path.getAttribute('stroke-width');

		const pathActive = item.getElementsByClassName('itm-line-path-active')[0];
		const pathActiveWidth = parseFloat(pathActive.getAttribute('stroke-width'));
		const pathMaxWidth = pathWidth > pathActiveWidth ? pathWidth : pathActiveWidth;

		const dPath = getPathData(lineItems, pathMaxWidth);
		const dPathActive = getPathData(lineItems, pathMaxWidth);

		svg.setAttribute('viewBox', `0 0 ${itemRect.width} ${itemRect.height}`);
		path.setAttribute('d', dPath);
		pathActive.setAttribute('d', dPathActive);

		checkActive(pathActive);
	};

	const init = () => {
		let items = document.getElementsByClassName('itm-line');
		items = Object.values(items);

		items.forEach(item => {
			initChild(item);
		});
	};

	init();

	window.addEventListener('resize', init);
	window.addEventListener('scroll', init);
};

export default LineAnimation;
