import { useEffect, useRef } from 'react';
import { createScene } from './scene';

export const Basic = () => {
	const mountRef = useRef(null);

	useEffect(() => {
		const scene = createScene(mountRef.current);
		return () => scene.destroy(true);
	}, []);

	return <div style={{ width: '100%', height: '100%' }} ref={mountRef}></div>;
};
