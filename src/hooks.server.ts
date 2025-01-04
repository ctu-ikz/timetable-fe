// import {redirect} from '@sveltejs/kit';

import { type Handle } from "@sveltejs/kit";

// export async function handle({event, resolve}) {

// }

function redirect(location: string, body?: string) {
    return new Response(body, {
        status: 303, headers: { location }
    });
}

const unprotectedRoutes: string[] = [
    '/user/login',
    '/user/register'
]

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    console.log("we have the session");
    if (!session && !unprotectedRoutes.includes(event.url.pathname))
        return redirect('/user/login', 'no authenticated user');



    event.setHeaders({ 'Authentication': session ?? '' });

    // if(!unprotectedRoutes.includes(event.url.pathname))
    //     return redirect('/user/login', 'Not a valid user');


    return resolve(event);
}