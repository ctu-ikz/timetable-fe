<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Sheet from "$lib/components/ui/sheet";
	import "../app.css";
	let { children } = $props();
	import { ModeWatcher } from "mode-watcher";
	import { toggleMode } from "mode-watcher";
	import { Sun } from "lucide-svelte";
	import { Moon } from "lucide-svelte";
	import { Menu } from "lucide-svelte";
	import {session} from "../stores/session";
    import { get } from "svelte/store";

	let pageWidth = $state(0);
	let pageHeight = $state(0);

</script>

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} />

<ModeWatcher />

<header>
	<div
		class="w-screen flex portrait:absolute portrait:bottom-0 landscape:top-0 landscape:sticky bg-primary"
	>
		<div
			class="flex flex-row justify-between min-h-10 max-h-10 m-4 w-screen"
		>
			<Sheet.Root>
				<Sheet.Trigger let:builder>
					<Button builders={[builder]} variant="outline">
						<Menu />
					</Button>
				</Sheet.Trigger>

				<Sheet.Content
					side={pageWidth > pageHeight ? "left" : "bottom"}
				>
					<Sheet.Header>
						<Sheet.Title>Menu</Sheet.Title>
					</Sheet.Header>

					<div class="w-max flex flex-col m-4 content-stretch">
						<a href="/timetable">Timetable</a>
						<a href="/semester">Semesters</a>
						<a href="/subjectclass">Subjects</a>
					</div>

					<Sheet.Footer>
						<Sheet.Close let:builder>
							<Button builders={[builder]} variant="outline"
								>Close</Button
							>
						</Sheet.Close>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>

			<div class="flex flex-row items-center">
				<a href="/user">
					<!-- {token != null ? "signed in as " + username : "not signed in"} -->
				</a>
				<Button
					on:click={toggleMode}
					variant="ghost"
					size="icon"
					class=""
				>
					<Sun class="scale-100 dark:scale-0" />
					<Moon class="absolute scale-0 dark:scale-100" />
				</Button>
			</div>
		</div>
	</div>
</header>

<div class="grid place-items-center">
	<div>
		{@render children()}
	</div>
</div>
