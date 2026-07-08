
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

  // Add your routes here - above the module.exports line



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////// TASK LIST STATUSES //////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

router.post('/coa-combined/v2/new-address/check-your-details', function (req, res) {
req.session.data['newAddress']="completed"
  res.redirect('/coa-combined/v2/task-list.html')


});

router.post('/coa-combined/v2/where-you-live-now/rent/rent-check-your-details', function (req, res) {
req.session.data['liveNow']="completed"
  res.redirect('/coa-combined/v2/task-list.html')


});

router.post('/coa-combined/v2/partner/partner-added', function (req, res) {
req.session.data['partnerDetails']="completed"
  res.redirect('/coa-combined/v2/task-list.html')


});

router.post('/coa-combined/v2/partner/partner-check-your-details', function (req, res) {
req.session.data['partnerDetails']="completed"
  res.redirect('/coa-combined/v2/task-list.html')


});



router.post('/coa-combined/v2/s&i/capital-check-answers', function (req, res) {
req.session.data['savingsInvestments']="completed"
  res.redirect('/coa-combined/v2/task-list.html')


});

router.post('/coa-combined/v2/how-we-contact-you/contact-check-your-details', function (req, res) {
req.session.data['contactYou']="completed"
  res.redirect('/coa-combined/v2/task-list.html')


});

  //ROUTING FROM COMPLETE TASK LIST TO CONFIRMATION SCREENS
router.post('/coa-combined/v2/task-list', function (req, res) {


  // Make a variable and give it the value from 'partner'
  var submitChange = req.session.data['partner']
    console.log("high", req.session.data['partner'])


  // Check whether the variable matches a condition
  if (submitChange == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/confirmation-screen-further-action-needed-1.html')
  } else if (submitChange == "No"){
    res.redirect('/coa-combined/v2/confirmation-screen-1.html')
  }

});


///////////////////////////////////////////////
///////////////////////////////////////////////
//////////////// ELIGIBILITY //////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

  //ROUTING FROM SP + PC to PENSION CREDIT WARM UP

router.post('/coa-combined/v2/filters/sp-or-pc', function (req, res) {

  // Make a variable and give it the value from 'select-benefit
  var selectBenefitType = req.session.data['select-benefit']
    console.log("high", req.session.data['select-benefit'])


  // Check whether the variable matches a condition
  if (selectBenefitType == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/pension-credit-warm-up.html')
  } else if (selectBenefitType == "No"){
    res.redirect('/coa-combined/phase1/gysp-v1/have-you-already-moved.html')
  }

});


 

  //ROUTING FROM PENSION CREDIT WARM UP TO RENT NOW
router.post('/coa-combined/v2/filters/pension-credit-warm-up', function (req, res) {
  res.redirect('/coa-combined/v2/filters/rent-now.html')


});

  //ROUTING FROM PENSION CREDIT WARM UP TO RENT NOW
router.post('/coa-combined/v2/filters/coa-sp-only-knockout', function (req, res) {
  res.redirect('/coa-combined/phase1/gysp-v1/have-you-already-moved.html')


});


 //ROUTING FROM RENT NOW TO RENT BEFORE

router.post('/coa-combined/v2/filters/rent-now', function (req, res) {

  // Make a variable and give it the value from 'select-benefit
  var selectRentNow = req.session.data['rent-now']
    console.log("high", req.session.data['rent-now'])


  // Check whether the variable matches a condition
  if (selectRentNow == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/rent-before.html')
  } else if (selectRentNow == "No"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  }

});



 //ROUTING FROM RENT BEFORE TO HAVE YOU MOVED

router.post('/coa-combined/v2/filters/rent-before', function (req, res) {

  // Make a variable and give it the value from 'select-benefit
  var selectRentBefore = req.session.data['rent-before']
    console.log("high", req.session.data['rent-before'])


  // Check whether the variable matches a condition
  if (selectRentBefore == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/have-you-moved.html')
  } else if (selectRentBefore == "No"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  }

});

// ROUTING FOR HAVE YOU ALREADY MOVED TO UK ADDRESS

