
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line

// ROUTING TO YES OR NO ALREADY MOVED TO ADDRESS

router.post('/already-moved5', function (req, res) {

  // Make a variable and give it the value from 'already moved'
  var changeAlreadyMoved = req.session.data['already-moved']
    console.log("high", req.session.data['already-moved'])


  // Check whether the variable matches a condition
  if (changeAlreadyMoved == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/perm-or-temp.html')
  } else if (changeAlreadyMoved == "No"){
    res.redirect('/coa-combined/v1/new-address/report-change-after-move.html')
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
    res.redirect('/coa-combined/v1/you-have-changed-your-address-alt.html')
  } else {
    res.redirect('/coa-combined/v1/you-have-changed-your-address-2benefits.html')
  }

});

// ROUTING TO PERMANENT OR TEMPORARY MOVE
router.post('/perm-temp3', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var changeSelectAnAddress = req.session.data['perm-or-temp']
  console.log("high", req.session.data['perm-or-temp'])

  // Check whether the variable matches a condition
  if (changeSelectAnAddress == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/uk-address.html')
  } else {
    res.redirect('/coa-combined/v1/new-address/dont-need-to-update-your-address.html')
  }

});

// ROUTING TO WHEN DID YOU MOVE
router.post('/when-did-you-move1', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeWhenDidYouMove = req.session.data['citizen-record-year']
  console.log("high", req.session.data['citizen-record-year'])

  // Check whether the variable matches a condition
  if (changeWhenDidYouMove == "2025"){
    // Send user to next page
    res.redirect('coa-combined/v1/temp-or-perm.html')

  } else if (changeWhenDidYouMove == "2024"){
    // Send user to next page
    res.redirect('coa-combined/v1/report-change-after-move.html')

  } else {
    res.redirect('coa-combined/v1/temp-or-perm.html')
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
    res.redirect('/coa-combined/v1/cant-update-temp-address-alt.html')
  } else if (changePermOrTemp== "No"){
    res.redirect('/coa-combined/v1/uk-address.html')
  }

});

// ROUTING TO YES OR NO HOME ADDRESS IN THE UK

router.post('/uk-address6', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var changeUkAddress = req.session.data['uk-address']
        console.log("high", req.session.data['uk-address'])

  // Check whether the variable matches a condition
  if (changeUkAddress == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/type-of-property.html')

  } else if (changeUkAddress == "No"){
    res.redirect('/coa-combined/v1/new-address/you-cannot-change-your-address-online.html')
  }

});

