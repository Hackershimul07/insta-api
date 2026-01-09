export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const url = req.query.url;

  if (!url) {
    return res.status(400).json({
      status: false,
      error: "Instagram URL required"
    });
  }

  // ⚠️ Demo response (real project এ এখানে logic বসবে)
  return res.json({
    status: true,
    format: "mp4",
    download_url: "https://cdn.downloadgram.org/?token=PASTE_REAL_TOKEN"
  });
}
