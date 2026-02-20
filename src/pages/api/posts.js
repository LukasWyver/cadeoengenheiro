export default async function handler(req, res) {
  const { page = 1 } = req.query;

  const response = await fetch(
    `https://admin.cadeoengenheiro.com.br/api/posts?page=${page}`
  );

  const data = await response.json();

  res.status(200).json(data);
}
