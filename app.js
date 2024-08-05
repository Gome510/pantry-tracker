import * as dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "openai";

import fs from "fs";

const openai = new OpenAI();

const base64Image = fs.readFileSync("public/lol.jpg", {
  encoding: "base64",
});

const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Describe this image",
        },
        {
          type: "image_url",
          image_url: {
            url: `data:image/jpg;base64,${base64Image}`,
          },
        },
      ],
    },
  ],
  max_tokens: 1000,
});

console.log(response.choices[0]);
