import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox({ city, temp, tempMin, tempMax, humidity, feelsLike, weather }){
    const INIT_URL="https://images.unsplash.com/photo-1674766642691-395204ee7c18?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpcnR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1529281528138-fbe93b7d25a4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
    return (<div className="InfoBox">
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={humidity>80?RAIN_URL:(temp>15)?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {city}
  </Typography>

  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Temperature: {temp}°C
  </Typography>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Humidity: {humidity}%
  </Typography>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Min Temp: {tempMin}°C
  </Typography>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Max Temp: {tempMax}°C
  </Typography>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Weather: {weather}
  </Typography>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Feels Like: {feelsLike}°C
  </Typography>
</CardContent>
     
    </Card>

    </div>)
}