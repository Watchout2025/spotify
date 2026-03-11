export default async function handler(req, res) {
  const response = await fetch("https://www.jiosaavn.com/api.php?__call=content.getCharts&api_version=4&_format=json&_marker=0&ctx=wap6dot0");
  const data = await response.json();

  res.status(200).json(data);
}
