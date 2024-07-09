const express = require('express');
const { v1 } = require('uuid');
const router = express.Router()



function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line

//V1-0
//ELIGIBILITY QUESTION ROUTING
// Run this code when a form is submitted to 'claim-date'
router.post('/claim-date', function (req, res) {

  // Make a variables and give it the values from year, month, day
  var claimYear = req.session.data['sp-claim-year']
  var claimMonth = req.session.data['sp-claim-month']
  var claimDay = req.session.data['sp-claim-day']

  // Check whether the variable matches a condition
  if (claimYear <= "2016" && claimMonth <= "4" && claimDay <= "5") {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-0/ineligible')
  } else {
    // Send user to next page
    res.redirect('/initial-ideas/1-0/eligibility-2')
  }

});

// Run this code when a form is submitted to 'invited-answer'
router.post('/invited-answer', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/initial-ideas/1-0/eligibility-3')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-0/ineligible')
  }

});

// Run this code when a form is submitted to 'bank-answer'
router.post('/bank-answer', function (req, res) {

  // Make a variable and give it the value from 'bank-change'
  var needToUpdateBank = req.session.data['bank-change']

  // Check whether the variable matches a condition
  if (needToUpdateBank == "yes"){
    // Send user to next page
    res.redirect('/initial-ideas/1-0/eligibility-4')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-0/ineligible')
  }

});

// Run this code when a form is submitted to 'overseas-answer'
router.post('/overseas-answer', function (req, res) {

  // Make a variable and give it the value from 'overseas'
  var beenOverseas = req.session.data['overseas']

  // Check whether the variable matches a condition
  if (beenOverseas == "no"){
    // Send user to next page
    res.redirect('/initial-ideas/1-0/idv-placeholder')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-0/ineligible')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'change'
router.post('/change', function (req, res) {

  // Make a variable and give it the value from 'change-bank"'
  var changeAccount = req.session.data['change-bank']

  // Check whether the variable matches a condition
  if (changeAccount == "yes"){
    // Send user to next page
    res.redirect('/initial-ideas/1-0/bank-change-1')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-0/end')
  }

});

// Run this code when a form is submitted to 'account-type'
router.post('/account-type', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/initial-ideas/1-0/bank-change-2')
  } else {
    res.redirect('/initial-ideas/1-0/end-overseas')
  }

});

//V1-1
//ELIGIBILITY QUESTION ROUTING
// Run this code when a form is submitted to 'claim-date1'
router.post('/claim-date1', function (req, res) {

  // Make a variables and give it the values from year, month, day
  var claimYear = req.session.data['sp-claim-year']
  var claimMonth = req.session.data['sp-claim-month']
  var claimDay = req.session.data['sp-claim-day']

  // Check whether the variable matches a condition
  if (claimYear <= "2016" && claimMonth <= "4" && claimDay <= "5") {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-1/ineligible')
  } else {
    // Send user to next page
    res.redirect('/initial-ideas/1-1/eligibility-2')
  }

});

// Run this code when a form is submitted to 'invited-answer1'
router.post('/invited-answer1', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/initial-ideas/1-1/eligibility-4')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-1/ineligible')
  }

});



// Run this code when a form is submitted to 'overseas-answer1'
router.post('/overseas-answer1', function (req, res) {

  // Make a variable and give it the value from 'overseas'
  var beenOverseas = req.session.data['overseas']

  // Check whether the variable matches a condition
  if (beenOverseas == "no"){
    // Send user to next page
    res.redirect('/initial-ideas/1-1/idv-placeholder')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-1/ineligible')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'change1'
router.post('/change1', function (req, res) {

  // Make a variable and give it the value from 'change-bank"'
  var changeAccount = req.session.data['change-bank']

  // Check whether the variable matches a condition
  if (changeAccount == "yes"){
    // Send user to next page
    res.redirect('/initial-ideas/1-1/bank-change-1')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-1/end')
  }

});

// Run this code when a form is submitted to 'account-type1'
router.post('/account-type1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/initial-ideas/1-1/bank-change-2')
  } else {
    res.redirect('/initial-ideas/1-1/end-overseas')
  }

});

//V1-2
//ELIGIBILITY QUESTION ROUTING
// Run this code when a form is submitted to 'claim-date2'
router.post('/claim-date2', function (req, res) {

  // Make a variables and give it the values from year, month, day
  var claimYear = req.session.data['sp-claim-year']
  var claimMonth = req.session.data['sp-claim-month']
  var claimDay = req.session.data['sp-claim-day']

  // Check whether the variable matches a condition
  if (claimYear <= "2016" && claimMonth <= "4" && claimDay <= "5") {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-2/ineligible')
  } else {
    // Send user to next page
    res.redirect('/initial-ideas/1-2/eligibility-2')
  }

});

// Run this code when a form is submitted to 'invited-answer2'
router.post('/invited-answer2', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/initial-ideas/1-2/idv-placeholder')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-2/ineligible')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'change2'
router.post('/change2', function (req, res) {

  // Make a variable and give it the value from 'change-bank"'
  var changeAccount = req.session.data['change-bank']

  // Check whether the variable matches a condition
  if (changeAccount == "yes"){
    // Send user to next page
    res.redirect('/initial-ideas/1-2/bank-change-1')
  } else {
    // Send user to ineligible page
    res.redirect('/initial-ideas/1-2/end')
  }

});

