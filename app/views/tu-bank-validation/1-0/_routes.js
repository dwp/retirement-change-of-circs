
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
// Add your routes here - above the module.exports line

// ROUTING TO YES OR NO ALREADY RECEIVD LETTER


//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type14', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/bank-or-building-society-details')
  } else {
    res.redirect('/tu-bank-validation/1-0/can-only-use-uk-account.html')
  }

});

//CURRENT RESIDENT ROUTING

// Run this code when a form is submitted to 'current-resident'
router.post('/current-resident1', function (req, res) {

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

//PHONE CONTRACT ROUTING

// Run this code when a form is submitted to 'current-resident'
router.post('/phone-contract1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var phoneContract = req.session.data['/phone-contract']

  // Check whether the variable matches a condition
  if (phoneContract == "02"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q3.html')
  } else if (phoneContract == "tesco-mobile"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q3.html')
  } else if (phoneContract == "vodafone"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q3.html')
  } else if (phoneContract == "virgin-mobile"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q3.html')
  } else if (phoneContract == "three"){
    // Send user to next page
    res.redirect('/tu-bank-validation/1-0/identity-check-q3.html')
  } else {
    res.redirect('/tu-bank-validation/1-0/identity-check-q3.html')
  }

});



module.exports = router