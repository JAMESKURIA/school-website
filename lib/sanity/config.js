// lib/config.js
export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2022-16-11', // Learn more: https://www.sanity.io/docs/api-versioning
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === 'production',

    /**
     * OPTIONAL config to enable authentication with custom token
     * You might need this if you host the preview on a different url than Sanity Studio
     */
    token: '<sanity access token>',
    // EventSource:
    //     EventSourcePolyfill /* provide your own event source implementation. Required in browsers to support the above token parameter. */,

    // Optional allow list filter for document types. You can use this to limit the amount of documents by declaring the types you want to sync. Note that since you're fetching a subset of your dataset, queries that works against your Content Lake might not work against the local groq-store.
    // includeTypes: ['page', 'product', 'sanity.imageAsset'],
}