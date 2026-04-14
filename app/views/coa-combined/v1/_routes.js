
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line



///////////////////////////////////
//////// TASK LIST STATUS//////////
///////////////////////////////////

router.post('/coa-combined/v1/new-address/check-your-details', function (req, res) {
req.session.data['newAddress']="completed"
  res.redirect('/coa-combined/v1/task-list.html')


});

router.post('/coa-combined/v1/where-you-live-now/rent/rent-check-your-details', function (req, res) {
req.session.data['liveNow']="completed"
  res.redirect('/coa-combined/v1/task-list.html')


});

router.post('/coa-combined/v1/partner/partner-check-your-details', function (req, res) {
req.session.data['partnerDetails']="completed"
  res.redirect('/coa-combined/v1/task-list.html')


});

router.post('/coa-combined/v1/s&i/capital-check-answers', function (req, res) {
req.session.data['savingsInvestments']="completed"
  res.redirect('/coa-combined/v1/task-list.html')


});

////////////////////////////////////////
////////////////////////////////////////
//////////////// HOME //////////////////
////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
///////////// NEW ADDRESS //////////////
////////////////////////////////////////


// ROUTING FOR HAVE YOU ALREADY MOVED

router.post('/coa-combined/v1/new-address/have-you-already-moved', function (req, res) {

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


// ROUTING FOR PERM OR TEMP
router.post('/coa-combined/v1/new-address/perm-or-temp', function (req, res) {

  // Make a variable and give it the value from 'already moved'
  var perOrTemp = req.session.data['perm-or-temp']
    console.log("high", req.session.data['perm-or-temp'])


  // Check whether the variable matches a condition
  if (perOrTemp == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/uk-address.html')
  } else if (perOrTemp == "No"){
    res.redirect('/coa-combined/v1/new-address/dont-need-to-update-your-address.html')
  }

});

// ROUTING FOR ADDRESS IN THE UK

router.post('/coa-combined/v1/new-address/uk-address', function (req, res) {

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

// ROUTING FOR PROPERTY TYPE

router.post('/coa-combined/v1/new-address/type-of-property', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var propertyType = req.session.data['property-type']
        console.log("high", req.session.data['property-type'])


  // Check whether the variable matches a condition
  if (propertyType == "House"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/when-did-you-move.html')
  } else if (propertyType == "Flat"){
    res.redirect('/coa-combined/v1/new-address/when-did-you-move.html')
  } else if (propertyType == "Hospital"){
    res.redirect('/coa-combined/v1/new-address/cannot-change-your-address-online.html')
  } else if (propertyType == "Care home"){
    res.redirect('/coa-combined/v1/new-address/cannot-change-your-address-online.html')
  } else if (propertyType == "Caravan"){
    res.redirect('/coa-combined/v1/new-address/when-did-you-move.html')
  } else if (propertyType == "Other"){
    res.redirect('/coa-combined/v1/new-address/when-did-you-move.html')
  } 
});

// ROUTING FOR WHEN DID YOU MOVE
router.post('/coa-combined/v1/new-address/when-did-you-move', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeWhenDidYouMove = req.session.data['citizen-record-year']
  console.log("high", req.session.data['citizen-record-year'])

  // Check whether the variable matches a condition
  if (changeWhenDidYouMove == "2025"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/find-address.html')

  } else if (changeWhenDidYouMove == "2027"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/report-change-after-move.html')

  } else {
    res.redirect('/coa-combined/v1/new-address/address-finder/find-address.html')
  }

});

// ROUTING FOR WHAT IS YOUR NEW ADDRESS
router.post('/coa-combined/v1/new-address/address-finder/find-address', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeEnterPostcode = req.session.data['postcode-7']
  console.log("high", req.session.data['postcode-7'])

  // Check whether the variable matches a condition
  if (changeEnterPostcode == "YO3 1MJ"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/select-an-address.html')

  } else if (changeEnterPostcode == "YO3 1MK"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/no-address-found.html')

  } else if (changeEnterPostcode == "YO3 1ML"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/already-your-address.html')

    } else if (changeEnterPostcode == "YO3 1MM"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/address-single-result.html')

  } else {
    res.redirect('/coa-combined/v1/new-address/address-finder/select-an-address.html')
  }

});

// ROUTING FOR SELECT AN ADDRESS
router.post('/coa-combined/v1/new-address/address-finder/select-an-address', function (req, res) {

  // Make a variable and give it the value from 'select-address'
  var selectAddress = req.session.data['select-address']
  console.log("high", req.session.data['select-address'])

  // Check whether the variable matches a condition
  if (selectAddress == "Select1"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/check-your-details.html')

  } else if (selectAddress == "Select2"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/already-your-address.html')

  } else if (selectAddress == "Select3"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/address-single-result.html')

  } else if (selectAddress == "Select4"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/address-finder/this-is-a-prison.html')

   } else if (selectAddress == "Select5"){
    // Send user to next page
    res.redirect('/coa-combined/v1/new-address/cannot-change-your-address-online.html')

  } else {
    res.redirect('/coa-combined/v1/new-address/address-finder/check-your-details.html')
  }

});


  

////////////////////////////////
//////// OWNED PROPERTY ////////
////////////////////////////////


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
      res.redirect('/coa-combined/v1/where-you-lived-before/owned/money-from-sale.html')
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


  

// ROUTING TO WHEN DID YOU MOVE
router.post('/coa-combined/v1/about-here-you-live-now/owned/address-finder/find-address.html', function (req, res) {

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



// ROUTING TO YES OR NO FOR REMOVING HOME PHONE NUMBER
router.post('/remove-partner-1', function (req, res) {

  // Make a variable and give it the value from 'remove-home-number'
  var removePartner = req.session.data['remove-partner']

  // Check whether the variable matches a condition
  if (removePartner == "Yes"){
    // Send user to next page
    res.redirect('/contact/mvp/change-home-phone/you-have-removed-your-contact-details.html?current-home-phone&new-home-phone')
  } else if (removePartner == "No"){
    res.redirect('/contact/mvp/change-home-phone/do-not-remove.html')
  }

});









////////////////////////////////////
/////// WHERE YOU LIVE NOW /////////
////////////////////////////////////

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
    } else if (selectHousingStatus == "other"){
      // Send user to next page
      res.redirect('coa-combined/v1/where-you-live-now/when-did-you-move.html')
    }   
  });


