import { DATA_API } from '$env/static/private';
import type { Semester } from '$lib/interfaces';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const response = await fetch(DATA_API + "/semester");

    if (!response.ok) {
        throw new Error("failed to fetch semester ");
    }

    let result = await response.json();

    return {
        post: JSON.stringify(result)
    }
}
