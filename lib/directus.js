import { Directus, ID } from '@directus/sdk';

export const directus = new Directus(process.env.NEXT_PUBLIC_API_URL);
