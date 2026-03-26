
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/owned-account2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['owned-account']
  console.log("high", req.session.data['sort-code'])

  // Check whether the variable matches a condition
  if (accountType == "own-account"){
    // Send user to next page
    res.redirect('/tu-bank-validation/legacy/v1/can-we-pay.html')
  } else {
    res.redirect('/tu-bank-validation/legacy/v1/can-only-use-an-account-you-own.html')
  }

});

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/can-we-pay-3', function (req, res) {

  // Make a variable and give it the value from 'can-we-pay'
  var canWePay = req.session.data['can-we-pay']
  console.log("high", req.session.data['sort-code'])

  // Check whether the variable matches a condition
  if (canWePay == "Yes"){
    // Send user to next page
    res.redirect('/tu-bank-validation/legacy/v1/bank-or-building-society-details.html')
  } else {
    res.redirect('/tu-bank-validation/legacy/v1/call-us.html')
  }

});

// ROUTING TO CHECK YOUR DETAILS
   // Run this code when a form is submitted to 'bank-validation1'
    router.post('/email-address-2', function (req, res) {

      // Make a variable and give it the value from 'bank-or-build'
      var checkSortCode = req.session.data['sort-code']
      console.log("high", req.session.data['sort-code'])
    
      // Check whether the variable matches a condition
      if (checkSortCode == "123456"){
        // Send user to next page
        res.redirect('/tu-bank-validation/legacy/v1/email-address.html')
    
      } else if (checkSortCode == "123457"){
        // Send user to next page
        res.redirect('/tu-bank-validation/legacy/v1/email-address.html')
    
      } else if (checkSortCode == "000000"){
        // Send user to next page
        res.redirect('/tu-bank-validation/legacy/v1/check-your-details.html')

      } else if (checkSortCode == "000001"){
        // Send user to next page
        res.redirect('/tu-bank-validation/legacy/v1/we-cannot-find-this-account.html')
      
      } else if (checkSortCode == "000002"){
        // Send user to next page
        res.redirect('/tu-bank-validation/legacy/v1/we-cannot-pay-money-to-this-account.html')
      
      } else if (checkSortCode == "000003"){
        // Send user to next page
        res.redirect('/tu-bank-validation/legacy/v1/you-can-only-use-this-service-with-a-uk-account.html')
    
      }
        
});

// ROUTING TO VALIDATE DETAILS WITH TRANSUNION
   // Run this code when a form is submitted to 'bank-validation1'
    router.post('/bank-validation-3', function (req, res) {

      // Make a variable and give it the value from 'bank-or-build'
      var checkSortCode = req.session.data['sort-code']
      console.log("high", req.session.data['sort-code'])
    
      // Check whether the variable matches a condition
      if (checkSortCode == "123456"){
        // Send user to next page
        res.redirect('/tu-bank-validation/legacy/v1/confirm-change-request.html')

      }  else if (checkSortCode == "123457"){
        // Send user to next page
        res.redirect('tu-bank-validation/legacy/v1/cannot-confirm-you-own-this-account.html')
    
      } else if (checkSortCode == "000000"){
        // Send user to next page
        res.redirect('tu-bank-validation/legacy/v1/kbv-warmup.html')
      
      }
        
});













module.exports = router