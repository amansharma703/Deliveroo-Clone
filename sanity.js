import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "8l0uhvpk",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run this to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;
