import React from 'react';
// 修正：使用解構賦值 {} 匯入 createRoot
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AItest from './AItest';

// const root = createRoot(document.getElementById('root')); // 變數名稱也要換
const el = document.getElementById('react-root');

if (el) {
  // 修正：現在可以直接使用 createRoot()
  createRoot(el).render(<AItest />); 
}

// ... (後續程式碼不變)
reportWebVitals();