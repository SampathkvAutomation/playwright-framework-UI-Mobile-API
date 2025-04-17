// import { chromium } from 'playwright';
// import express from 'express';
// import fetch from 'node-fetch';

// const app = express();
// const PORT = 8000;
// const LLM_API_URL = 'https://api.openai.com/v1/chat/completions';
// const GOOGLE_SEARCH_API = 'https://www.googleapis.com/customsearch/v1';
// const API_KEY = 'YOUR_GOOGLE_API_KEY';
// const CX = 'YOUR_SEARCH_ENGINE_ID';

// // Function to query LLM
// async function queryLLM(prompt: string): Promise<string> {
//     const response = await fetch(LLM_API_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer YOUR_OPENAI_API_KEY`
//         },
//         body: JSON.stringify({ model: 'gpt-4', messages: [{ role: 'user', content: prompt }] })
//     });
//     const data = await response.json();
//     return data.choices[0].message.content;
// }

// // Function to perform Google search for fact-checking
// async function googleSearch(query: string): Promise<string> {
//     const response = await fetch(`${GOOGLE_SEARCH_API}?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}`);
//     const data = await response.json();
//     return data.items?.[0]?.snippet || '';
// }

// // Validate LLM response against search results
// app.get('/validate', async (req, res) => {
//     const { query } = req.query;
//     if (!query || typeof query !== 'string') {
//         return res.status(400).json({ error: 'Query parameter is required' });
//     }
    
//     const llmResponse = await queryLLM(query);
//     const searchResult = await googleSearch(query);
//     const isConsistent = searchResult.toLowerCase().includes(llmResponse.toLowerCase());
    
//     res.json({ query, llm_response: llmResponse, fact_checked: isConsistent });
// });

// // Extracts content from a webpage and validates it
// app.get('/test_page_content', async (req, res) => {
//     const { url, selector } = req.query;
//     if (!url || !selector || typeof url !== 'string' || typeof selector !== 'string') {
//         return res.status(400).json({ error: 'URL and selector parameters are required' });
//     }
    
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
//     const content = await page.textContent(selector) || '';
//     await browser.close();
    
//     const validation = await fetch(`http://localhost:${PORT}/validate?query=${encodeURIComponent(content)}`);
//     const validationResult = await validation.json();
    
//     res.json({ url, content, validation: validationResult });
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
