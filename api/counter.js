// api/counter.js
let count = 0; // хранение в памяти сервера (сброс при деплое, для постоянного хранилища нужен DB)

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ count });
  } else if (req.method === "POST") {
    count++;
    res.status(200).json({ count });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