// Run this code when a form is submitted to 'account-type2'
router.post('/account-type2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/initial-ideas/1-2/bank-change-2')
  } else {
    res.redirect('/initial-ideas/1-2/end-overseas')
  }

});

// MVP v1.0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/mvp/1-0/idv-cred-confusion')
  } else {
    // Send user to ineligible page
    res.redirect('/mvp/1-0/ineligible')
  }

});

  // Run this code when a form is submitted to 'idv-cred-confusion'
router.post('/idv-redirect', function (req, res) {

  // Make a variable and give it the value from 'idv-choice'
  var idvRedirect = req.session.data['idv-choice']

  // Check whether the variable matches a condition
  if (idvRedirect == "sign-in"){
    // Send user to sign in IDV prototype page
    res.redirect('https://prototype-dth.herokuapp.com/auth/dev-ready/sign-in?service-name=manage-your-state-pension')
  } else {
    // Send user to register
    res.redirect('/mvp/1-0/idv-recreated-pages/register')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type-mvp', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/mvp/1-0/bank-change-2')
  } else {
    res.redirect('/mvp/1-0/end-overseas')
  }

});

// MVP 2-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited2', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/mvp/2-0/idv-recreated-pages/sign-in')
  } else {
    // Send user to ineligible page
    res.redirect('/mvp/2-0/ineligible')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type-mvp2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/mvp/2-0/bank-change-2')
  } else {
    res.redirect('/mvp/2-0/end-overseas')
  }

});

// MVP 3-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited3', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/mvp/3-0/idv-recreated-pages/register')
  } else {
    // Send user to ineligible page
    res.redirect('/mvp/3-0/ineligible')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type-mvp3', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/mvp/3-0/bank-change-2')
  } else {
    res.redirect('/mvp/3-0/end-overseas')
  }

});

// MVP 4-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited4', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/mvp/4-0/idv-recreated-pages/register')
  } else {
    // Send user to ineligible page
    res.redirect('/mvp/4-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type-mvp4', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/mvp/4-0/bank-or-building-society-details')
  } else {
    res.redirect('/mvp/4-0/can-only-use-uk-account.html')
  }

});


// FREQUENCY 1-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited5', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/frequency/1-0/idv-recreated-pages/sign-in')
  } else {
    // Send user to ineligible page
    res.redirect('/frequency/1-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type5', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/frequency/1-0/bank-or-building-society-details')
  } else {
    res.redirect('/frequency/1-0/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/week', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var paidWeekly = req.session.data['paid-weekly']

  // Check whether the variable matches a condition
  if (paidWeekly == "Yes"){
    // Send user to next page
    res.redirect('/frequency/1-0/check-your-details&frequency-single.html')
  } else {
    res.redirect('/frequency/1-0/payment-frequency-not-changed.html')
  }
});


// FREQUENCY 2-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited6', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/frequency/2-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/frequency/2-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type6', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/frequency/2-0/bank-or-building-society-details')
  } else {
    res.redirect('/frequency/2-0/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/week2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var paidWeekly = req.session.data['paid-weekly']

  // Check whether the variable matches a condition
  if (paidWeekly == "Yes"){
    // Send user to next page
    res.redirect('/frequency/2-0/check-your-details&frequency-single.html')
  } else {
    res.redirect('/frequency/2-0/payment-frequency-not-changed.html')
  }

});

// FREQUENCY 3-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited7', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/frequency/3-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/frequency/3-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type7', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/frequency/3-0/bank-or-building-society-details')
  } else {
    res.redirect('/frequency/3-0/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/week3', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var paidWeekly = req.session.data['paid-weekly']

  // Check whether the variable matches a condition
  if (paidWeekly == "Yes"){
    // Send user to next page
    res.redirect('/frequency/3-0/check-your-details&frequency-single.html')
  } else {
    res.redirect('/frequency/3-0/payment-frequency-not-changed.html')
  }

});

//PAYMENT FREQUENCY MULTIPLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/how-often', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/frequency/3-0/payment-frequency-not-changed.html')
  } else {
    res.redirect('/frequency/3-0/check-your-details&frequency.html')
  }

});

// FREQUENCY 4-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited8', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/frequency/4-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/frequency/4-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type8', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/frequency/4-0/bank-or-building-society-details')
  } else {
    res.redirect('/frequency/4-0/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/week4', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var paidWeekly = req.session.data['paid-weekly']

  // Check whether the variable matches a condition
  if (paidWeekly == "Yes"){
    // Send user to next page
    res.redirect('/frequency/4-0/check-your-details&frequency-single.html')
  } else {
    res.redirect('/frequency/4-0/payment-frequency-not-changed.html')
  }

});

//PAYMENT FREQUENCY MULTIPLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/how-often1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/frequency/4-0/payment-frequency-not-changed.html')
  } else {
    res.redirect('/frequency/4-0/check-your-details&frequency.html')
  }

});

// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/frequency/4-0/payment-frequency-not-changed.html')
  } else {
    res.redirect('/frequency/4-0/check-your-details&frequency.html')
  }

});

// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/frequency/4-0/payment-frequency-not-changed.html')
  } else {
    res.redirect('/frequency/4-0/check-your-details&frequency-single.html')
  }

});


