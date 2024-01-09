import { Link, Route, useRoute } from 'wouter';
import './App.css';

import { Basic } from '@pixi-starter/basic';
import { Waves } from '@pixi-starter/waves';

export default function App() {
	return (
		<div>
			<div className='flex dropdown absolute'>
				<label tabIndex={0} className='btn btn-ghost btn-circle shadow m-3 bg-base-300 hover:bg-base-100'>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h7' />
					</svg>
				</label>
				<div tabIndex={0} className='menu menu-vertical dropdown-content z-10 bg-base-300 w-44 rounded-box shadow m-3'>
					<Link className='text-7xl text-center' href='/'>
						📋
					</Link>

					<h3 className='text-2xl font-bold ml-5'>Examples</h3>

					<ul className='w-32 menu rounded-box ml-2'>
						<RouteLink href='/'>Basic</RouteLink>
					</ul>

					<ul className='w-32 menu rounded-box ml-2'>
						<RouteLink href='/waves'>Waves 🌊</RouteLink>
					</ul>
				</div>
			</div>
			<div className='h-screen w-screen'>
				<Route path='/' component={Basic} />
				<Route path='/waves' component={Waves} />
			</div>
		</div>
	);
}

function RouteLink({ href, children }: { href: string; children: string }) {
	const [isActive] = useRoute(href);
	const linkClass = isActive ? 'active' : '';

	return (
		<li>
			<Link href={href} className={'m-1 ' + linkClass}>
				{children}
			</Link>
		</li>
	);
}
