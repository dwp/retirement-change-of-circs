
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line

// ROUTING TO YES OR NO ALREADY MOVED TO ADDRESS

router.post('/already-moved4', function (req, res) {

  // Make a variable and give it the value from 'already moved'
  var changeAlreadyMoved = req.session.data['already-moved']
    console.log("high", req.session.data['already-moved'])


  // Check whether the variable matches a condition
  if (changeAlreadyMoved == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/phase1/gysp-v1/temp-or-perm.html')
  } else if (changeAlreadyMoved == "No"){
    res.redirect('/coa-combined/phase1/gysp-v1/report-change-after-move.html')
  }


});

// ROUTING TO RIGHT CONFIRMATION VERSION CHANGE OF ADDRESS
router.post('/changed-residential-address4', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var changeSelectAnAddress = req.session.data['select-an-address']
  console.log("high", req.session.data['select-an-address'])

  // Check whether the variable matches a condition
  if (changeSelectAnAddress == "Select1"){
    // Send user to next page
    res.redirect('/coa-combined/phase1/gysp-v1/you-have-changed-your-address-alt.html')
  } else {
    res.redirect('/coa-combined/phase1/gysp-v1/you-have-changed-your-address-2benefits.html')
  }

});

// ROUTING TO TEMP OR PERM
router.post('/when-did-you-move1', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeWhenDidYouMove = req.session.data['citizen-record-year']
  console.log("high", req.session.data['citizen-record-year'])

  // Check whether the variable matches a condition
  if (changeWhenDidYouMove == "2025"){
    // Send user to next page
    res.redirect('coa-combined/phase1/gysp-v1/temp-or-perm.html')

  } else if (changeWhenDidYouMove == "2024"){
    // Send user to next page
    res.redirect('coa-combined/phase1/gysp-v1/report-change-after-move.html')

  } else {
    res.redirect('coa-combined/phase1/gysp-v1/temp-or-perm.html')
  }

});

// ROUTING TO PERMANENT OR TEMPORARY MOVE
router.post('/perm-temp1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var changeSelectAnAddress = req.session.data['perm-or-temp']
  console.log("high", req.session.data['perm-or-temp'])

  // Check whether the variable matches a condition
  if (changeSelectAnAddress == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/phase1/gysp-v1/uk-address.html')
  } else {
    res.redirect('/coa-combined/phase1/gysp-v1/dont-need-to-update-your-address.html')
  }

});


// ROUTING TO PERMANENT OR TEMPORARY MOVE

router.post('/perm-temp2', function (req, res) {

  // Make a variable and give it the value from 'perm-or-temp'
  var changePermOrTemp = req.session.data['perm-or-temp']
        console.log("high", req.session.data['perm-or-temp'])


  // Check whether the variable matches a condition
  if (changePermOrTemp == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/phase1/v1/cant-update-temp-address-alt.html')
  } else if (changePermOrTemp== "No"){
    res.redirect('/coa-combined/phase1/v1/uk-address.html')
  }

});

// ROUTING TO YES OR NO HOME ADDRESS IN THE UK

router.post('/uk-address5', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var changeUkAddress = req.session.data['uk-address']
        console.log("high", req.session.data['uk-address'])


  // Check whether the variable matches a condition
  if (changeUkAddress == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/phase1/gysp-v1/address-finder/find-address.html')
  } else if (changeUkAddress == "No"){
    res.redirect('/coa-combined/phase1/gysp-v1/you-cannot-change-your-address-online.html')
  }

});

 // ROUTING TO RIGHT ADDRESS
   router.post('/select-an-address7', function (req, res) {

    // Make a variable and give it the value from 'select-ADDRESS'
    var selectAddress = req.session.data['select-address']
    console.log("high", req.session.data['select-address'])
  
    // Check whether the variable matches a condition
    if (selectAddress == "Select1"){
      // Send user to next page
      res.redirect('/coa-combined/phase1/gysp-v1/check-your-details.html')
    } else if (selectAddress == "Select2"){
      // Send user to next page
      res.redirect('coa-combined/phase1/gysp-v1/do-you-live-in-a-care-home.html')
    } else if (selectAddress == "Select3"){
      // Send user to next page
      res.redirect('coa-combined/phase1/gysp-v1/are-you-currently-staying-in-hospital.html')
    } else if (selectAddress == "Select4"){
      // Send user to next page
      res.redirect('coa-combined/phase1/gysp-v1/this-is-a-prison.html')
    }
  
  });   

// ROUTING TO ADDRESS RESULTS
router.post('/postcode-6', function (req, res) {

  // Make a variable and give it the value from 'postcode-6'
  var changePostcode = req.session.data['postcode-6']
  console.log("high", req.session.data['postcode-6'])

  // Check whether the variable matches a condition
  if (changePostcode == "YO3 1SQ"){
    // Send user to next page
    res.redirect('coa-combined/phase1/gysp-v1/address-finder/select-an-address.html')

  } else if (changePostcode == "YO3 1MK"){
    // Send user to next page
    res.redirect('oftd/3-0/manage-state-pension-legacy.html')
  
  } else {
    res.redirect('/oftd/3-0/cannot-make-changes-right-now.html')
  }

});




// ROUTING TO YES OR NO ALREADY MOVED TO ADDRESS-PSCS

router.post('/already-moved-pscs1', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeAlreadyMoved = req.session.data['already-moved']

  // Check whether the variable matches a condition
  if (changeAlreadyMoved == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/phase1/pscs-address-change-v1/uk-address.html')
  } else if (changeAlreadyMoved == "No"){
    res.redirect('/coa-combined/phase1/pscs-address-change-v1/report-change-after-move.html')
  }

});

// ROUTING TO YES OR NO IF A UK ADDRESS

router.post('/uk-address-pscs1', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var changeUKaddress = req.session.data['uk-address']

  // Check whether the variable matches a condition
  if (changeUKaddress == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/phase1/pscs-address-change-v1/find-address.html')
  } else if (changeUKaddress == "No"){
    res.redirect('/coa-combined/phase1/pscs-address-change-v1/you-cannot-change-your-address-online.html')
  }

});

// ROUTING TO CONFIRM IF YOU WANT LETTER SENT TO RESIDENTIAL ADDRESS
router.post('/send-letters2', function (req, res) {

  // Make a variable and give it the value from '10 Washington Street, Worcester, WR1 1NL'
  var changeSendLetters = req.session.data['select-correspondence-address']

  // Check whether the variable matches a condition
  if (changeSendLetters == "Select5"){
    // Send user to next page
    res.redirect('/contact/3-0/correspondence-address-v1/check-your-details')
  } else if (changeSendLetters == "Select6"){
    res.redirect('/contact/3-0/correspondence-address-v1/uk-address')
  }

});



module.exports = router