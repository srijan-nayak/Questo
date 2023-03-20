import { defineField, defineType } from "@sanity/types";

export const question = defineType({
  name: "question",
  title: "Question",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The main topic of the question",
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "text",
      description: "A detailed description of the question",
      validation: (Rule) => Rule.required().min(10),
    }),
  ],
});
