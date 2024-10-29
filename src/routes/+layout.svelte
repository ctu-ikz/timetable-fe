<script lang="ts">
	import '../app.css';
	import Icon from '@iconify/svelte';
	let { children } = $props();
	import logo from '$lib/assets/logo.png';
    import BurgerMenu from './BurgerMenu.svelte';

	let open:boolean = $state(false);
</script>

<style>
	@media (orientation: landscape){
		.header{top: 0; bottom: auto;}
		.content{padding-top: 8rem;}
	}
	@media (orientation: portrait){
		.header{bottom: 0; top: auto;}
		.content{padding-bottom: 8rem;}
	}
</style>

<div class="flex flex-col min-h-screen">
	
	<header class="header fixed w-full flex flex-row bg-gradient-to-r bg-blue-400">
		<button onclick={() => open = !open}>
			<Icon icon="mingcute:menu-fill" class="h-20 w-20 p-2 m-4 border-4 rounded-md border-black"/>
		</button>
		<img alt="logo" src={logo} class="h-32 w-32 p-4"/>

		
	</header>

	
	
	<main class="content flex-grow">
		<div class="static left-0 max-h-screen flex flex-row">
			<div class="max-w-32 min-w-32 max-h-screen {open ? "" : "hidden"}">
				<BurgerMenu open={open}></BurgerMenu>
			</div>
			
			<div >
				{@render children()}
			</div>
			
			
		</div>
		
	</main>
	
</div>