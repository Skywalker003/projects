import { GoogleGenAI } from "@google/genai";

document.getElementById("summarize").addEventListener("click", () =>{
    const resultDiv = document.getElementById("result");
    const summary_type = document.getElementById("summary_type").value;

    resultDiv.innerHTML = '<div class = "loader"></div>';

    chrome.storage.sync.get(["geminiApiKey"],({geminiApiKey}) => {
        if(!geminiApiKey){
            resultDiv.textContent = "No API key set. Click the gear icon to add one.";
            return;
        }

        chrome.tabs.query({active: true, currentWindow: true },([tab]) => {
            chrome.tabs.sendMessage(
                tab.id,
                { type: "GET_ARTICLE_TEXT"},
                async ({text}) => {
                    if(!text){
                        resultDiv.textContent = "Couldn't extract text from this page.";
                        return;
                    }

                    try {
                        const summary = await getGeminiSummary(
                            text,
                            summaryType,
                            geminiApiKey
                        );

                        resultDiv.textContent = summary
                    } catch (error) {
                        resultDiv.textContent = "Gemini error: " + err.message;
                    }

                }
            )
        })

    });
})

async function getGeminiSummary(rawText,type,apiKey){
    const max =20000;
    const text = rawText.length >max ? rawText.slice(0,max) + "..." : rawText;

    const promptMap ={
        brief:`Summarize in 2-3 sentences:\n\n${text}`,
        detailed:`Give a detailed summary:\n\n${text}`,
        bullet:`Summarize in 5-7 bullet points (start each line with "- "):\n\n${text}`,
    }

    const prompt = promptMap[type] || promptMap.brief;

}
   
