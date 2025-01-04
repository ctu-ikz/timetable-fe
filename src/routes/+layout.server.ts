import type { LayoutServerLoad } from './$types';

export const load = (async ({request,locals,cookies}) => {
    return {user: locals.user};
}) satisfies LayoutServerLoad;