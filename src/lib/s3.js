const aws = require('aws-sdk');
const fs = require('fs');

const s3 = new aws.S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET,
});

exports.upload = (req, res, next) => {
    if (!req.file) {
        res.sendStatus(500);
        return;
    }
    const { filename, mimetype, size, path } = req.file;
    s3.putObject({
        Bucket: 'alsimageuniverse',
        ACL: 'public-read',
        Key: filename,
        Body: fs.createReadStream(path),
        ContentType: mimetype,
        ContentLength: size,
    })
        .promise()
        .then(() => {
            console.log('upload to bucket was successful');
            next();
        })
        .catch((err) => {
            console.log('upload to AWS bucket was unsuccessful', err);
            res.sendStatus(500);
        });
};
