export default async function handler(req, res) {

  const city = req.query.city;
  const apiKey = process.env.API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
  );

  const data = await response.json();

  res.status(200).json(data);
}