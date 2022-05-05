const express = require('express');
const app = express();

app.get('/api/fibonacci', (req,res) => {

    const len = req.query['len'];
    console.log(`Len sequence: ${len}`);

    if (len == 1){
        return res.json([0,1]);
    } else {
        let fib = [];
        fib[0] = 0;
        fib[1] = 1;

        for (let index = 2; index < len; index++) {
            fib[index] = fib[index - 2] + fib[index - 1];
        }
        console.log(`Result of the fibonacci sequence: ${fib}`);
        return res.json(fib);
    }
});

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});