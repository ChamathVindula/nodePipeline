const express = require('express');

const sequelize = require('./config/database');

const aws = require('aws-sdk');

// sample import which needs to be handled with a migration
// const book = require('./models/book');

// const app = express();

// app.get('/', (req, res, next) => {
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
// })

(async function(){
    try{
        aws.config.update({
            accessKeyId: 'your access key id',
            secretAccessKey: 'your secret key',
            region: 'us-east-1'
        });

        const s3 = new aws.S3();

        s3.listObjects({
            Bucket: 'librarybucket'
        }, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data);
            }
          });
    }
    catch(e){
        console.log('error is: ', e)
    }
    debugger;
})();

