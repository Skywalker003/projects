# AI Summarizer Chrome Extension

An AI-powered Chrome extension that extracts article content from webpages and generates concise summaries using the **Google Gemini API**.

This project was built to strengthen my understanding of **JavaScript**, **Chrome Extension APIs (Manifest V3)**, **asynchronous programming**, and **real-world AI API integration**.

---

## 🚀 Features

- Extracts readable article content from web pages
- Generates AI-powered summaries using Google Gemini
- Supports multiple summary modes:
  - **Brief** (2–3 sentences)
  - **Detailed**
  - **Bullet points**
- Secure API key storage using Chrome Sync Storage
- Copy summary to clipboard with visual feedback
- Gracefully handles restricted or unsupported pages
- Clean and responsive popup UI

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (ES6+)
- Chrome Extension APIs
  - Tabs API
  - Storage API
  - Runtime Messaging
- Manifest V3
- Google Gemini API

---

## 🧠 How It Works

1. User clicks **Summarize** in the extension popup  
2. Popup script:
   - Fetches the Gemini API key from Chrome storage
   - Requests article text from the content script
3. Content script:
   - Extracts text from `<article>` or `<p>` tags
   - Sends extracted text back to the popup
4. Popup sends the text to the **Gemini API** with a prompt based on the selected summary type
5. AI-generated summary is displayed in the popup
6. User can copy the summary with one click

---

## 📦 Installation (Chrome Extension)

1. Clone this repository or download it as a ZIP
2. Open Chrome and navigate to: chrome://extensions/
3. Enable **Developer Mode** (top-right corner)
4. Click **Load unpacked**
5. Select the project folder
6. Open the extension and add your **Gemini API key** in the Options page

---

## 🗂️ Project Structure

ai-summarizer-extension/
│
├── manifest.json\
├── background.js\
├── content.js\
├── popup.html\
├── popup.js\
├── options.\
├── options.js\
├── icon.\
├── .gitignore\
└── README.md


---

## 🔐 API Key Handling

- The Gemini API key is stored securely using **Chrome Sync Storage**
- The key is **never hardcoded** and **never committed** to the repository
- `.gitignore` prevents accidental exposure of sensitive files

---

## 📚 Learning Highlights

- Chrome Extension architecture (popup, content script, background)
- Inter-script communication using runtime messaging
- Async/await and Promise-based workflows
- Fetch API and RESTful request handling
- Prompt engineering for AI-generated summaries
- Error handling for restricted and unsupported pages
- UX improvements using loaders and feedback states

---

## 🔮 Future Improvements

- Summarize only selected text
- Markdown rendering for bullet summaries
- Caching summaries per URL
- Dark mode support
- Chrome Web Store deployment
- Language detection and multilingual summaries

---

## 👨‍💻 Author

**Sri Vikas**  
Aspiring Frontend Developer  
Actively learning JavaScript, React, and browser-based applications  
Open to frontend and software development internship opportunities
