export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("URL não fornecida.");
  }

  try {
    const response = await fetch(url);
    const data = await response.text(); // Usa .text() para HTML. Use .json() se quiser JSON.
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados: " + error.message);
  }
}