router.post('/coa-combined/v2/filters/have-you-moved', function (req, res) {

  // Make a variable and give it the value from 'already moved'
  var changeAlreadyMoved = req.session.data['already-moved']
    console.log("high", req.session.data['already-moved'])


  // Check whether the variable matches a condition
  if (changeAlreadyMoved == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/uk-address.html')
  } else if (changeAlreadyMoved == "No"){
    res.redirect('/coa-combined/v2/filters/not-already-moved-knockout.html')
  }

});

// ROUTING FOR ADDRESS IN THE UK

router.post('/coa-combined/v2/filters/uk-address', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var changeUkAddress = req.session.data['uk-address']
        console.log("high", req.session.data['uk-address'])


  // Check whether the variable matches a condition
  if (changeUkAddress == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/perm-or-temp.html')
  } else if (changeUkAddress == "No"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  }

});

// ROUTING FOR PERM OR TEMP
router.post('/coa-combined/v2/filters/perm-or-temp', function (req, res) {

  // Make a variable and give it the value from 'already moved'
  var perOrTemp = req.session.data['perm-or-temp']
    console.log("high", req.session.data['perm-or-temp'])


  // Check whether the variable matches a condition
  if (perOrTemp == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/type-of-property.html')
  } else if (perOrTemp == "No"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  }

});



// ROUTING FOR PROPERTY TYPE TO WHEN DID YOU MOVE

router.post('/coa-combined/v2/filters/type-of-property', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var propertyType = req.session.data['property-type']
        console.log("high", req.session.data['property-type'])


  // Check whether the variable matches a condition
  if (propertyType == "House"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/when-did-you-move.html')
  } else if (propertyType == "Flat"){
    res.redirect('/coa-combined/v2/filters/when-did-you-move.html')
  } else if (propertyType == "Hospital"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  } else if (propertyType == "Care home"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  } else if (propertyType == "Caravan"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  } else if (propertyType == "Other"){
    res.redirect('/coa-combined/v2/filters/when-did-you-move.html')
  } 
});

// ROUTING FOR WHEN DID YOU MOVE
router.post('/coa-combined/v2/filters/when-did-you-move', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeWhenDidYouMove = req.session.data['citizen-record-year']
  console.log("high", req.session.data['citizen-record-year'])

  // Check whether the variable matches a condition
  if (changeWhenDidYouMove == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/live-with-a-partner.html')

  } else if (changeWhenDidYouMove == "2027"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/report-change-after-move.html')

  } else {
    res.redirect('/coa-combined/v2/filters/live-with-a-partner.html')
  }

});

// ROUTING FROM HAVING A PARTNER
router.post('/coa-combined/v2/filters/live-with-a-partner', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectPartner = req.session.data['partner']
        console.log("high", req.session.data['partner'])

  // Check whether the variable matches a condition
  if (selectPartner == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/partner-live-at-previous-property.html')
  } else if (selectPartner == "No"){
    res.redirect('/coa-combined/v2/filters/live-with-other-people.html')
  }

});


// ROUTING FROM PARTNER AT PREVIOUS PROPERTY

router.post('/coa-combined/v2/filters/partner-live-at-previous-property', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectPartnerPP = req.session.data['partner-pp']
        console.log("high", req.session.data['partner-pp'])

  // Check whether the variable matches a condition
  if (selectPartnerPP == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/partner-move.html')
  } else if (selectPartnerPP == "No"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  }

});

// ROUTING FROM PARTNER MOVE

router.post('/coa-combined/v2/filters/partner-move', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectPartnerMove = req.session.data['partner-move']
        console.log("high", req.session.data['partner-move'])

  // Check whether the variable matches a condition
  if (selectPartnerMove == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/partner-dob.html')
  } else if (selectPartnerMove == "No"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  }

});

// ROUTING FROM PARTNER DOB

  //ROUTING FROM PENSION CREDIT WARM UP TO RENT NOW
router.post('/coa-combined/v2/filters/partner-dob', function (req, res) {
  res.redirect('/coa-combined/v2/filters/partner-hb.html')


});

