import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("lepe");
  switch (req.method) {
    case "POST":
      const postObject = JSON.parse(req.body);
      const { walletAddress } = JSON.parse(req.body);
      const userExists = await db.collection("users").find({walletAddress}).toArray();
      if (userExists.length) {
        res.json({ status: 400, data: {
          message: "User wallet is already exists"
        }});
        break;
      }
      const myPost = await db.collection("users").insertOne(postObject);
      res.json(myPost.ops[0]);
      break;
    case "PUT":
      const putObject = JSON.parse(req.body);
      console.log(putObject)
      const myPut = await db.collection("users").findOneAndUpdate({
        walletAddress: putObject.walletAddress
      }, {
        $set: { links: JSON.stringify(putObject.links) }
      });
      console.log(myPut);
      res.json(myPut);
      break;
    case "GET":
      const allPosts = await db.collection("users").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
