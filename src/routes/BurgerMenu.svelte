<script>
    let { open } = $props();
</script>

{#if open}
    <div class="max-h-screen bg-slate-400">
        {#each [{ title: "Home", route: "/home" }, { title: "Create", route: "/create" }] as link}
            <a href={link.route}>
                <p class="text-center">{link.title}</p>
            </a>
        {/each}
    </div>
{/if}

<style>
    p {
        cursor: pointer;
        /* width:max-content; */
        /* margin: 1rem; */
    }
</style>
