import express from 'express';
import getGhi from './bootcamp/getGhi.js';



const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function(req, res){

    const sentence = req.query.sentence;

    if (!sentence) {
       res.json({
           error : 'Please send in a sentence to analyze'
       })
   }
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord"  : shortestWord(sentence),
        "sum" : wordLengths(sentence)
    });
});




app.post('/api/phone_bill/total', (req, res) => {

    const {bill, 
           sms_price, 
           call_price } = req.body
    callP = Number(call_price)
    smsP = Number(sms_price)
    console.log();
    let total = totalPhoneBill(bill, callP, smsP)
    console.log(total)

   
    res.json({
        total,
        callP,
        smsP
        
    });
});

let available = 0

app.post('/api/enoughairtime', (req, res) => {
    const usage = req.body.usage
    const available = req.body.available

    console.log(req, body)

    res.json({
        result : enoughAirtime(usage)
        

    })
})

let callP = 2.75
let smsP = 0.65
app.post('/api/phonebill/total', (req, res) => {
    console.log('called post route...')

    const bill = req.body.bill
    console.log(req.body)
    
    res.json ({
        total: totalPhoneBill(bill, callP, smsP)
    })

    //const totalPhoneBill = req.body.totalPhoneBill

});

app.get('/api/phonebill/prices', (req, res) => {

    res.json({
        call : callP,
        sms : smsP
    })
})

app.post('/api/phonebill/price', (req, res) => {

    const type = req.body.type
    const price = req.body.price

    if(type === 'sms') {
        smsP = price
    } 
    else if(type === 'call') {
        callP = price
    }

    res.json ({
        type, price
    })
})

app.post('/api/phonebill', (req, res) =>{
    const{bill,sms_price,call_price} = req.body
    callP = Number(call_price)
    smsP = Number(sms_price)
    console.log();
    let total = totalPhoneBill(bill, callP, smsP)
    console.log(total)

    res.json({
        total, 
        callP,
        smsP
    })
})




// app.get('/api/phonebill/total', (req, res) => {
//     const alerts = req.query.bill;
//     console.log(alerts)
//     res.json({
//         total: totalPhoneBill(alerts)
//     })
// });

app.get('/api/phonebill/prices', (req, res) => {
    
});

// app.post('/api/phonebill/prices', (req, res) => {

// })




const PORT = process.env.PORT || 6003;
app.listen(PORT, function() {
    console.log('api started on port ', PORT)
})