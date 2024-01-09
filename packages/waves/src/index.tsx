import { useEffect, useRef } from 'react';
import { createScene } from './scene';

export const Waves = () => {
	const mountRef = useRef(null);

	useEffect(() => {
		const scene = createScene(mountRef.current);
		return () => scene.destroy(true);
	}, []);

	return <div style={{ width: 1280, height: 720 }} ref={mountRef}></div>;
};
