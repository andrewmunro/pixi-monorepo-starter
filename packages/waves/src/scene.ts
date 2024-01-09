import { Application, Graphics } from 'pixi.js';

export const createScene = (parent: HTMLElement) => {
	const app = new Application({
		resizeTo: parent,
		backgroundAlpha: 0,
		autoStart: true,
		antialias: true,
		backgroundColor: 0xff773e
	});

	parent.appendChild(app.view as any);

	const bg = new Graphics();
	bg.beginFill(0xffa07a);
	bg.drawRect(0, 0, app.view.width, app.view.height);
	bg.endFill();
	app.stage.addChild(bg);

	const graphic = new Graphics();
	graphic.moveTo(0, 0);
	graphic.lineStyle({
		width: 1
	});

	const height = 2000;
	const horizontalCount = 1000;
	const horizontalSegment = window.innerWidth / horizontalCount;

	app.stage.addChild(graphic);

	let time = 0;

	const lerp = (start: number, end: number, percent: number): number => {
		return start + (end - start) * percent;
	};

	let started = false;

	app.ticker.add(deltaTime => {
		if (app.view.height != 0 && started == false) {
			started = true;

			graphic.position.y = app.view.height + 200;
		}

		if (started) {
			graphic.position.y = lerp(graphic.position.y, app.view.height / 2, 0.01);

			time += deltaTime;
			graphic.clear();

			drawWave(graphic, 0x005b96, 0.5, 0, -30);
			drawWave(graphic, 0xb3cde0, 1, 1000, 0);
		}
	});

	const drawWave = (graphic: Graphics, color: number, alpha: number, offset: number, yOffset: number) => {
		graphic.beginFill(color, alpha);

		for (let index = 0; index < horizontalCount; index++) {
			graphic.lineTo(
				horizontalSegment * index,
				yOffset + Math.sin((time + offset) / 60 + index / 100) * Math.sin((time + offset) / 50) * 50
			);
		}

		graphic.lineTo(yOffset + horizontalSegment * horizontalCount, height);
		graphic.lineTo(0, height);

		graphic.endFill();
	};

	return app;
};
