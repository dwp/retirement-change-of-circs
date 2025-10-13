
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
// Add your routes here - above the module.exports line

// ROUTING TO YES OR NO ALREADY RECEIVD LETTER


router.post('/received-letter6', function (req, res) {

  // Make a variable and give it the value from 'received-letter'
  var selectReceivedLetter = req.session.data['received-letter']
  console.log("high", req.session.data['received-letter'])
      
  // Check whether the variable matches a condition
  if (selectReceivedLetter == "Yes"){
    // Send user to next page
          res.redirectInternal('/oftd/6-0/changes-you-can-report-gysp.html')
  } else if (selectReceivedLetter == "No"){
    // Send user to next page
    res.redirectInternal('/oftd/6-0/dob.html')
   }
        
      
});

// ROUTING TO DOB eligibility for all citizens journey
router.post('/dob5', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var selectCitizenRecordYear = req.session.data['citizen-record-year']
  console.log("high", req.session.data['citizen-record-year'])
    
  // Check whether the variable matches a condition
  if (selectCitizenRecordYear == "1956"){
    // Send user to next page
    res.redirectInternal('/oftd/6-0/changes-you-can-report-gysp2')
    
  } else if (selectCitizenRecordYear == "1955"){
    // Send user to next page
    res.redirectInternal('/oftd/6-0/changes-you-can-report-legacy')
  }
        
});     

module.exports = router