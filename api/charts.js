export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.jiosaavn.com/api.php?__call=content.getCharts&api_version=4&_format=json&_marker=0&ctx=wap6dot0");

    const text = await response.text(); // raw response

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(text);

  } catch (err) {
    res.status(500).send(err.message);
  }
}
