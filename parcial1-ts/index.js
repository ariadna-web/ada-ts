import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
        return { Books: [] }; // Retorna lista vacía en error para no romper la app
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error(error);
    }
}

app.get('/', (req, res) => {
    res.send('welcome to this api');
});

app.get("/books", (req, res) => {
    const data = readData();
    res.json(data.Books);
});

app.get("/books/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const book = data.Books.find(book => book.id === id);
    if (!book) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(book);
});

app.post("/books", (req, res) => {
    const data = readData();
    const body = req.body;
    const newBook = {
        id: data.Books.length > 0 ? data.Books[data.Books.length - 1].id + 1 : 1,
        ...body,
    }
    data.Books.push(newBook);
    writeData(data);
    res.json(newBook);
});

app.put("/books/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const body = req.body;
    const bookIndex = data.Books.findIndex(book => book.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: "Libro no encontrado para actualizar" });
    }

    data.Books[bookIndex] = {
        ...data.Books[bookIndex],
        ...body,
    };

    writeData(data);
    res.json({ message: "Libro actualizado" });
});

app.delete("/books/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const bookIndex = data.Books.findIndex(book => book.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: "Libro no encontrado para borrar" });
    }

    data.Books.splice(bookIndex, 1);
    writeData(data);
    res.json({ message: "Libro borrado" });
});

app.listen(3000, () => {
    console.log(`el servidor está escuchando en http://localhost:3000`);
}); 