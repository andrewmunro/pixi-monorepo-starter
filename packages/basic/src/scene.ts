import { Application, Sprite, Texture, TilingSprite } from 'pixi.js';

export const createScene = (parent: HTMLElement) => {
	const app = new Application({
		resizeTo: parent,
		backgroundAlpha: 0,
		autoStart: true,
		antialias: true
	});

	parent.appendChild(app.view as any);

	Promise.all([Texture.fromURL('pattern.png'), Texture.fromURL('box.png')]).then(([patternTexture, boxTexture]) => {
		const bg = new TilingSprite(patternTexture, 1280, 720);
		app.stage.addChild(bg);

		const box = new Sprite(boxTexture);
		box.position.x = 1280 / 2;
		box.position.y = 720 / 2;
		box.anchor.x = box.anchor.y = 0.5;
		box.scale.x = box.scale.y = 0.5;
		app.stage.addChild(box);

		app.ticker.add(deltaTime => {
			box.y += Math.sin(Date.now() / 1000) * 0.5;
		});
	});

	return app;
};