// FREQUENCY 5-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited9', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/frequency/5-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/frequency/5-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type9', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/frequency/5-0/bank-or-building-society-details')
  } else {
    res.redirect('/frequency/5-0/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

//PAYMENT FREQUENCY MULTIPLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/how-often5', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/frequency/5-0/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/frequency/5-0/check-how-often-we-will-pay-you.html')
  }

});

// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt5', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/frequency/5-0/keep-how-often-we-will-pay-you&alt.html')
  } else {
    res.redirect('/frequency/5-0/check-how-often-we-will-pay-you.html')
  }

});

// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often-single5', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/frequency/5-0/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/frequency/5-0/check-how-often-we-will-pay-you.html')
  }

});



// EMAIL AND PAYMENT SCHEDULE 1-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited10', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/email-and-payment-schedule/1-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type10', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/bank-or-building-society-details')
  } else {
    res.redirect('/email-and-payment-schedule/1-0/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

//PAYMENT FREQUENCY MULTIPLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/how-often6', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/email-and-payment-schedule/1-0/frequency-email/would-you-like-email-confirmation.html')
  }

});

// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt6', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/keep-how-often-we-will-pay-you&alt.html')
  } else {
    res.redirect('/email-and-payment-schedule/1-0/frequency-email/would-you-like-email-confirmation.html')
  }

});

// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often-single6', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/email-and-payment-schedule/1-0/frequency-email/would-you-like-email-confirmation.html')
  }

});

// DO YOU WANT EMAIL BANK
router.post('/email-conf-bank', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyBankConf = req.session.data['bank-email']

  // Check whether the variable matches a condition
  if (frequencyBankConf == "bank-confirmation-yes"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/bank-email/email.html')
  } else {
    res.redirect('/email-and-payment-schedule/1-0/check-your-details.html')
  }

});

// DO YOU WANT EMAIL FREQUENCY
router.post('/email-conf-frequency', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyEmailConf = req.session.data['frequency-email']

  // Check whether the variable matches a condition
  if (frequencyEmailConf == "frequency-confirmation-yes"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/frequency-email/email.html')
  } else {
    res.redirect('/email-and-payment-schedule/1-0/check-how-often-we-will-pay-you.html')
  }

});

// ROUTING TO RIGHT CONFIRMATION VERSION FOR THE FREQUENCY CHANGE SCENARIO SELECTED
router.post('/frequency-scenario', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyScenario = req.session.data['frequency-scenario-select']

  // Check whether the variable matches a condition
  if (frequencyScenario == "1"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/1-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&1.html')
  } else if (frequencyScenario == "2"){
    res.redirect('/email-and-payment-schedule/1-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&2.html')
  } else if (frequencyScenario == "3"){
    res.redirect('/email-and-payment-schedule/1-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&3.html')
  } else {
    res.redirect('/email-and-payment-schedule/1-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&1.html')
  }

});


// EMAIL AND PAYMENT SCHEDULE 2-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited11', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/email-and-payment-schedule/2-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type11', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/bank-or-building-society-details')
  } else {
    res.redirect('/email-and-payment-schedule/2-0/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

//PAYMENT FREQUENCY MULTIPLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/how-often7', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/email-and-payment-schedule/2-0/frequency-email/would-you-like-email-confirmation.html')
  }

});

// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt7', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/keep-how-often-we-will-pay-you&alt.html')
  } else {
    res.redirect('/email-and-payment-schedule/2-0/frequency-email/would-you-like-email-confirmation.html')
  }

});

// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often-single7', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/email-and-payment-schedule/2-0/frequency-email/would-you-like-email-confirmation.html')
  }

});

// DO YOU WANT EMAIL BANK
router.post('/email-conf-bank1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyBankConf = req.session.data['bank-email']

  // Check whether the variable matches a condition
  if (frequencyBankConf == "bank-confirmation-yes"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/bank-email/email.html')
  } else {
    res.redirect('/email-and-payment-schedule/2-0/check-your-details.html')
  }

});

// DO YOU WANT EMAIL FREQUENCY
router.post('/email-conf-frequency1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyEmailConf = req.session.data['frequency-email']

  // Check whether the variable matches a condition
  if (frequencyEmailConf == "frequency-confirmation-yes"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/frequency-email/email.html')
  } else {
    res.redirect('/email-and-payment-schedule/2-0/check-how-often-we-will-pay-you.html')
  }

});

// ROUTING TO RIGHT CONFIRMATION VERSION FOR THE FREQUENCY CHANGE SCENARIO SELECTED
router.post('/frequency-scenario1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyScenario = req.session.data['frequency-scenario-select']

  // Check whether the variable matches a condition
  if (frequencyScenario == "1"){
    // Send user to next page
    res.redirect('/email-and-payment-schedule/2-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&1.html')
  } else if (frequencyScenario == "2"){
    res.redirect('/email-and-payment-schedule/2-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&2.html')
  } else if (frequencyScenario == "3"){
    res.redirect('/email-and-payment-schedule/2-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&3.html')
  } else {
    res.redirect('/email-and-payment-schedule/2-0/frequency-confirmations/you-have-changed-how-often-we-pay-you&1.html')
  }

});


