const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/recipe_db.sqlite3');

//CREATE
router.post('/recipes', (req,res) => {
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let difficulty = req.body.difficulty;
    let serves = req.body.serves;
    let ingredients = req.body.ingredients;
    let method = req.body.method;
    let prep_time = req.body.prep_time;
    let cook_time = req.body.cook_time;
    let nutrition = req.body.nutrition;
    db.run('insert into main (name, image, description, difficulty, serves, ingredients, method, prep_time, cook_time, nutrition) values ($a, $b, $c, $d, $e, $f, $g, $h, $i, $j)', {$a: name, $b: image, $c: description, $d:difficulty, $e: serves, $f: ingredients, $g: method, $h: prep_time, $i: cook_time, $j: nutrition}, (err, row)=>{
        res.json(row);
    })
});



//READ ALL
router.get('/recipes', (req, res, next) => {
    db.all('select * from main', (err, row) => {
        res.json(row);
    });
});

//READ SINGLE
router.get('/recipes/:id', (req,res) => {
    let id = req.params.id;
    db.get('select * from main where id = $id', {$id: id}, (err, row) => {
        if(!id || row == null || row == undefined){
            console.log('Invalid id');
            res.status(404).send('invalid id');
            return;
        } else{
            res.json(row);
        }
    })
});

//UPDATE
router.put('/recipes/update', (req,res) => {
    let id = req.body.id;
    let newName = req.body.newName;
    db.run(`update main set name = '${newName}' where id = ${id};`, (err, row) => {
        res.json(row);
    })
    

});

//DELETE
router.delete('/recipes/:id', (req,res) => {
    let id = req.params.id;
    db.run('delete from main where id = $id', {$id: id}, (err, row) => {
        res.send(`row deleted at id ${id}`);
    })
});

module.exports = router;