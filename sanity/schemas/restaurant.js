export default {
    name: "restaurant",
    title: "Restaurant",
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
            name: "image",
            type: "image",
            title: "Image of Restaurant",
        },
        {
            name: "lat",
            type: "number",
            title: "Latitude of the Restaurant",
        },
        {
            name: "long",
            type: "number",
            title: "Longitude of the Restaurant",
        },
        {
            name: "genre",
            type: "string",
            title: "Restaurant genre",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "addres",
            type: "string",
            title: "Restaurant address",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "rating",
            type: "number",
            title: "Enter a Ratng form (1-5 Stars)",
            validation: (Rule) => Rule.required().min(1).max(5).error("Please enter value between 1 and 5"),
        },
        {
            name: "type",
            type: "reference",
            to: [{ type: "category" }],
            title: "Category",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "dishes",
            type: "array",
            title: "Dishes",
            of: [{ type: "reference", to: [{ type: "dish" }] }],
        },
    ],
};