// ROUTING FROM PARTNER HB

router.post('/coa-combined/v2/filters/partner-HB', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectPartnerHB = req.session.data['partner-hb']
        console.log("high", req.session.data['partner-hb'])

  // Check whether the variable matches a condition
  if (selectPartnerHB == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/live-with-other-people.html')
  } else if (selectPartnerHB == "No"){
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  }

});

// ROUTING FROM OTHER PEOPLE

router.post('/coa-combined/v2/filters/live-with-other-people', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectOtherPeople = req.session.data['other-people']
        console.log("high", req.session.data['other-people'])

  // Check whether the variable matches a condition
  if (selectOtherPeople == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/filters/coa-sp-only-knockout.html')
  } else if (selectOtherPeople == "No"){
    res.redirect('/coa-combined/v2/task-list.html')
  }

});








////////////////////////////////////////
////////////////////////////////////////
//////////////// HOME //////////////////
////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
///////////// NEW ADDRESS //////////////
////////////////////////////////////////







// ROUTING FOR WHAT IS YOUR NEW ADDRESS
router.post('/coa-combined/v2/new-address/address-finder/find-address', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeEnterPostcode = req.session.data['postcode-7']
  console.log("high", req.session.data['postcode-7'])

  // Check whether the variable matches a condition
  if (changeEnterPostcode == "YO3 1MJ"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/address-finder/select-an-address.html')

  } else if (changeEnterPostcode == "YO3 1MK"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/address-finder/no-address-found.html')

  } else if (changeEnterPostcode == "YO3 1ML"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/address-finder/already-your-address.html')

    } else if (changeEnterPostcode == "YO3 1MM"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/address-finder/address-single-result.html')

  } else {
    res.redirect('/coa-combined/v2/new-address/address-finder/select-an-address.html')
  }

});

// ROUTING FOR SELECT AN ADDRESS
router.post('/coa-combined/v2/new-address/address-finder/select-an-address', function (req, res) {

  // Make a variable and give it the value from 'select-address'
  var selectAddress = req.session.data['select-address']
  console.log("high", req.session.data['select-address'])

  // Check whether the variable matches a condition
  if (selectAddress == "Select1"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/housing-costs.html')

  } else if (selectAddress == "Select2"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/address-finder/already-your-address.html')

  } else if (selectAddress == "Select3"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/address-finder/address-single-result.html')

  } else if (selectAddress == "Select4"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/address-finder/this-is-a-prison.html')

   } else if (selectAddress == "Select5"){
    // Send user to next page
    res.redirect('/coa-combined/v2/new-address/cannot-change-your-address-online.html')

  } else {
    res.redirect('/coa-combined/v2/new-address/address-finder/check-your-details.html')
  }

});


  // ROUTING FOR SINGLE ADDRESS RESULT
router.post('/coa-combined/v2/new-address/address-finder/address-single-result', function (req, res) {
  res.redirect('/coa-combined/v2/new-address/address-finder/housing-costs.html')


});

   //ROUTING FROM HOUSING COSTS TO CHECK YOUR DETAILS
router.post('/coa-combined/v2/new-address/housing-costs', function (req, res) {
  res.redirect('/coa-combined/v2/new-address/check-your-details.html')


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
      res.redirect('/coa-combined/v2/where-you-lived-before/owned/money-from-sale.html')
    } else if (selectSoldProperty == "No"){
      // Send user to next page
      res.redirect('/coa-combined/v2/where-you-lived-before/owned/money-from-sale.html')
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
    res.redirect('/coa-combined/v2/where-you-live-now/owned/do-you-get-smi.html')
  } else if (selectMortgageLoan == "No"){
    res.redirect('/coa-combined/v2/where-you-live-now/owned/do-you-get-smi.html')
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
    res.redirect('/coa-combined/v2/where-you-live-now/owned/check-your-details.html')

  } else if (selectGetSmiSupport == "No"){
    // Send user to next page
    res.redirect('/coa-combined/v2/where-you-live-now/owned/check-your-details.html')
  
  }
    
});


  

