// ai.js

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

if (!API_KEY) {
  console.warn(
    "[ai.js] VITE_GROQ_API_KEY is undefined – did you restart Vite after editing .env?"
  );
}

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and suggests a recipe.

Requirements:
- Use **Markdown formatting**
- DO NOT use tables
- Format ingredients as a simple bullet list
- Keep sections clear

Example format:

# Recipe Name

## Why this works
- Reason 1
- Reason 2

## Ingredients
- 1 cup rice
- 2 tomatoes, chopped
- 1 tsp cumin

## Instructions
1. Step one
2. Step two
3. Step three
`;

export async function getRecipeFromGroq(ingredientsArr) {
  const ingredients = ingredientsArr.join(", ");

  const body = {
    model: "openai/gpt-oss-20b",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "user",
        content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!`,
      },
    ],
    max_tokens: 1024,
    temperature: 0.7,
  };

  try {
    const res = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      console.error(
        "[ai.js] Groq API error:",
        res.status,
        await res.text()
      );
      throw new Error(`Groq returned ${res.status}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "";
  } catch (err) {
    console.error("[ai.js] getRecipeFromGroq failed:", err);
    return "Sorry, I couldn't generate a recipe right now.";
  }
}
