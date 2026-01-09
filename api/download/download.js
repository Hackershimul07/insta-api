export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const url = req.query.url;
  if (!url) return res.status(400).json({ status:false, error:"URL required" });

  res.json({
    status:true,
    download_url:"https://cdn.downloadgram.org/?token=PASTE_REAL_TOKEN",
    format:"mp4"
  });
}
