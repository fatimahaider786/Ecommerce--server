import Product from "../model/product.js";


const seedProducts = async () => {
  try {

    const count = await Product.countDocuments();
    if (count > 0) return;

    await Product.insertMany([
      {
        id: "1",
        name: "Ladies Watch",
        price: 2000,
        imageURL: "https://tse4.mm.bing.net/th/id/OIP.rY14rtolESKppPGA2tvECgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "Beautiful stylish watch"
      },
      {
        id: "2",
        name: "Hand Bag",
        price: 3500,
        imageURL: "https://tse4.mm.bing.net/th/id/OIP.sG_FRcQEx35gh5d_W-PYDQHaGJ?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "Elegant ladies handbag"
      },
      {
        id: "3",
        name: "Shoes",
        price: 4000,
        imageURL: "https://tse4.mm.bing.net/th/id/OIP.plN5D6zqApPCPiJUbtWlsAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "Comfortable shoes"
      }
    ]);

    console.log("Products Seeded");

  } catch (error) {
    console.log("Seed Error:", error.message);
  }
};

seedProducts();

/* ============================
   GET ALL
============================ */

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    res.status(500).json({ message: "Fetch error" });
  }
};

/* ============================
   CREATE
============================ */

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch {
    res.status(500).json({ message: "Create error" });
  }
};

/* ============================
   UPDATE
============================ */

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Product.findOneAndUpdate(
      { id },
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch {
    res.status(500).json({ message: "Update error" });
  }
};

/* ============================
   DELETE
============================ */

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.findOneAndDelete({ id });
    res.json({ message: "Deleted" });

  } catch {
    res.status(500).json({ message: "Delete error" });
  }
};