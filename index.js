const express = require('express');

const sequelize = require('./config/database');

const aws = require('aws-sdk');

const fs = require('fs');

//  sample import which needs to be handled with a migration
const book = require('./models/book');

const app = express();

// app.get('/', (req, res, next) => {
//     (async function(){
//         try{
//             aws.config.update({
//                 accessKeyId: 'AKIAZMKREFKAKEGYYFFA',
//                 secretAccessKey: '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',
//                 region: 'us-east-1'
//             });
    
//             const s3 = new aws.S3();
    
//             // s3.getObjectsList({
//             //     Bucket: 'libraryBucket'
//             // }, (err, data) => {
//             //     if(err){
//             //         console.log('Error', err);
//             //     } else {
//             //         console.log(data);
//             //     }
//             // })
//             s3.getObject({
//                 Bucket: 'librarybucket',
//                 Key: 'BengaliBooks/Ghare-Phera - Mahasweta Debi.pdf'
//             }, function(err, data) {
//                 if (err) {
//                     console.log("Error", err);
//                 } else {
//                     console.log("Success", data);
//                     // console.log(data.Body.toString('ascii'))
//                     // fs.writeFileSync('sampleBook.pdf', data.Body.toString());
//             }
//     });
//         }
//         catch(e){
//             console.log('Error is: ', e)
//         }
//     })();
    
//     res.send("<h1>Welcome to the home page</h1>");
// });

// sequelize.sync()
// .then(result => {
//     app.listen(8080, () => {
//         console.log(result);
//     });
// })
// .catch(err => {
//     console.log(err);
// });

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/message', (req, res, next) => {
    // console.log(req.body.From);
    // console.log(req.body.Body);

    // res.send(`
    //     <Response>
    //         <Message>
    //             Hello have an awesome day!
    //         </Message>
    //     </Response>
    // `);

    const accountSid = 'AC5aa3e4034613b1d1c6fa220b8b75e9af';
    const authToken = '21f39fd4c4290128039261ca7957d3f7';
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        body: 'Hello this is the testing message',
        from: '+12015817379',
        to: '+61450716200'
    })
    .then(message => console.log(message.sid));
    res.send('hello');
});

app.listen(8080);