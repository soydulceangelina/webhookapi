export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("******Body***********");
    console.log(req.body);
    console.log("******Body***********");
    res.status(200).send("ok");
    return;
  }

  res.status(405).send("Method not allowed");
}
