<script lang="ts">
  import { enhance } from '$app/forms';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();


    let username: String = $state('')
    let password: String = $state('')
    let repeatedPassword: String = $state('')

</script>



<div>
    <form method="POST" action="?/login" use:enhance>
        <label>
            Username:
            <input name="username" type="text" bind:value={username} required/>
        </label>
        <label>
            Password:
            <input name="password" type="password" bind:value={password} required/>
        </label>
        <label>
            Repeat Password:
            <input name="repeatPassword" type="password" bind:value={repeatedPassword} required/>
        </label>
        <button>Submit</button>
    </form>
    </div>