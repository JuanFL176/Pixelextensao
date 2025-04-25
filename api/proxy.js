export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("URL não fornecida.");
  }

  try {
    const parsedUrl = new URL(url);

    // Verifica se o hostname termina com "pixels.tips"
    if (!parsedUrl.hostname.endsWith("pixels.tips")) {
      return res.status(403).send("Acesso negado. Domínio não autorizado.");
    }

    const response = await fetch(url);
    const data = await response.text(); // Use .json() se a resposta for JSON
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados: " + error.message);
  }
}
