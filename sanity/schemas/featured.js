export default {
    name: "featured",
    title: "Featured Menu Category",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Featured Menu Category",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_des",
            type: "string",
            title: "Short description",
            validation: (Rule) => Rule.max(200),
        },
        {
            name: "restaurants",
            type: "array",
            title: "Restaurants",
            of: [{ type: "reference", to: [{ type: "restaurant" }] }],
        },
    ],
};
