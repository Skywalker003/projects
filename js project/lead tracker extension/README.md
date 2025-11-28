# Lead Tracker Chrome Extension

A simple Chrome extension that allows users to save and manage leads (URLs). It supports saving input links, capturing the current browser tab, storing data using `localStorage`, and displaying all saved URLs in a clean UI.

This project was built while learning JavaScript, DOM manipulation, browser APIs, and Chrome Extension development (Manifest V3).

---

## Features

- Save leads manually by entering a URL  
- Save the active browser tab with one click  
- Persist data using `localStorage`  
- Display saved leads dynamically  
- Delete all saved leads  
- Works as a Chrome extension popup

---

## Tech Used

- HTML  
- CSS  
- JavaScript  
- Chrome Tabs API  
- Manifest V3

---

## How It Works

- User enters a URL and clicks **Save Input** → added to leads list  
- Clicking **Save Tab** captures the current active tab URL  
- All leads are saved in `localStorage` for persistence  
- **Delete All** clears everything  
- The popup UI (`index.html`) loads and renders the stored leads dynamically  

---

## Installation (Chrome Extension)

1. Clone the repository or download the ZIP  
2. Open Chrome and go to: `chrome://extensions/`  
3. Enable **Developer Mode** (top right)  
4. Click **Load unpacked**  
5. Select the project folder  
6. The extension will appear in your Chrome toolbar

---

## Project Structure

lead-tracker-extension/\
│── index.html\
│── index.css\
│── index.js\
│── manifest.json\
│── icon.png (optional)

---

## Screenshots

![img 1](<Screenshot (180).png>)
![img 2](<Screenshot (181).png>)
---

## Learning Highlights

- DOM manipulation  
- Template strings  
- Event listeners  
- localStorage for persistence  
- Chrome Tabs API  
- Manifest V3 configuration  
- Building a functional Chrome extension  

---

## Future Improvements

- Add edit/delete for individual leads  
- Add categories or folders  
- Improved UI/UX  
- Dark mode  
- Sync storage API

---

## Author

**Sri Vikas**  
Aspiring Frontend Developer | 
Open to internship opportunities  