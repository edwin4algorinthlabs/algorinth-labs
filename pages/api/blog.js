const contentful = require("contentful")
const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

  // export default async  (req, res) => {
  export default async function Blog (req, res) {
    console.log("req.query.tiles: " + req.query.tiles);
  let noOfTiles = req.query.tiles
   let richText = null
   try{

    await client.getEntries().then((entries) => {
        richText = noOfTiles < entries.items.length ? entries.items.slice(0,noOfTiles) :entries.items
      })
      .catch(console.error)
     console.log(richText)
     res.json({ message: "Mail sent successfully", richText });
   }catch (error) {
   console.error(error);
   res.status(500).json({ error: "Internal Server Error" });
 }
 }