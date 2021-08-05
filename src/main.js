import App from './App.svelte';
import './sass/style.scss';
import './sass/components/index.scss';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;