// ROUTING TO WHEN DID YOU MOVE
router.post('/coa-combined/v2/about-here-you-live-now/owned/address-finder/find-address.html', function (req, res) {

  // Make a variable and give it the value from 'citizen-record-year'
  var changeWhenDidYouMove = req.session.data['citizen-record-year']
  console.log("high", req.session.data['citizen-record-year'])

  // Check whether the variable matches a condition
  if (changeWhenDidYouMove == "2025"){
    // Send user to next page
    res.redirect('coa-combined/v2/new-address/address-finder/find-address.html')

  } else if (changeWhenDidYouMove == "2024"){
    // Send user to next page
    res.redirect('coa-combined/v2/report-change-after-move.html')

  } else {
    res.redirect('coa-combined/v2/new-address/address-finder/find-address.html')
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
      res.redirect('/coa-combined/v2/where-you-live-now/owned/how-much-did-you-pay.html')
    } else if (selectHousingStatus == "I rent"){
      // Send user to next page
      res.redirect('coa-combined/v2/where-you-live-now/rent/housing-costs.html')
    } else if (selectHousingStatus == "I'm renting and buying through a shared ownership scheme"){
      // Send user to next page
      res.redirect('coa-combined/v2/where-you-live-now/shared/how-much-did-you-pay.html')
    } else if (selectHousingStatus == "I live in someone else's home without paying rent"){
      // Send user to next page
      res.redirect('coa-combined/v2/task-list3')
    } else if (selectHousingStatus == "other"){
      // Send user to next page
      res.redirect('coa-combined/v2/where-you-live-now/when-did-you-move.html')
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
      res.redirect('/coa-combined/v2/where-you-lived-before/owned/sold-the-property.html')
    } else if (selectHousingStatus == "I rented"){
      // Send user to next page
      res.redirect('coa-combined/v2/where-you-live-now/rent/housing-costs.html')
    } else if (selectHousingStatus == "I was renting and buying through a shared ownership scheme"){
      // Send user to next page
      res.redirect('coa-combined/v2/where-you-live-now/shared/how-much-did-you-pay.html')
    } else if (selectHousingStatus == "I lived in someone else's home without paying rent"){
      // Send user to next page
      res.redirect('coa-combined/v2/task-list3')
    } else if (selectHousingStatus == "Other"){
      // Send user to next page
      res.redirect('coa-combined/v2/where-you-live-now/when-did-you-move.html')
    }   
  });




/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////// PEOPLE WHO LIVE WITH YOU//////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////



/////////////////////////////////////
////////////// PARTNER //////////////
/////////////////////////////////////





// // ROUTING FROM PARTNER DETAILS
// router.post('/coa-combined/v2/partner/partner-details', function (req, res) {

//   // Make a variable and give it the value from 'partner-record-year'
//   var selectPartner = req.session.data['partner-record-year']
//         console.log("high", req.session.data['partner-record-year'])

//   // Check whether the variable matches a condition
//   if (selectPartner == "2000"){
//     // Send user to next page
//     res.redirect('/coa-combined/v2/partner/partner-details.html')
//   } else {
//     res.redirect('/coa-combined/v2/partner/do-they-work.html')
//   }

// });

// ROUTING FROM PARTNER DETAILS TO REGISTERED BLIND
router.post('/coa-combined/v2/partner/partner-details', function (req, res) {
  res.redirect('/coa-combined/v2/partner/partner-hospital-stay.html')


});

// ROUTING FROM PARTNER DETAILS TO REGISTERED BLIND
router.post('/coa-combined/v2/partner/partner-dob', function (req, res) {
  res.redirect('/coa-combined/v2/partner/partner-work.html')


});

// ROUTING FROM PARTNER WORK TO EDUCATION
router.post('/coa-combined/v2/partner/partner-work', function (req, res) {
  res.redirect('/coa-combined/v2/partner/partner-in-education.html')


});

