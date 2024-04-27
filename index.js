import express from 'express';
import fs, { read } from "fs";

const app=express();

const readData = () =>{
    try{
    const data = fs.readFileSyncfs("./db.json");
    fs.readFileSync("./db.json");
    return(JSON.parse(date));
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
    try{
        fs.writeFileSync('./db.json', JSON.stringify(data))
        return(JSON.parse(date));
    } catch (error) {
        console.log(error);
    }
}

app.get("/", (req,res) =>{
    res.send("bienvenido a mi primera API con node js :) ")
});

app.get("/libros", (req, res) =>{
    const data = readData();
    res.json(data.libros);
});

app.get("/libros/:id",(req,res) =>{
    const data = readData();
    const id = req.parseInt(req.params.id);
    const libro = data.books.find((libro)=> libro.id === id);
    res.json(libro);
});

app.post("/libros", (req,res) => {
    const data = readData();
    const body = req.body;
});



app.listen(3000,() =>{
    console.log('servidor en el puerto 3000');
});

