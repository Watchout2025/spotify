export default async function handler(req, res) {
  const response = await fetch("https://www.jiosaavn.com/api.php?__call=content.getAlbums&api_version=4&_format=json&_marker=0&n=50&p=1&ctx=wap6dot0");
  const data = await response.json();

  res.status(200).json(data);
}
