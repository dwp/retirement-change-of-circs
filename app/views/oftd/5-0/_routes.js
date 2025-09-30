
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line

// ROUTING TO DOB eligibility for all citizens journey
    router.post('/dob4', function (req, res) {

      // Make a variable and give it the value from 'bank-or-build'
      var selectCitizenRecordYear = req.session.data['citizen-record-year']
      console.log("high", req.session.data['citizen-record-year'])
    
      // Check whether the variable matches a condition
      if (selectCitizenRecordYear == "1956"){
        // Send user to next page
        res.redirect('/oftd/5-0/changes-you-can-report-gysp2.html')
    
      } else if (selectCitizenRecordYear == "1955"){
        // Send user to next page
        res.redirect('/oftd/5-0/changes-you-can-report-legacy.html')
      }
        
});

              // ROUTING TO MATCHING ADDRESS OR MANUAL ENTRY
      router.post('/received-letter5', function (req, res) {

        // Make a variable and give it the value from 'bank-or-build'
        var selectReceivedLetter = req.session.data['received-letter']
        console.log("high", req.session.data['received-letter'])
      
        // Check whether the variable matches a condition
        if (selectReceivedLetter == "Yes"){
          // Send user to next page
          res.redirect('/oftd/5-0/changes-you-can-report-gysp.html')
        } else if (selectReceivedLetter == "No"){
          // Send user to next page
          res.redirect('/oftd/5-0//dob.html')
        }
        
      
      });


module.exports = router