/////////////////////////////
////////// RENT ////////////
////////////////////////////

 


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

   //ROUTING FROM HOUSING COSTS TO CHECK YOUR DETAILS
router.post('/coa-combined/v1/where-you-live-now/rent/housing-costs', function (req, res) {
  res.redirect('/coa-combined/v1/where-you-live-now/rent/rent-check-your-details.html')


});


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////// PEOPLE WHO LIVE WITH YOU//////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////



/////////////////////////////////////
////////////// PARTNER //////////////
/////////////////////////////////////



// ROUTING TO HAVING A PARTNER
router.post('/coa-combined/v1/partner/do-you-live-with-a-partner', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectPartner = req.session.data['partner']
        console.log("high", req.session.data['partner'])

  // Check whether the variable matches a condition
  if (selectPartner == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v1/partner/partner-details.html')
  } else if (selectPartner == "No"){
    res.redirect('/coa-combined/v1/partner/partner-check-your-details.html')
  }

});

// ROUTING FROM PARTNER DETAILS TO REGISTERED BLIND
router.post('/coa-combined/v1/partner/partner-details', function (req, res) {
  res.redirect('/coa-combined/v1/partner/partner-registered-blind.html')


});

// ROUTING FROM PARTNER DETAILS TO REGISTERED BLIND
router.post('/coa-combined/v1/partner/partner-registered-blind', function (req, res) {
  res.redirect('/coa-combined/v1/partner/partner-check-your-details.html')


});



////////////////////////////////////////
////////////////////////////////////////
////////////// YOUR MONEY //////////////
////////////////////////////////////////
////////////////////////////////////////



///////////////////////////////////////////////
/////////// SAVINGS AND INVESTMENTS////////////
///////////////////////////////////////////////

// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v1/s&i/capital-select-capital', function (req, res) {
  res.redirect('/coa-combined/v1/s&i/capital-total-today.html')


});

// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v1/s&i/capital-total-today', function (req, res) {
  res.redirect('/coa-combined/v1/s&i/capital-check-answers.html')


});





module.exports = router