export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.jiosaavn.com/api.php?__call=social.getTopArtists&api_version=4&_format=json&_marker=0&ctx=web6dot",
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
