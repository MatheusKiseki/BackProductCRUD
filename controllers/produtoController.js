const Produto = require("../models/Produto");

module.exports = {
  async index(req, res) {
    const produtos = await Produto.find().sort({ createdAt: "desc" });

    return res.json(produtos);
  },

  async store(req, res) {
    const { titulo, desc, preco } = req.body;

    if (!titulo || !desc || !preco) {
      return res.json({ msg: "Digite corretamente" });
    }
    const produto = await Produto.create({ titulo, desc, preco });

    return res.json(produto);
  },

  async update(req, res) {
    const { id } = req.params;

    const produtos = await Produto.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.json(produtos);
  },

  async destroy(req, res) {
    const { id } = req.params;

    const produtos = await Produto.findByIdAndDelete(id);

    return res.json({ msg: "Voce tirou o produto do carrinho" });
  },
};
