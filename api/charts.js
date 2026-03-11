export default async function handler(req, res) {

  const response = await fetch(
    "https://www.jiosaavn.com/api.php?__call=content.getCharts&api_version=4&_format=json&_marker=0&ctx=wap6dot0",
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "application/json",
        "Referer": "https://www.jiosaavn.com/"
      }
    }
  );

  const text = await response.text();

  res.status(200).send(text);
}
