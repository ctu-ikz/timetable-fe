import type { PageServerLoad } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
import { DATA_API } from '$env/static/private';
import { dev } from '$app/environment';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    login: async ({request,locals, cookies}) => {
        console.log("BEFORE ")
        const form = await request.formData();
        const username = form.get("username");
        const password = form.get("password");
        console.log("AFTER")

        if(!username || !password) 
            return fail(400);

        if(typeof username !== 'string' || typeof password !== 'string')
            return fail(400);

        const response = await fetch(DATA_API + "/auth/login", {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers:{'Content-Type': 'application/json'}
        });
        console.log("hello");

        if(!response.ok){
            console.log("thing failed:" + response.statusText);
            return fail(400);
        }

        // const userData = await response.json();
        // console.log(JSON.stringify(userData));
        const user = response.headers;
        

        // const token = user.get("Authorization")?.split(" ")[1] ?? '';
        const token = user.get("Authorization") ?? '';

        cookies.set('session',token,{
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: !dev,
            maxAge: 60*60*24
        });


        throw redirect(307, '/');
    }
}