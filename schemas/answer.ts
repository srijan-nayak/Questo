import { defineField, defineType } from "@sanity/types";

export const answer = defineType({
  name: "answer",
  title: "Answer",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      description: "Which question is this answer referring to",
      type: "reference",
      to: [{ type: "question" }],
      options: {
        // only show questions that don't have an answer
        // i.e. show questions whose ids are not among the existing answers' question refs
        filter: `!(_id in *[_type == "answer"].question._ref)`,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "A short title that describes the answer's main topic",
      type: "string",
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: "text",
      title: "Text",
      description: "The actual answer text",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    }),
  ],
});
