const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Đặt thư mục chứa tệp tin tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa route cho trang chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'codenode index.js.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});