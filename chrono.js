var chrono = require('chrono-node')
var moment = require('moment')

console.log(chrono.parseDate('3/9/1991'))

var date = chrono.parseDate('3/9/1991')
var m_date = moment(date).add(7, 'days').subtract(2, 'months').get('year')

console.log(m_date)
