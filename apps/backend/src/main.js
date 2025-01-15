const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Đường dẫn đến thư mục chứa build Angular
const frontendPath = path.join(__dirname, '../../../../frontend/browser');

// Serve static files từ Angular build
app.use(cors());
app.use(express.static(frontendPath));

// Xử lý các route không xác định (để phục vụ Angular index.html)
app.get('/hello', (req, res) => {
  res.status(200).json('hello world');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, '.html'));
});

// Port để chạy ứng dụng Node.js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
