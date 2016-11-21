var Datastore = require('nedb'), db = new Datastore({ filename: 'db/datafile', autoload: true });

var doc = { hello: 'world'
             , n: 5
             , today: new Date()
             , nedbIsAwesome: true
             , notthere: null
             , notToBeSaved: undefined  // Will not be saved
             , fruits: [ 'apple', 'orange', 'pear' ]
             , infos: { name: 'nedb' }
             };

db.insert(doc, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
  console.log(newDoc)
});

db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
  // Two documents were inserted in the database
  // newDocs is an array with these documents, augmented with their _id
  console.log(newDocs)
});

// If there is a unique constraint on field 'a', this will fail
db.insert([{ a: 5 }, { a: 42 }, { a: 5 }], function (err) {
  // err is a 'uniqueViolated' error
  // The database was not modified
  console.log(err)
});

// db = new Datastore({ filename: 'db/planets', autoload: true });

// db.find({ system: 'solar' }, function (err, docs) {
//   // docs is an array containing documents Mars, Earth, Jupiter
//   // If no document is found, docs is equal to []
//   console.log(docs)
// });

// // Finding all planets whose name contain the substring 'ar' using a regular expression
// db.find({ planet: /ar/ }, function (err, docs) {
//   // docs contains Mars and Earth
//   console.log(docs)
// });

// // Finding all inhabited planets in the solar system
// db.find({ system: 'solar', inhabited: true }, function (err, docs) {
//   // docs is an array containing document Earth only
//   console.log(docs)
// });

// // Use the dot-notation to match fields in subdocuments
// db.find({ "humans.genders": 2 }, function (err, docs) {
//   // docs contains Earth
//   console.log(docs)
// });

// // Use the dot-notation to navigate arrays of subdocuments
// db.find({ "completeData.planets.name": "Mars" }, function (err, docs) {
//   // docs contains document 5
//   console.log(docs)
// });

// db.find({ "completeData.planets.name": "Jupiter" }, function (err, docs) {
//   // docs is empty
//   console.log(docs)
// });

// db.find({ "completeData.planets.0.name": "Earth" }, function (err, docs) {
//   // docs contains document 5
//   // If we had tested against "Mars" docs would be empty because we are matching against a specific array element
//   console.log(docs)
// });


// // You can also deep-compare objects. Don't confuse this with dot-notation!
// db.find({ humans: { genders: 2 } }, function (err, docs) {
//   // docs is empty, because { genders: 2 } is not equal to { genders: 2, eyes: true }
//   console.log(docs)
// });

// // Find all documents in the collection
// db.find({}, function (err, docs) {
//   console.log(docs)
// });

// // The same rules apply when you want to only find one document
// db.findOne({ _id: 'id1' }, function (err, doc) {
//   // doc is the document Mars
//   // If no document is found, doc is null
//   console.log(doc)
// });
