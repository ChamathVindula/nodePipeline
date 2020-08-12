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

app.post('/message', (req, res, next) => {
    console.log(req.body.From);
    console.log(req.body.Body);

    res.send(`
        <Response>
            <Message>
                Hello have an awesome day!
            </Message>
        </Response>
    `);
});

app.listen(8080);