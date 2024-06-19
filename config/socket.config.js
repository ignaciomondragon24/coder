const { Server } = require("socket.io");
const ProductManager = require("../managers/productManager");

const productManager = new ProductManager();

const config = (serverHTTP) => {
    const serverIO = new Server(serverHTTP);

    serverIO.on("connection", (socket) => {
        const id = socket.client.id;
        console.log("Conexión establecida", id);

        socket.on("new_product_back", async (data) => {
            console.log("Nuevo producto", data);
            const newProduct = await productManager.addProduct(data);
            serverIO.emit("stock_actualizado", {});
        });


        socket.on("disconnect", () => {
            console.log("Se desconecto un cliente");
        });

        socket.on("delete_product", async (id) => {
            const success = await productManager.deleteProduct(id);
            if (success) {
                console.log("Producto eliminado", id);
                serverIO.emit("stock_actualizado", {});
            }
        });
    });
};

module.exports = { config };