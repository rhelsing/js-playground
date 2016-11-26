const csv = require('neat-csv')
const fs = require('fs')

var stream = fs.createReadStream('/Users/ryanhelsing/Desktop/parsle/mv_ben_convert/in/BCIEmpBeneFile20160218.csv')

csv(stream).then(data => {
    //data = csv as object
    console.log(data)
    //=> [{type: 'unicorn', part: 'horn'}, {type: 'rainbow', part: 'pink'}]
});
