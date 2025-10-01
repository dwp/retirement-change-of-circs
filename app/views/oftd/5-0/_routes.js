
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line

// ROUTING TO YES OR NO ALREADY MOVED TO ADDRESS

           // ROUTING TO MATCHING ADDRESS OR MANUAL ENTRY
      router.post('/received-letter5', function (req, res) {

        // Make a variable and give it the value from 'bank-or-build'
        var selectReceivedLetter = req.session.data['received-letter']
        console.log("high", req.session.data['received-letter'])
      
        // Check whether the variable matches a condition
        if (selectReceivedLetter == "Yes"){
          // Send user to next page
          res.redirect('/one-login/1-0/privacy-notice.html')
        } else if (selectReceivedLetter == "No"){
          // Send user to next page
          res.redirect('/one-login/1-0/dob.html')
        }
        
      
      });

module.exports = router