<script lang="ts">
  import type { PageData } from "./$types";

  let data: { data: PageData } = $props();
</script>

<h1 class="text-9xl">Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>
<br>
<p>data:</p>
<p>{data.data.post}</p>