// ROUTING TO ADDRESS RESULTS
router.post('/postcode-7', function (req, res) {

  // Make a variable and give it the value from 'postcode-7'
  var changePostcode = req.session.data['postcode-7']
  console.log("high", req.session.data['postcode-7'])

  // Check whether the variable matches a condition
  if (changePostcode == "YO3 1MJ"){
    // Send user to next page
    res.redirect('coa-combined/v1/new-address/address-finder/select-an-address.html')

  } else if (changePostcode == "YO3 1MK"){
    // Send user to next page
    res.redirect('coa-combined/v1/new-address/address-finder/no-address-found.html')
  
  } else if (changePostcode == "YO3 1ML"){
    // Send user to next page
    res.redirect('coa-combined/v1/new-address/address-finder/already-your-address.html')
  
  } else if (changePostcode == "YO3 1MM"){
    // Send user to next page
    res.redirect('coa-combined/v1/new-address/address-finder/address-single-result.html')
  
  }
});

 // ROUTING TO RIGHT ADDRESS
   router.post('/select-an-address8', function (req, res) {

    // Make a variable and give it the value from 'select-ADDRESS'
    var selectAddress = req.session.data['select-address']
    console.log("high", req.session.data['select-address'])
  
    // Check whether the variable matches a condition
    if (selectAddress == "Select1"){
      // Send user to next page
      res.redirect('/coa-combined/v1/new-address/check-your-details.html')
    } else if (selectAddress == "Select2"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/this-is-a-prison.html')
    } else if (selectAddress == "Select3"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/this-is-a-carehome-or-hospital.html')
    } else if (selectAddress == "Select4"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/cannot-change-your-address-online.html')
    } else if (selectAddress == "Select5"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/cannot-change-your-address-online.html')
    }
  
  });


  // ROUTING TO PROPERTY TYPE
   router.post('/property-type1', function (req, res) {

    // Make a variable and give it the value from 'property-type'
    var selectPropertyType = req.session.data['property-type']
    console.log("high", req.session.data['property-type'])
  
    // Check whether the variable matches a condition
    if (selectPropertyType == "house"){
      // Send user to next page
      res.redirect('/coa-combined/v1/new-address/when-did-you-move.html')
    } else if (selectPropertyType == "flat"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/when-did-you-move.html')
    } else if (selectPropertyType == "hospital"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/cannot-change-your-address-online.html')
    } else if (selectPropertyType == "care home"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/cannot-change-your-address-online.html')
    } else if (selectPropertyType == "caravan"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/when-did-you-move.html')
    } else if (selectPropertyType == "other"){
      // Send user to next page
      res.redirect('coa-combined/v1/new-address/this-is-a-prison.html')
    }
  
  });  

  // ROUTING TO HOUSING STATUS
   router.post('/housing-status1', function (req, res) {

    // Make a variable and give it the value from 'property-type'
    var selectHousingStatus = req.session.data['housing-status']
    console.log("high", req.session.data['housing-status'])
  
    // Check whether the variable matches a condition
    if (selectHousingStatus == "I own the property (with or without a mortgage)"){
      // Send user to next page
      res.redirect('/coa-combined/v1/where-you-live-now/owned/how-much-did-you-pay.html')
    } else if (selectHousingStatus == "I rent"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/rent/housing-costs.html')
    } else if (selectHousingStatus == "I'm renting and buying through a shared ownership scheme"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/shared/how-much-did-you-pay.html')
    } else if (selectHousingStatus == "I live in someone else's home without paying rent"){
      // Send user to next page
      res.redirect('coa-combined/v1/task-list3')
    } else if (selectHousingStatus == "Other"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/when-did-you-move.html')
    }   
  });

  // ROUTING TO HOUSING STATUS WHERE YOU LIVED BEFORE
   router.post('/housing-status2', function (req, res) {

    // Make a variable and give it the value from 'previous-housing-status'
    var selectHousingStatus = req.session.data['previous-housing-status']
    console.log("high", req.session.data['previous-housing-status'])
  
    // Check whether the variable matches a condition
    if (selectHousingStatus == "I owned my property (with or without a mortgage)"){
      // Send user to next page
      res.redirect('/coa-combined/v1/where-you-lived-before/owned/sold-the-property.html')
    } else if (selectHousingStatus == "I rented"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/rent/housing-costs.html')
    } else if (selectHousingStatus == "I was renting and buying through a shared ownership scheme"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/shared/how-much-did-you-pay.html')
    } else if (selectHousingStatus == "I lived in someone else's home without paying rent"){
      // Send user to next page
      res.redirect('coa-combined/v1/task-list3')
    } else if (selectHousingStatus == "Other"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/when-did-you-move.html')
    }   
  });

  // ROUTING TO HOUSING STATUS HAVE YOU SOLD THE PROPERTY
   router.post('/sold-property1', function (req, res) {

    // Make a variable and give it the value from 'property-type'
    var selectSoldProperty = req.session.data['sold-property']
    console.log("high", req.session.data['sold-property'])
  
    // Check whether the variable matches a condition
    if (selectSoldProperty == "Yes"){
      // Send user to next page
      res.redirect('/coa-combined/v1/where-you-lived-before/owned/money-from-sale.html')
    } else if (selectSoldProperty == "No"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/rent/housing-costs.html')
    } 
  });

  // ROUTING TO YES OR NO HOME ADDRESS IN THE UK

