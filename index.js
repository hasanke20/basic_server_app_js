const express = require('express');
const app = express();
const port = 4000;

const quotes=[
        { Quote: "Kuvvetli mümin, Allah katında zayıf müminden daha hayırlı ve daha sevimlidir.", Author: "Hadis-i Şerif (Müslim)" },
        { Quote: "Hiç kimse kendi el emeğinden daha hayırlı bir lokma yememiştir.", Author: "Hadis-i Şerif (Buhari)" },
        { Quote: "İnsana ancak çalıştığı vardır.", Author: "Kur'an-ı Kerim (Necm, 53/39)" },
        { Quote: "Güçlü mümin, Allah katında zayıf müminden daha hayırlıdır ve Allah’a daha sevimlidir. Ancak her ikisinde de hayır vardır.", Author: "Kur'an-ı Kerim (Müslim, Kader, 34)" },
        { Quote: "Vücudun da senin üzerinde hakkı vardır.", Author: "Hadis-i Şerif (Buhari)" },
        { Quote: "Allah katında iki nimet vardır ki, insanların çoğu onun kıymetini bilmez: Sağlık ve boş vakit.", Author: "Hadis-i Şerif (Buhari, Rikak, 1)" },
        { Quote: "İşlerin en hayırlısı az da olsa devamlı olandır.", Author: "Hadis-i Şerif (Buhari)" }
]


app.get('/ping', (req, res) => {
  res.send('pong');
});

// Rastgele bir alıntı döndüren endpoint
app.get('/getQuote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({
    Result: true,
    Timestamp: new Date().toISOString(),
    Data: randomQuote
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
