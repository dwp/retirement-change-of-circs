
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
// Add your routes here - above the module.exports line

// ROUTING TO IS THE BANK ACCOUNT IN THE UK

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/owned-account1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['owned-account']

  // Check whether the variable matches a condition
  if (accountType == "own-account"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/bank-or-building-society-details.html')
  } else {
    res.redirect('/tu-bank-validation/1-0/can-only-use-an-account-you-own.html')
  }

});

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
    
      } else if (checkSortCode == "123457"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/check-your-details.html')
    
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
        res.redirect('tu-bank-validation/1-0/you-can-only-use-this-service-with-a-uk-account.html')
    
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

      }  else if (checkSortCode == "123457"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/cannot-confirm-you-own-this-account.html')
    
      } else if (checkSortCode == "000000"){
        // Send user to next page
        res.redirect('tu-bank-validation/1-0/kbv-warmup.html')
      
      }
        
});

   // ROUTING TO KBV 2
    router.post('/stay-length1', function (req, res) {

      // Make a variable and give it the value from 'bank-or-build'
  var currentResident = req.session.data['/current-resident']

  // Check whether the variable matches a condition
  if (currentResident == "less-than-a-year"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q2')
  } else if (currentResident == "less-than-a-year"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q2.html')
  } else if (currentResident == "1-3-years"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q2.html')
  } else if (currentResident == "3-5-years"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q2.html')
  } else if (currentResident == "0ver-8-years"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q2.html')
  } else {
    res.redirect('/tu-bank-validation/1-0/identity-check-q2.html')
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