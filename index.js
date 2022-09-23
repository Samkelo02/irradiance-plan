import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';

//app.use(express.static('public'))


const app = express();

app.use(express.json());

const db = await sqlite.open({
    filename: './data_plan.db',
    driver: sqlite3.Database
});

console.log('db initialized');

await db.migrate();

app.post('/api/weather', async function(req, res) {

    //showing data based on the time stamp

    const weather = await db.all(`select temperature, ghi_actual from weather where period_start=?`, req.body.period_start);
    
    console.log(weather);
    
    res.json({
        weather
    })

});

app.get('/api/company', async function(req, res) {
    
    const company = await db.all('select *  from company');
    
    res.json({
        company 
    })
});
app.get('/api/weather', async function(req, res) {
    
    const weather = await db.all('select *  from weather');
    
    res.json({
        weather 
    })

});
 app.post('/api/company', async function(req,res){

    const username = req.body.staff_name;

    const password = req.body.password;

    const company = await db.all(`SELECT company_name from company where staff_name =? & password =?`,username&&password);
    console.log(company)
    res.json({
        company
    })
 })



console.log('done');

const PORT = 6001;
app.listen(PORT, function(){
    console.log(`Solar prediction API started at ${PORT}`)
});