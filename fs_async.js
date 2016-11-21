var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs')); // adds Async() versions that return promises
var path = require('path');
var _ = require('lodash');

/** Returns the number of files in the given directory. */
var count_files = async (function (dir) {
    var files = await (fs.readdirAsync(dir));
    var paths = _.map(files, function (file) { return path.join(dir, file); });
    var stats = await (_.map(paths, function (path) { return fs.statAsync(path); })); // parallel!
    return _.filter(stats, function (stat) { return stat.isFile(); }).length;
});

var read_file = async (function (file_name) {
    var data = await (fs.readFileAsync(path.join(__dirname, file_name), {encoding: 'utf-8'}))
    return data
});

// Give it a spin
count_files(__dirname)
    .then(function (num) { console.log('There are ' + num + ' files in ' + __dirname); })
    .catch(function (err) { console.log('Something went wrong: ' + err); });

read_file("readme.md")
    .then(data => { console.log(data) } )
    .catch(err => { console.log('Something went wrong: ' + err) } )
