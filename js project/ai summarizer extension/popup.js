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
                ({text}) => {
                    if(!text){
                        resultDiv.textContent = "Couldn't extract text from this page.";
                        return;
                    }
                    
                }
            )
        })

    });
})

   
