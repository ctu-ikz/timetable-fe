<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from '$app/forms';
    import {session} from '../../../stores/session';
    // import { setCookie } from '../../../utils/cookie';

    let { data }: { data: PageData } = $props();

    async function handleLogin() {
        if(password !== repeatedPassword){

        }
    }

    let username: String = $state('')
    let password: String = $state('')
    let repeatedPassword: String = $state('')

    // setCookie('token', String(123));
    // setCookie('username', "karel");

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