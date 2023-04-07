import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { Question } from "@/schemas/schema";
import client from "@/sanity-client";

const NewQuestion = z.object({
  title: z.string().min(5),
  details: z.string().min(10),
});

export type NewQuestion = z.infer<typeof NewQuestion>;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // /api/questions only handles POST requests
  if (req.method !== "POST") {
    res
      .status(405)
      .setHeader("Allow", "POST")
      .json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const newQuestion: NewQuestion = NewQuestion.parse(req.body);
    const createdQuestion = (await client.create({
      _type: "question",
      title: newQuestion.title,
      details: newQuestion.details,
    })) as Question;
    res.status(201).json({ question: createdQuestion });
  } catch {
    res.status(400).json({ message: "Invalid question object" });
  }
};

export default handler;
