
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
// Add your routes here - above the module.exports line

// ROUTING TO IS THE BANK ACCOUNT IN THE UK

// Run this code when a form is submitted to 'account-type'
router.post('/account-type14', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/bank-or-building-society-details.html')
  } else {
    res.redirect('/tu-bank-validation/1-0/can-only-use-uk-account.html')
  }

});


   // ROUTING TO CHECK YOUR DETAILS
   // Run this code when a form is submitted to 'bank-validation1'
    router.post('/bank-validation1', function (req, res) {

      // Make a variable and give it the value from 'bank-or-build'
      var checkSortCode = req.session.data['sort-code']
      console.log("high", req.session.data['sort-code'])
    
      // Check whether the variable matches a condition
      if (checkSortCode == "123456"){
        // Send user to next page
        res.redirect('/tu-bank-validation/1-0/check-your-details.html')
    
      } else if (checkSortCode == "000000"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/check-your-details.html')

      } else if (checkSortCode == "000001"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/we-cannot-find-this-account.html')
      
      } else if (checkSortCode == "000002"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/we-cannot-pay-money-into-this-account.html')
      
      } else if (checkSortCode == "000003"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/you-can-only-use-this-service-with-a-uk-account.html.html')
    
      }
        
});


   // ROUTING TO VALIDATE DETAILS WITH TRANSUNION
   // Run this code when a form is submitted to 'bank-validation1'
    router.post('/bank-validation2', function (req, res) {

      // Make a variable and give it the value from 'bank-or-build'
      var checkSortCode = req.session.data['sort-code']
      console.log("high", req.session.data['sort-code'])
    
      // Check whether the variable matches a condition
      if (checkSortCode == "123456"){
        // Send user to next page
        res.redirect('/tu-bank-validation/1-0/you-have-changed-your-bank-details.html')
    
      } else if (checkSortCode == "000000"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/kbv-warmup.html')
      
      }
        
});

   // ROUTING TO KBV 2
    router.post('/stay-length1', function (req, res) {

      // Make a variable and give it the value from 'sort-code'
      var stayLength = req.session.data['stay-length']
      console.log("high", req.session.data['stay-length'])
    
      // Check whether the variable matches a condition
      if (stayLength == "less-than-a-year"){
        // Send user to next page
        res.redirect('/tu-bank-validation/1-0/kbv-2.html')
    
      } else if (stayLength == ""){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/we-cannot-find-this-account.html')
    
      }
        
});

   // ROUTING TO KBV 3
    router.post('/mobile-phone-provider1', function (req, res) {

      // Make a variable and give it the value from 'sort-code'
      var mobilePhoneProvider = req.session.data['mobile-phone-provider']
      console.log("high", req.session.data['mobile-phone-provider'])
    
      // Check whether the variable matches a condition
      if (mobilePhoneProvider == "02"){
        // Send user to next page
        res.redirect('/tu-bank-validation/1-0/kbv-3.html')
    
      } else if (mobilePhoneProvider== ""){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/we-cannot-find-this-account.html')
    
      }
        
});

// ROUTING TO VALIDATION CHECK
    router.post('/store-card-provider1', function (req, res) {

      // Make a variable and give it the value from 'sort-code'
      var storeCardProvider = req.session.data['store-card-provider']
      console.log("high", req.session.data['store-card-provider'])
    
      // Check whether the variable matches a condition
      if (storeCardProvider == "barclays"){
        // Send user to next page
        res.redirect('/tu-bank-validation/1-0/you-have-changed-your-bank-details.html')
    
      } else if (storeCardProvider == "amazon"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/kbv-failed.html')
    
      }
        
});




module.exports = router