// ROUTING FROM PARTNER IN EDUCATION TO HOSPITAL STAY
router.post('/coa-combined/v2/partner/partner-in-education', function (req, res) {
  res.redirect('/coa-combined/v2/partner/partner-hospital-stay.html')


});

// ROUTING FROM PARTNER HOSPITAL STAY TO REGISTERED BLIND
router.post('/coa-combined/v2/partner/partner-hospital-stay', function (req, res) {
  res.redirect('/coa-combined/v2/partner/partner-registered-blind.html')


});

// ROUTING TO PARTNER AGREE
router.post('/coa-combined/v2/partner/partner-agree', function (req, res) {

  // Make a variable and give it the value from 'uk-address'
  var selectPartnerAgree = req.session.data['partner-agree']
        console.log("high", req.session.data['partner-agree'])

  // Check whether the variable matches a condition
  if (selectPartnerAgree == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/partner/partner-details.html')
  } else if (selectPartnerAgree == "No"){
    res.redirect('/coa-combined/v2/partner/partner-not-agree.html')
  }

});





// ROUTING FROM REGISTERED BLIND TO CHECK YOUR DETAILS
router.post('/coa-combined/v2/partner/partner-registered-blind', function (req, res) {
  res.redirect('/coa-combined/v2/partner/partner-check-your-details.html')


});

// // ROUTING FROM CHECK YOUR DETAILS TO PARTNER ADDED
// router.post('/coa-combined/v2/partner/partner-check-your-details', function (req, res) {
//   res.redirect('/coa-combined/v2/partner/partner-added.html')


// });


// ROUTING FROM PARTNER CHECK DETAILS
router.post('/coa-combined/v2/partner/partner-check-your-details', function (req, res) {

  // Make a variable and give it the value from 'partner-record-year'
  var checkPartner = req.session.data['partner']
        console.log("high", req.session.data['partner'])

  // Check whether the variable matches a condition
  if (checkPartner == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/partner/partner-added.html')
  } else {
    res.redirect('/coa-combined/v2/task-list.html')
  }

});

// ROUTING FROM remove partner
router.post('/coa-combined/v2/partner/partner-remove', function (req, res) {

  // Make a variable and give it the value from 'partner-record-year'
  var partnerRemove = req.session.data['partnerRemove']
        console.log("high", req.session.data['partnerRemove'])

  // Check whether the variable matches a condition
  if (partnerRemove == "Yes"){
    // Send user to next page
    res.redirect('/coa-combined/v2/partner/do-you-live-with-a-partner.html')
  } else {
    res.redirect('/coa-combined/v2/partner/partner-added.html')
  }

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
router.post('/coa-combined/v2/s&i/capital-select-capital', function (req, res) {
  res.redirect('/coa-combined/v2/s&i/capital-total-today.html')


});

// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v2/s&i/capital-total-today', function (req, res) {
  res.redirect('/coa-combined/v2/s&i/other-property.html')


});

// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v2/s&i/other-property', function (req, res) {
  res.redirect('/coa-combined/v2/s&i/property-repairs.html')


});

// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v2/s&i/property-repairs', function (req, res) {
  res.redirect('/coa-combined/v2/s&i/disregards.html')


});

// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v2/s&i/disregards', function (req, res) {
  res.redirect('/coa-combined/v2/s&i/capital-check-answers.html')


});



////////////////////////////////////////////////
////////////////////////////////////////////////
////////////// HOW WE CONTACT YOU //////////////
////////////////////////////////////////////////
////////////////////////////////////////////////



///////////////////////////////////////////////
/////////// HOW WE WILL CONTACT YOU////////////
///////////////////////////////////////////////



// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v2/how-we-contact-you/provide-email-address', function (req, res) {
  res.redirect('/coa-combined/v2/how-we-contact-you/provide-phone-number.html')


});

// ROUTING FROM SELECT INVESTMENTS TO MONEY YOU HAVE TODAY
router.post('/coa-combined/v2/how-we-contact-you/provide-phone-number', function (req, res) {
  res.redirect('/coa-combined/v2/how-we-contact-you/contact-check-your-details.html.html')


});


module.exports = router