// CONTACT DETAILS CHANGE 1-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited12', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/contact/1-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/contact/1-0/cannot-use-service')
  }

});

//BANK QUESTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type12', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/contact/1-0/change-bank/bank-or-building-society-details')
  } else {
    res.redirect('/contact/1-0/change-bank/can-only-use-uk-account.html')
  }

});

//PAYMENT FREQUENCY SINGLE OPTION ROUTING

//PAYMENT FREQUENCY MULTIPLE OPTION ROUTING

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/how-often8', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/check-how-often-we-will-pay-you')
  }

});

// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt8', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/keep-how-often-we-will-pay-you&alt.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/check-how-often-we-will-pay-you')
  }

});



// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often-single8', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/2-0/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/2-0/change-frequency/check-how-often-we-will-pay-you')
  }

});

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/how-often9', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/2-0/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/2-0/change-frequency/check-how-often-we-will-pay-you')
  }

});


// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt9', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/contact/2-0/change-frequency/keep-how-often-we-will-pay-you&alt.html')
  } else {
    res.redirect('/contact/2-0/change-frequency/check-how-often-we-will-pay-you')
  }

});

// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often-single9', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/2-0/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/2-0/change-frequency/check-how-often-we-will-pay-you')
  }

});



// ROUTING TO RIGHT CONFIRMATION VERSION FOR THE FREQUENCY CHANGE SCENARIO SELECTED
router.post('/frequency-scenario2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyScenario = req.session.data['frequency-scenario-select']

  // Check whether the variable matches a condition
  if (frequencyScenario == "1"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/you-have-changed-how-often-we-pay-you&1.html')
  } else if (frequencyScenario == "2"){
    res.redirect('/contact/1-0/change-frequency/you-have-changed-how-often-we-pay-you&2.html')
  } else if (frequencyScenario == "3"){
    res.redirect('/contact/1-0/change-frequency/you-have-changed-how-often-we-pay-you&3.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/you-have-changed-how-often-we-pay-you&1.html')
  }

});

// ROUTING TO RIGHT CONFIRMATION VERSION FOR THE FREQUENCY CHANGE SCENARIO SELECTED
router.post('/frequency-scenario3', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyScenario = req.session.data['frequency-scenario-select']

  // Check whether the variable matches a condition
  if (frequencyScenario == "1"){
    // Send user to next page
    res.redirect('/contact/2-0/change-frequency/you-have-changed-how-often-we-pay-you&1.html')
  } else if (frequencyScenario == "2"){
    res.redirect('/contact/2-0/change-frequency/you-have-changed-how-often-we-pay-you&2.html')
  } else if (frequencyScenario == "3"){
    res.redirect('/contact/2-0/change-frequency/you-have-changed-how-often-we-pay-you&3.html')
  } else {
    res.redirect('/contact/2-0/change-frequency/you-have-changed-how-often-we-pay-you&1.html')
  }

});


// DO YOU WANT EMAIL BANK
router.post('/email-conf-bank2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyBankConf = req.session.data['bank-email']

  // Check whether the variable matches a condition
  if (frequencyBankConf == "bank-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-bank/bank-email/email.html')
  } else {
    res.redirect('/contact/1-0/change-bank/check-your-details.html')
  }

});


// DO YOU WANT EMAIL BANK
router.post('/email-conf-bank3', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyBankConf = req.session.data['bank-email']

  // Check whether the variable matches a condition
  if (frequencyBankConf == "bank-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/2-0/email-confirmation/email.html')
  } else {
    res.redirect('/contact/2-0/email-confirmation/email.html')
  }

});

// DO YOU WANT EMAIL FREQUENCY
router.post('/email-conf-frequency2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyEmailConf = req.session.data['frequency-email']

  // Check whether the variable matches a condition
  if (frequencyEmailConf == "frequency-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/frequency-email/email.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/check-how-often-we-will-pay-you.html')
  }

});

// DO YOU WANT EMAIL CONTACT DETAILS - CHANGE HOME PHONE
router.post('/email-conf-phone1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var phoneEmailConf = req.session.data['phone-change-email']

  // Check whether the variable matches a condition
  if (phoneEmailConf == "phone-change-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-home-phone/email/email.html')
  } else {
    res.redirect('/contact/1-0/change-home-phone/check-your-details.html')
  }

});

// DO YOU WANT EMAIL CONTACT DETAILS - ADD HOME PHONE
router.post('/email-conf-phone2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var phoneEmailConf2 = req.session.data['phone-add-email']

  // Check whether the variable matches a condition
  if (phoneEmailConf2 == "phone-add-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-home-phone/email-add/email.html')
  } else {
    res.redirect('/contact/1-0/change-home-phone/check-your-details-add.html')
  }

});

// DO YOU WANT EMAIL CONTACT DETAILS - REMOVE HOME PHONE
router.post('/email-conf-phone3', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var phoneEmailConf3 = req.session.data['phone-remove-email']

  // Check whether the variable matches a condition
  if (phoneEmailConf3 == "phone-remove-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-home-phone/email-remove/email.html')
  } else {
    res.redirect('/contact/1-0/change-home-phone/check-your-details-remove.html')
  }

});


