export default {
    name: "dish",
    title: "Dish",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Restaurant name",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_des",
            type: "string",
            title: "Short description",
            validation: (Rule) => Rule.max(200),
        },
        {
            name: "price",
            type: "number",
            title: "Price of Dish",
        },
        {
            name: "image",
            type: "image",
            title: "Image of Restaurant",
        },
    ],
};
