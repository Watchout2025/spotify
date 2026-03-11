export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.jiosaavn.com/api.php?__call=content.getAlbums&api_version=4&_format=json&_marker=0&n=50&p=1&ctx=wap6dot0",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
          "Referer": "https://www.jiosaavn.com/"
        }
      }
    );

    const text = await response.text();

    // convert to JSON safely
    const data = JSON.parse(text);

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      error: "Charts fetch failed",
      message: err.message
    });
  }
}
