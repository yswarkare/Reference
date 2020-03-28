const express = require("express");
const app = express();
const db = require("./database")

app.use(express.json());

app.post("/", async (req, res) => {
    console.log("I'm connected to app.use");
    try{
        const {body} = req;
        await db.query("CREATE table if not exists songs(id serial primary key, songName varchar(100), singerName varchar(50), length varchar(10), releaseYear varchar(4))");
        const song = await db.query("insert into songs (id, songName, singerName, length, releaseYear) values($1, $2, $3, $4, $5) returning *", [body.songName, body.singerName, body.length, body.releaseYear]);
        console.log("song", song);
        res.send(song.rows[0]);
    } catch (error) {
        console.log(error);
    }
});

// app.use("/", async (req, res) => {
//     console.log("I'm connected to app.use");
//     try{
//         const {body} = req;
//         await db.query("");
//     } catch (error) {
//         console.log(error);
//     }
// });

module.exports = app;