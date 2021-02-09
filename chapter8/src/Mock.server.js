import { Server } from "miragejs";

const productData = [
  {
    id: 1,
    name: "Mocha",
    price: 3.5,
    imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
  },
  {
    id: 2,
    name: "Latte",
    price: 3.5,
    imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
  },
  {
    id: 3,
    name: "Vanilla Latte",
    price: 3.5,
    imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
  },
];

const server = new Server({
  routes() {
    this.namespace = "/api";
    this.get("/cart", () => ({ data: [productData[1]] }));
    this.get("/products", () => ({ data: productData }));
    this.get("/profile", () => ({
        name: "Saige McDermott",
        memberSince: "June 12th, 2018",
        recentOrders: [
          { orderId: 12, name: "Latte" },
          { orderId: 27, name: "Cafe Miel" },
        ],
    }));

    this.get("/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ]);
  },
});

export default server;
