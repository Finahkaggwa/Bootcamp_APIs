import express from 'express';
import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import enoughAirtime from './bootcamp/enoughAirtime.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';

const app = express();

app.use(express.static('public'));

// This is to make req.body work
app.use(express.json());

app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;
    if (!sentence) {
        res.json({
            error: 'Please send in a sentence to analyse'
        })
    }
    res.json({
        "longestWord": longestWord(sentence),
        "shortestWord": shortestWord(sentence),
        "sum": wordLengths(sentence)
    });
});


app.get('/api/enough', function(req, res) {
    //  console.log(req.body);
    //  const projectedUsage = req.body.projectedUsage;
      const projectedUsage = req.query.projectedUsage;
     const airtimeAvailable = req.query.airtimeAvailable;

    res.json({
         results : enoughAirtime(projectedUsage, airtimeAvailable)
        //  "message": "We are going places"
    });
});

app.get('/api/totalPhoneBill', function(req, res) {
     const bill = req.query.bill;
     
    res.json({
         Total : totalPhoneBill(bill)
    });
});

const PORT = process.env.PORT || 6007;
app.listen(PORT, function () {
    console.log('api started on port ', PORT)
})