// ROUTING TO YES OR NO FOR REMOVING HOME PHONE NUMBER
router.post('/remove-home-number', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeHomeNumber = req.session.data['remove-home-phone']

  // Check whether the variable matches a condition
  if (removeHomeNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-home-phone/check-your-details-remove.html')
  } else if (removeHomeNumber == "No"){
    res.redirect('/contact/1-0/change-home-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING HOME PHONE NUMBER
router.post('/remove-home-number2', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeHomeNumber = req.session.data['remove-home-phone']

  // Check whether the variable matches a condition
  if (removeHomeNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/2-0/change-home-phone/check-your-details-remove.html')
  } else if (removeHomeNumber == "No"){
    res.redirect('/contact/2-0/change-home-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING HOME PHONE NUMBER
router.post('/remove-home-number3', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeHomeNumber = req.session.data['remove-home-phone']

  // Check whether the variable matches a condition
  if (removeHomeNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-home-phone/we-cant-call-you.html')
  } else if (removeHomeNumber == "No"){
    res.redirect('/contact/3-0/change-home-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING HOME PHONE NUMBER
router.post('/remove-home-number4', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeHomeNumber = req.session.data['remove-home-phone']

  // Check whether the variable matches a condition
  if (removeHomeNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-home-phone/you-have-removed-your-only-home-phone-number.html?new-home-phone&current-home-phone')
  } else if (removeHomeNumber == "No"){
    res.redirect('/contact/3-0/change-home-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING ALTERNATIVE NUMBER
router.post('/remove-alt-number', function (req, res) {

  // Make a variable and give it the value from 'remove-alt-number'
  var removeAltNumber = req.session.data['remove-alt-phone']

  // Check whether the variable matches a condition
  if (removeAltNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-alt-phone/check-your-details-remove.html')
  } else if (removeAltNumber == "No"){
    res.redirect('/contact/1-0/change-alt-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING ALTERNATIVE NUMBER
router.post('/remove-alt-number2', function (req, res) {

  // Make a variable and give it the value from 'remove-alt-number'
  var removeAltNumber = req.session.data['remove-alt-phone']

  // Check whether the variable matches a condition
  if (removeAltNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/2-0/change-alt-phone/check-your-details-remove.html')
  } else if (removeAltNumber == "No"){
    res.redirect('/contact/2-0/change-alt-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING MOBILE NUMBER
router.post('/remove-mobile-number', function (req, res) {

  // Make a variable and give it the value from 'remove-mobile-number'
  var removeMobileNumber = req.session.data['remove-mobile-phone']

  // Check whether the variable matches a condition
  if (removeMobileNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-mobile-phone/check-your-details-remove.html')
  } else if (removeMobileNumber == "No"){
    res.redirect('/contact/1-0/change-mobile-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING MOBILE NUMBER
router.post('/remove-mobile-number2', function (req, res) {

  // Make a variable and give it the value from 'remove-mobile-number'
  var removeMobileNumber = req.session.data['remove-mobile-phone']

  // Check whether the variable matches a condition
  if (removeMobileNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/2-0/change-mobile-phone/check-your-details-remove.html')
  } else if (removeMobileNumber == "No"){
    res.redirect('/contact/2-0/change-mobile-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING MOBILE NUMBER
router.post('/remove-mobile-number3', function (req, res) {

  // Make a variable and give it the value from 'remove-mobile-number'
  var removeMobileNumber = req.session.data['remove-mobile-phone']

  // Check whether the variable matches a condition
  if (removeMobileNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-mobile-phone/you-have-removed-your-contact-details.html?new-mobile-phone&current-mobile-phone')
  } else if (removeMobileNumber == "No"){
    res.redirect('/contact/3-0/change-mobile-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING EMAIL ADDRESS
router.post('/remove-email-address', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeEmailAddress = req.session.data['remove-email-address']

  // Check whether the variable matches a condition
  if (removeEmailAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-email-address/check-your-details-remove.html')
  } else if (removeEmailAddress == "No"){
    res.redirect('/contact/1-0/change-email-address/do-not-remove.html')
  }

});


// ROUTING TO YES OR NO FOR REMOVING EMAIL ADDRESS
router.post('/remove-email-address2', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeEmailAddress = req.session.data['remove-email-address']

  // Check whether the variable matches a condition
  if (removeEmailAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/2-0/change-email-address/check-your-details-remove.html')
  } else if (removeEmailAddress == "No"){
    res.redirect('/contact/2-0/change-email-address/do-not-remove.html')
  }

});


// ROUTING TO YES OR NO FOR REMOVING EMAIL ADDRESS
router.post('/remove-email-address3', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeEmailAddress = req.session.data['remove-email-address']

  // Check whether the variable matches a condition
  if (removeEmailAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-email-address/you-have-removed-your-email-address.html?new-email-address&current-email-address')
  } else if (removeEmailAddress == "No"){
    res.redirect('/contact/3-0/change-email-address/do-not-remove.html')
  }

});

// CONTACT DETAILS CHANGE 3-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited13'
router.post('/were-invited13', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/contact/2-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/contact/2-0/cannot-use-service')
  }

});

// Run this code when a form is submitted to 'were-invited14'
router.post('/were-invited14', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/contact/3-0/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/contact/3-0/cannot-use-service')
  }

});

// Run this code when a form is submitted to 'were-invited14'
router.post('/were-invited15', function (req, res) {

  // Make a variable and give it the value from 'invited'
  var wereYouInvited = req.session.data['invited']

  // Check whether the variable matches a condition
  if (wereYouInvited == "letter"){
    // Send user to next page
    res.redirect('/contact/mvp/privacy-notice')
  } else {
    // Send user to ineligible page
    res.redirect('/contact/mvp/cannot-use-service')
  }

});

// CONTACT DETAILS CHANGE - 3-0

// ROUTING TO YES OR NO FOR REMOVING EMAIL ADDRESS
router.post('/remove-email-address3', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeEmailAddress = req.session.data['remove-email-address']

  // Check whether the variable matches a condition
  if (removeEmailAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-email-address/we-cant-email-you.html')
  } else if (removeEmailAddress == "No"){
    res.redirect('/contact/3-0/change-email-address/do-not-remove.html')
  }

});


// CONTACT DETAILS CHANGE - MVP

// FOR SINGLE FREQUENCY OPTION VERSION

// Run this code when a form is submitted to 'payment frequency'
router.post('/how-often10', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/mvp/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/mvp/change-frequency/check-how-often-we-will-pay-you')
  }

});


// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt10', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/contact/mvp/change-frequency/keep-how-often-we-will-pay-you&alt.html')
  } else {
    res.redirect('/contact/mvp/change-frequency/check-how-often-we-will-pay-you')
  }

});

// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often-single10', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/mvp/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/mvp/change-frequency/check-how-often-we-will-pay-you')
  }

});

// ROUTING TO RIGHT CONFIRMATION VERSION FOR THE FREQUENCY CHANGE SCENARIO SELECTED
router.post('/frequency-scenario4', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyScenario = req.session.data['frequency-scenario-select']

  // Check whether the variable matches a condition
  if (frequencyScenario == "1"){
    // Send user to next page
    res.redirect('/contact/mvp/change-frequency/you-have-changed-how-often-we-pay-you&1.html')
  } else if (frequencyScenario == "2"){
    res.redirect('/contact/mvp/change-frequency/you-have-changed-how-often-we-pay-you&2.html')
  } else if (frequencyScenario == "3"){
    res.redirect('/contact/mvp/change-frequency/you-have-changed-how-often-we-pay-you&3.html')
  } else {
    res.redirect('/contact/mvp/change-frequency/you-have-changed-how-often-we-pay-you&1.html')
  }

});

// Run this code when a form is submitted to 'account-type-mvp'
router.post('/account-type13', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var accountType = req.session.data['bank-or-build']

  // Check whether the variable matches a condition
  if (accountType == "uk-account"){
    // Send user to next page
    res.redirect('/contact/mvp/change-bank/bank-or-building-society-details')
  } else {
    res.redirect('/contact/mvp/change-bank/can-only-use-uk-account.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING HOME PHONE NUMBER
router.post('/remove-home-number5', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removeHomeNumber = req.session.data['remove-home-phone']

  // Check whether the variable matches a condition
  if (removeHomeNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/mvp/change-home-phone/you-have-removed-your-contact-details.html?current-home-phone&new-home-phone')
  } else if (removeHomeNumber == "No"){
    res.redirect('/contact/mvp/change-home-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING ALTERNATIVE NUMBER
router.post('/remove-alt-number3', function (req, res) {

  // Make a variable and give it the value from 'remove-alt-number'
  var removeAltNumber = req.session.data['remove-alt-phone']

  // Check whether the variable matches a condition
  if (removeAltNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/mvp/change-alt-phone/you-have-removed-your-contact-details.html?new-alt-phone&current-alt-phone')
  } else if (removeAltNumber == "No"){
    res.redirect('/contact/mvp/change-alt-phone/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO FOR REMOVING MOBILE NUMBER
router.post('/remove-mobile-number4', function (req, res) {

  // Make a variable and give it the value from 'remove-mobile-number'
  var removeMobileNumber = req.session.data['remove-mobile-phone']

  // Check whether the variable matches a condition
  if (removeMobileNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/mvp/change-mobile-phone/you-have-removed-your-contact-details.html?current-mobile-phone&new-mobile-phone')
  } else if (removeMobileNumber == "No"){
    res.redirect('/contact/mvp/change-mobile-phone/do-not-remove.html')
  }

});


// ROUTING TO YES OR NO FOR REMOVING EMAIL ADDRESS
router.post('/remove-email-address4', function (req, res) {

  // Make a variable and give it the value from 'remove-email-address'
  var removeEmailAddress = req.session.data['remove-email-address']

  // Check whether the variable matches a condition
  if (removeEmailAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/mvp/change-email-address/you-have-removed-your-contact-details.html?current-email-address&new-email-address')
  } else if (removeEmailAddress == "No"){
    res.redirect('/contact/mvp/change-email-address/do-not-remove.html')
  }

});

// ROUTING TO YES OR NO HOME ADDRESS IN THE UK

router.post('/home-address', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeHomeAddress = req.session.data['home-address']

  // Check whether the variable matches a condition
  if (changeHomeAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/find-address.html')
  } else if (changeHomeAddress == "No"){
    res.redirect('/contact/3-0/change-of-address/must-be-a-uk-address.html')
  }

});

// ROUTING TO YES OR NO DUPLICATE HOME ADDRESS IN THE UK

router.post('/home-address-duplicate', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeHomeAddress = req.session.data['home-address-duplicate']

  // Check whether the variable matches a condition
  if (changeHomeAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/duplicate/type-of-address.html')
  } else if (changeHomeAddress == "No"){
    res.redirect('/contact/3-0/cannot-use-service.html')
  }

});

// ROUTING TO YES OR NO CORRESPONDENCE ADDRESS IN THE UK

router.post('/correspondence-address', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeCorrespondenceAddress = req.session.data['correspondence-address']

  // Check whether the variable matches a condition
  if (changeCorrespondenceAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/correspondence-address/access-to-the-property.html')
  } else if (changeCorrespondenceAddress == "No"){
    res.redirect('/contact/3-0/cannot-use-service.html')
  }

});

// ROUTING TO YES OR NO TYPE OF HOME ADDRESS
router.post('/type-of-address', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeTypeOfAddress = req.session.data['residential']

  // Check whether the variable matches a condition
  if (changeTypeOfAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/access-to-the-property.html')
  } else if (changeTypeOfAddress == "No"){
    res.redirect('/contact/3-0/change-of-address/cannot-use-service.html')
  }

});

// ROUTING TO YES OR NO TYPE OF HOME ADDRESS DUPLICATE
router.post('/type-of-address-duplicate', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeTypeOfAddress = req.session.data['residential-duplicate']

  // Check whether the variable matches a condition
  if (changeTypeOfAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/duplicate/access-to-the-property.html')
  } else if (changeTypeOfAddress == "No"){
    res.redirect('/contact/3-0/cannot-use-service.html')
  }

});

// ROUTING TO TYPE OF ADDRESS IF PERSON RECEIVES SP + OTHER BENEFITS
router.post('/type-of-benefit', function (req, res) {

  // Make a variable and give it the value from 'type-of-benefit'
  var changeTypeOfBenefits = req.session.data['benefits']

  // Check whether the variable matches a condition
  if (changeTypeOfBenefits == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/type-of-address-alt.html')
  } else if (changeTypeOfBenefits == "No"){
    res.redirect('/contact/3-0/change-of-address/type-of-address.html')
  }

});



// ROUTING TO YES OR NO REMOVE CORRESPONDENCE ADDRESS
router.post('/remove-correspondence-address', function (req, res) {

  // Make a variable and give it the value from 'remove-correspondence-address'
  var changeRemoveCorrespondenceAddress = req.session.data['remove-correspondence-address']

  // Check whether the variable matches a condition
  if (changeRemoveCorrespondenceAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/correspondence-address/letters-will-be-sent-to.html')
  } else if (changeRemoveCorrespondenceAddress == "No"){
    res.redirect('/contact/3-0/correspondence-address/do-not-remove.html')
  }

});



// ROUTING TO YES OR NO ACCESS TO HOME ADDRESS
router.post('/property-access', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changePropertyAccess = req.session.data['property-access']

  // Check whether the variable matches a condition
  if (changePropertyAccess == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/uk-address.html')
  } else if (changePropertyAccess == "No"){
    res.redirect('/contact/3-0/change-of-address/report-change-after-move.html')
  }

});

// ROUTING TO YES OR NO ACCESS TO HOME ADDRESS DUPLICATE
router.post('/property-access-duplicate', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changePropertyAccessDuplicate = req.session.data['property-access-duplicate']

  // Check whether the variable matches a condition
  if (changePropertyAccessDuplicate == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/duplicate/find-address.html')
  } else if (changePropertyAccessDuplicate == "No"){
    res.redirect('/contact/3-0/change-of-address/report-change-after-move.html')
  }

});

// ROUTING TO YES OR NO TO ACCESS TO CORRESPONDENCE ADDRESS

router.post('/correspondence-property-access', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeHomeAddress = req.session.data['correspondence-property-access']

  // Check whether the variable matches a condition
  if (changeHomeAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/correspondence-address/find-address.html')
  } else if (changeHomeAddress == "No"){
    res.redirect('/contact/3-0/report-change-after-move.html')
  }

});

// ROUTING TO NEW ENTRY OR DUPLICATE FOR HOME ADDRESS
router.post('/confirm-address1', function (req, res) {

  // Make a variable and give it the value from '10 Washington Street, Worcester, WR1 1NL'
  var selectAddress = req.session.data['select-an-address']

  // Check whether the variable matches a condition
  if (selectAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address/confirm-address2.html')
  } else if (selectAddress == "No"){
    res.redirect('/contact/3-0/change-of-address/confirm-address1.html')
  }

});


// CHANGE OF ADDRESS MVP ROUTING OPTIONS


// ROUTING TO YES OR NO FOR CITIZEN RECIEVING THER BENEFITS

router.post('/other-benefits1', function (req, res) {

  // Make a variable and give it the value from 'other-benefits'
  var changeOtherBenefits = req.session.data['other-benefits']

  // Check whether the variable matches a condition
  if (changeOtherBenefits == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/benefits-disclaimer.html')
  } else if (changeOtherBenefits == "No, I only receive a State Pension"){
    res.redirect('/contact/3-0/change-of-address-v2/have-you-already-moved.html')
  }

});


// ROUTING TO UPDATE BENEFITS SEPARATELY

router.post('/update-other-benefits1', function (req, res) {

  // Make a variable and give it the value from 'update-other-benefits'
  var changeUpdateOtherBenefits = req.session.data['update-other-benefits']

  // Check whether the variable matches a condition
  if (changeUpdateOtherBenefits == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/have-you-already-moved.html')
  } else if (changeUpdateOtherBenefits == "No"){
    res.redirect('/contact/3-0/change-of-address-v2/get-help-to-report-your-change-of-address.html')
  }

});

// ROUTING TO YES OR NO ALREADY MOVED TO ADDRESS

router.post('/already-moved1', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeAlreadyMoved = req.session.data['already-moved']

  // Check whether the variable matches a condition
  if (changeAlreadyMoved == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/uk-address.html')
  } else if (changeAlreadyMoved == "No"){
    res.redirect('/contact/3-0/change-of-address-v2/report-change-after-move.html')
  }

});

// ROUTING TO YES OR NO HOME ADDRESS IN THE UK

router.post('/uk-address', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeUkAddress = req.session.data['uk-address']

  // Check whether the variable matches a condition
  if (changeUkAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/address-finder/find-address.html')
  } else if (changeUkAddress == "No"){
    res.redirect('/contact/3-0/change-of-address-v2/you-cannot-change-your-address-online.html')
  }

});

// ROUTING TO CONFIRM NEW ADDRESS OR THE SAME ADDRESS
router.post('/select-an-address1', function (req, res) {

  // Make a variable and give it the value from '10 Washington Street, Worcester, WR1 1NL'
  var selectAddress = req.session.data['select-an-address']

  // Check whether the variable matches a condition
  if (selectAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/address-finder/confirm-address1.html')
  } else if (selectAddress == "No"){
    res.redirect('/contact/3-0/change-of-address-v2/address-finder/confirm-address2.html')
  }

});

// ROUTING TO CONFIRM NEW MANUAL ADDRESS 
router.post('/select-a-manual-address1', function (req, res) {

  // Make a variable and give it the value from '10 Washington Street, Worcester, WR1 1NL'
  var selectAddress = req.session.data['select-an-address']

  // Check whether the variable matches a condition
  if (selectAddress == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/address-finder/select-a-manual-address.html')
  } else if (selectAddress == "No"){
    res.redirect('/contact/3-0/change-of-address-v2/address-finder/confirm-address2.html')
  }

});

// ROUTING TO CONFIRM IF YOU WANT LETTER SENT TO RESIDENTIAL ADDRESS
router.post('/send-letters', function (req, res) {

  // Make a variable and give it the value from '10 Washington Street, Worcester, WR1 1NL'
  var changeSendLetters = req.session.data['send-letters']

  // Check whether the variable matches a condition
  if (changeSendLetters == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/check-your-details.html')
  } else if (changeSendLetters == "No"){
    res.redirect('/contact/3-0/change-of-address-v2/you-cannot-ask-to-get-your-letters-sent-somewhere-else-online.html')
  }

});

// ROUTING TO RIGHT CONFIRMATION VERSION CHANGE OF ADDRESS
router.post('/changed-residential-address', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var changeOtherBenefits = req.session.data['other-benefits']
  console.log("high", req.session.data['other-benefits'])

  // Check whether the variable matches a condition
  if (changeOtherBenefits == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/you-have-changed-your-address-alt.html')
  } else {
    res.redirect('/contact/3-0/change-of-address-v2/you-have-changed-your-address.html')
  }

});

// ROUTING TO RIGHT CONFIRMATION VERSION CHANGE OF ADDRESS
router.post('/changed-residential-address', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var changeOtherBenefits = req.session.data['other-benefits']
  console.log("high", req.session.data['other-benefits'])

  // Check whether the variable matches a condition
  if (changeOtherBenefits == "Yes"){
    // Send user to next page
    res.redirect('/contact/3-0/change-of-address-v2/you-have-changed-your-address-alt.html')
  } else {
    res.redirect('/contact/3-0/change-of-address-v2/you-have-changed-your-address.html')
  }

});


// ROUTING TO ADDRESS RESULTS
router.post('/postcode-1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var changeManualPostcode = req.session.data['postcode-1']
  console.log("high", req.session.data['postcode-1'])

  // Check whether the variable matches a condition
  if (changeManualPostcode == "YO31SQ"){
    // Send user to next page
    res.redirect('contact/3-0/change-of-address-v2/address-finder/select-an-address.html')

  }if (changeManualPostcode == "YO3 1SQ"){
    // Send user to next page
    res.redirect('contact/3-0/change-of-address-v2/address-finder/select-an-address.html')

  }if (changeManualPostcode == "yo31sq"){
    // Send user to next page
    res.redirect('contact/3-0/change-of-address-v2/address-finder/select-an-address.html')

  }if (changeManualPostcode == "yo3 1sq"){
    // Send user to next page
    res.redirect('contact/3-0/change-of-address-v2/address-finder/select-an-address.html')
  
  }if (changeManualPostcode == "111"){
    // Send user to next page
    res.redirect('contact/3-0/change-of-address-v2/address-finder/select-an-address.html')
  } else {
    res.redirect('/contact/3-0/change-of-address-v2/address-finder/no-address-found.html')
  }});


module.exports = router