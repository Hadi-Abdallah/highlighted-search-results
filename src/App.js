import React, { useState } from 'react';
import './App.css';

const articles = [
  {
    id: 1,
    title: "React stuff",
    content: "React is pretty cool for making websites. You can build stuff with components and it updates automatically when data changes. Just use useState and you're good to go."
  },
  {
    id: 2,
    title: "JS basics",
    content: "JavaScript is everywhere. You can do pretty much anything with it. Functions, variables, objects - that's basically it. Oh and async stuff too."
  },
  {
    id: 3,
    title: "Web dev tips",
    content: "Make sure your site works on mobile. Use flexbox for layouts. Don't forget about accessibility but honestly most people don't care that much."
  },
  {
    id: 4,
    title: "CSS tricks",
    content: "CSS is annoying but necessary. Flexbox and Grid make life easier. Just copy from Stack Overflow when you get stuck."
  },
  {
    id: 5,
    title: "Frameworks",
    content: "React is the most popular. Vue is easier to learn. Angular is for big companies. Pick whatever works for your project."
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const highlightText = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="results-container">
        {filteredArticles.map(article => (
          <div key={article.id} className="article">
            <h3>{highlightText(article.title, searchTerm)}</h3>
            <p>{highlightText(article.content, searchTerm)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
