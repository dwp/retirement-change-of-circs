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


// CONTACT DETAILS CHANGE 1-0
// ELIGIBILITY ROUTING

// Run this code when a form is submitted to 'were-invited'
router.post('/were-invited11', function (req, res) {

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
router.post('/account-type11', function (req, res) {

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
router.post('/how-often7', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/email/would-you-like-email-confirmation.html')
  }

});

// FOR ALT FREQUENCY OPTION VERSION
router.post('/how-often-alt7', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 2 weeks"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/keep-how-often-we-will-pay-you&alt.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/email/would-you-like-email-confirmation.html')
  }

});

// FOR SINGLE FREQUENCY OPTION VERSION
router.post('/how-often-single7', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencySelected = req.session.data['frequency-select']

  // Check whether the variable matches a condition
  if (frequencySelected == "Every 4 weeks"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/keep-how-often-we-will-pay-you.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/email/would-you-like-email-confirmation.html')
  }

});


// ROUTING TO RIGHT CONFIRMATION VERSION FOR THE FREQUENCY CHANGE SCENARIO SELECTED
router.post('/frequency-scenario1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var frequencyScenario = req.session.data['frequency-scenario-select']

  // Check whether the variable matches a condition
  if (frequencyScenario == "1"){
    // Send user to next page
    res.redirect('/contact/1-0/change-frequency/frequency-confirmations/you-have-changed-how-often-we-pay-you&1.html')
  } else if (frequencyScenario == "2"){
    res.redirect('/contact/1-0/change-frequency/frequency-confirmations/you-have-changed-how-often-we-pay-you&2.html')
  } else if (frequencyScenario == "3"){
    res.redirect('/contact/1-0/change-frequency/frequency-confirmations/you-have-changed-how-often-we-pay-you&3.html')
  } else {
    res.redirect('/contact/1-0/change-frequency/frequency-confirmations/you-have-changed-how-often-we-pay-you&1.html')
  }

});


// DO YOU WANT EMAIL BANK
router.post('/email-conf-bank1', function (req, res) {

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

// DO YOU WANT EMAIL FREQUENCY
router.post('/email-conf-frequency1', function (req, res) {

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
  var phoneEmailConf = req.session.data['phone-email']

  // Check whether the variable matches a condition
  if (phoneEmailConf == "phone-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-phone/email/email.html')
  } else {
    res.redirect('/contact/1-0/change-phone/check-your-details.html')
  }

});

// DO YOU WANT EMAIL CONTACT DETAILS - ADD HOME PHONE
router.post('/email-conf-phone2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var phoneEmailConf2 = req.session.data['phone-email']

  // Check whether the variable matches a condition
  if (phoneEmailConf2 == "phone-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-phone/email-add/email.html')
  } else {
    res.redirect('/contact/1-0/change-phone/check-your-details-add.html')
  }

});

// DO YOU WANT EMAIL CONTACT DETAILS - REMOVE HOME PHONE
router.post('/email-conf-phone3', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var phoneEmailConf3 = req.session.data['phone-email']

  // Check whether the variable matches a condition
  if (phoneEmailConf3 == "phone-confirmation-yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-phone/email-remove/email.html')
  } else {
    res.redirect('/contact/1-0/change-phone/check-your-details-remove.html')
  }

});


// ROUTING TO YES OR NO FOR REMOVING HOME PHONE NUMBER
router.post('/remove-home-number', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var removeHomeNumber = req.session.data['remove-home-phone']

  // Check whether the variable matches a condition
  if (removeHomeNumber == "Yes"){
    // Send user to next page
    res.redirect('/contact/1-0/change-phone/email-remove/would-you-like-email-confirmation.html')
  } else if (removeHomeNumber == "No"){
    res.redirect('/contact/1-0/change-phone/do-not-remove.html')
  }

});<a href="/start?first-name=Amina"></a>

module.exports = router