router.post('/uk-address6', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var changeUkAddress = req.session.data['uk-address']
        console.log("high", req.session.data['uk-address'])


  // Check whether the variable matches a condition
  if (changeUkAddress == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/type-of-property.html')
  } else if (changeUkAddress == "No"){
    res.redirect('/coa-combined/v1/new-address/you-cannot-change-your-address-online.html')
  }

});

// ROUTING TO WHEN DID YOU MOVE
router.post('/when-did-you-move2', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeWhenDidYouMove = req.session.data['citizen-record-year']
  console.log("high", req.session.data['citizen-record-year'])

  // Check whether the variable matches a condition
  if (changeWhenDidYouMove == "2025"){
    // Send user to next page
    res.redirect('coa-combined/v1/new-address/address-finder/find-address.html')

  } else if (changeWhenDidYouMove == "2024"){
    // Send user to next page
    res.redirect('coa-combined/v1/report-change-after-move.html')

  } else {
    res.redirect('coa-combined/v1/new-address/address-finder/find-address.html')
  }

});

// ROUTING TO YES OR NO MORTGAGE OR LOAN

router.post('/mortgage-or-loan2', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectMortgageLoan = req.session.data['mortgage-or-loan']
        console.log("high", req.session.data['mortgage-or-loan'])

  // Check whether the variable matches a condition
  if (selectMortgageLoan == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/where-you-live-now/owned/do-you-get-smi.html')
  } else if (selectMortgageLoan == "No"){
    res.redirect('/coa-combined/v1/where-you-live-now/owned/do-you-get-smi.html')
  }

});

// ROUTING TO DOB eligibility for all citizens journey
router.post('/get-smi-support1', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var selectGetSmiSupport = req.session.data['do-you-get-smi-support']
  console.log("high", req.session.data['do-you-get-smi-support'])

  // Check whether the variable matches a condition
  if (selectGetSmiSupport == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/where-you-live-now/owned/check-your-details.html')

  } else if (selectGetSmiSupport == "No"){
    // Send user to next page
    res.redirect('/coa-combined/v1/where-you-live-now/owned/check-your-details.html')
  
  }
    
});

// ROUTING TO SMI ON CURRENT PROPERTY
router.post('/get-smi-support2', function (req, res) {

  // Make a variable and give it the value from 'bank-or-build'
  var selectGetSmiSupport = req.session.data['do-you-get-smi-support']
  console.log("high", req.session.data['do-you-get-smi-support'])

  // Check whether the variable matches a condition
  if (selectGetSmiSupport == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/where-you-live-now/shared/check-your-details.html')

  } else if (selectGetSmiSupport == "No"){
    // Send user to next page
    res.redirect('/coa-combined/v1/where-you-live-now/shared/check-your-details.html')
  
  }
    
});

// ROUTING TO HAVING A MORTGAGE ON NEW PROPERTY
router.post('/mortgage-or-loan3', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectMortgageLoan = req.session.data['mortgage-or-loan']
        console.log("high", req.session.data['mortgage-or-loan'])

  // Check whether the variable matches a condition
  if (selectMortgageLoan == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/where-you-live-now/shared/do-you-get-smi.html')
  } else if (selectMortgageLoan == "No"){
    res.redirect('/coa-combined/v1/where-you-live-now/shared/do-you-get-smi.html')
  }

});

// ROUTING TO HAVING A PARTNER
router.post('/partner1', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectPartner = req.session.data['partner']
        console.log("high", req.session.data['partner'])

  // Check whether the variable matches a condition
  if (selectPartner == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/partner/partner-details.html')
  } else if (selectPartner == "No"){
    res.redirect('/coa-combined/v1/where-you-live-now/shared/do-you-get-smi.html')
  }

});












module.exports = router