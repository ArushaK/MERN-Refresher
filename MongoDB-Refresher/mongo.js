// const MongoClient = require("mongodb").MongoClient;
// const url =
//   "mongodb+srv://akhil:PiczLmw0BXYC1e6m@cluster0.pxcdl.mongodb.net/products_test?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://arusha:12345@cluster0.pxcdl.mongodb.net/product_test?retryWrites=true&w=majority";
const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  //const client = new MongoClient(url);
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect((err) => {
    const collection = client.db("product_test").collection("products");
    const result = collection.insertOne(newProduct);
    client.close();
  });
  //   try {
  //     await client.connect();
  //     const db = client.db();
  //     const result = db.collection("products").insertOne(newProduct);
  //   } catch (error) {
  //     return res.json({ message: "Could not store data." });
  //   }
  //   client.close();
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  let collection;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((err) => {
    collection = client
      .db("product_test")
      .collection("products")
      .find()
      .toArray();
  });
  client.close();
  res.json(collection);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
