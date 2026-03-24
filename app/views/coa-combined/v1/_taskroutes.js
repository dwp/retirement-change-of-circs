const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const SPa_Boundry_Start = new Date(Date.parse('06 April 1951 00:00:00 GMT'))
const SPa_Boundry_End = new Date(Date.parse('06 April 1953 00:00:00 GMT'))

var date = new Date(); //get todays date

function createBackdatingDate() {
   var backdateDate = new Date()
   backdateDate.setMonth(backdateDate.getMonth() - 3)
   return backdateDate
 }

var version = "v26";

router.get('/' + version +'/application/guidance/how-to-claim', function(req, res) {
   req.session.data['backdateDateString'] = createBackdatingDate()
   console.log('Backdating date: ' + req.session.data['backdateDateString'])
   res.render(version +'/application/guidance/how-to-claim')
});

/////////////////////////////////////
//////////// ELIGIBILITY ////////////
/////////////////////////////////////

router.post('/' + version + '/application/eligibility-before-service-start', function (req, res) {
   if (req.session.data["checkPrevious"] == "Yes, I have an application reference") {
      res.redirect("save-and-return-challenge")
   }
   else if (req.session.data["checkPrevious"] == "Yes, but I do not have an application reference") {
      res.redirect("eligibility-service-restart")
   }
   else if (req.session.data["checkPrevious"] == "No") {
      res.redirect("eligibility-service-start")
   }
   else { }


});

router.post('/' + version + '/application/eligibility-service-start', function (req, res) {
   if (req.session.data["checkApply"] == 'no') {
      req.session.data['canPerformEligibility'] = 'false';
      res.redirect("eligibility-successful")
   }
   else (
      res.redirect("eligibility-country-you-live-in")
   )

});

router.post('/' + version + '/application/eligibility-country-you-live-in', function (req, res) {
   //create application reference
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let charactersLength = characters.length;
   for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   req.session.data['accessCode'] = result
   req.session.data['accessDate'] = new Date()

   if (req.session.data["countryLiveIn"] == 'Somewhere else') {
      res.redirect("eligibility-do-not-live-uk")
   }
   else {
      res.redirect("eligibility-start-dob")
   }
});


router.post('/' + version + '/application/eligibility-start-dob', function (req, res) {
   req.session.data['Carersamount'] = '0'
   req.session.data['EASDamount'] = '0'

   var claimantDoB = new Date()
   claimantDoB.setTime(0)
   claimantDoB.setDate(req.session.data["dateOfBirthdd"])
   claimantDoB.setMonth(req.session.data["dateOfBirthmm"] - 1)
   claimantDoB.setYear(req.session.data["dateOfBirthyy"])
   req.session.data['claimantDoB'] = claimantDoB

   let SPa = new Date(Date.parse(req.session.data['claimantDoB']))
   let DoB = new Date(Date.parse(req.session.data['claimantDoB']))
   SPa.setFullYear(SPa.getFullYear() + 66);
   let today = new Date()
   today.setMonth(today.getMonth() + 4);

   if (SPa < today) {
      if (DoB > SPa_Boundry_Start && DoB < SPa_Boundry_End) {
         res.redirect("eligibility-claimant-sex")
      }
      else if (DoB < SPa_Boundry_Start) {
         req.session.data['canPerformEligibility'] = 'false';
         res.redirect("eligibility-has-children");
      }
      else {
         res.redirect("eligibility-has-children")
      }
   }
   else {
      res.redirect("eligibility-too-young")
   }

});

router.post('/' + version + '/application/eligibility-claimant-sex', function (req, res) {
   let dob = new Date(Date.parse(req.session.data['claimantDoB']));

   if (req.session.data['claimantSex'] == 'Male') {
      let SC_SPaDate = new Date(Date.parse('05 May 1951 00:00:00 GMT'));
      if (dob < SC_SPaDate) {
         req.session.data['canPerformEligibility'] = 'false'
      }
      res.redirect("eligibility-has-children")
   }
   else {
      let SC_SPaDate = new Date(Date.parse('05 May 1956 00:00:00 GMT'));
      if (dob < SC_SPaDate) {
         req.session.data['canPerformEligibility'] = 'false'
      }
      res.redirect("eligibility-has-children")
   }
});

router.post('/' + version + '/application/eligibility-has-children', function (req, res) {
   if (req.session.data['hasChildren'] == "Yes") {
      req.session.data['canPerformEligibility'] = 'false';
      res.redirect("eligibility-housing-costs");
   }
   else {
      res.redirect("eligibility-housing-costs")
   }
});

router.post('/' + version + '/application/eligibility-housing-costs', function (req, res) {
   if (req.session.data['serviceCharge'] == 'Yes' || req.session.data['groundRent'] == 'I own my home and pay ground rent') {
      req.session.data['canPerformEligibility'] = 'false';
   }
   res.redirect("eligibility-income-from-employment");

});

router.post('/' + version + '/application/eligibility-income-from-employment', function (req, res) {

   if (req.session.data['hasPartner'] == 'Yes, we live together') {
      // this is the partner flow
      if (req.session.data['checkApply'] == 'no') {
         res.redirect("eligibility-route");
      }
      else {
         res.redirect("eligibility-income-from-war-pension");
      }
   }
   else {
      //this is the claimant flow
      if (req.session.data['checkApply'] == 'no') {
         res.redirect("eligibility-has-partner");
      }
      else {
         res.redirect("eligibility-income-from-war-pension");
      }
   }
});

router.post('/' + version + '/application/eligibility-income-from-war-pension', function (req, res) {
   req.session.data['claimantHasWarPension'] = req.session.data['hasWarPension']
   if (req.session.data['hasWarPension'] == 'Yes') {
      req.session.data['canPerformEligibility'] = 'false'
   }

   if (req.session.data['hasPartner'] == 'Yes, we live together') {
      res.redirect("eligibility-benefits-partner");
   }
   else {
      res.redirect("eligibility-benefits-claimant");
   }
});


router.post('/' + version + '/application/eligibility-benefits-claimant', function (req, res) {
   let benefits = req.session.data['ClaimantBenefitsEntitled'];

   if (benefits.includes('Attendance Allowance') || benefits.includes('Disability Living Allowance') ||
      benefits.includes('Scottish Adult Disability Living Allowance') ||
      benefits.includes('Personal Independence Payment') || benefits.includes('Adult Disability Payment') ||
      benefits.includes('Armed Forces Independence Payment') || benefits.includes('Pension Age Disability Payment') ||
      benefits.includes('Constant Attendance Allowance')
   ) {
      req.session.data['claimantEASD'] = 'true';
   }

   if (benefits.includes('Carer\'s allowance') || benefits.includes('Carer support payment')) {
      req.session.data['claimantCarers'] = 'true';
   }

   if (req.session.data['claimantCarers'] == 'true' && req.session.data['claimantEASD'] == 'true') {
      res.redirect("eligibility-underlying-carers");
   }
   else {
      res.redirect("eligibility-benefits-awaiting-claimant");
   }
});


router.post('/' + version + '/application/eligibility-benefits-awaiting-claimant', function (req, res) {
   let benefits = req.session.data['ClaimantBenefitsAwaiting'];

   if (benefits.includes('Attendance Allowance') || benefits.includes('Disability Living Allowance') ||
      benefits.includes('Scottish Adult Disability Living Allowance') ||
      benefits.includes('Personal Independence Payment') || benefits.includes('Adult Disability Payment') ||
      benefits.includes('Armed Forces Independence Payment') || benefits.includes('Pension Age Disability Payment') ||
      benefits.includes('Constant Attendance Allowance')) {
      req.session.data['claimantEASD'] = 'true';
   }

   if (benefits.includes('Carer\'s allowance') || benefits.includes('Carer support payment')) {
      req.session.data['claimantCarers'] = 'true';
   }

   res.redirect("eligibility-underlying-carers");

});

router.post('/' + version + '/application/eligibility-underlying-carers', function (req, res) {

   if (req.session.data['hasCarersUnderlyingEntitlement'] == 'Yes' || req.session.data['hasCarersUnderlyingEntitlement'] == "I'm not sure") {
      req.session.data['canPerformEligibility'] = 'false'
   }
   if (req.session.data['hasPartner'] == 'Yes, we live together') {
      res.redirect("eligibility-route");
   }
   else {
      res.redirect("eligibility-has-partner");
   }
});




router.post('/' + version + '/application/eligibility-has-partner', function (req, res) {

   if (req.session.data['hasPartner'] == 'Yes, we live together') {
      res.redirect("eligibility-partner-dob")
   }
   else {
      res.redirect("eligibility-route");
   }
});

router.post('/' + version + '/application/eligibility-partner-dob', function (req, res) {

   // create a date variable
   var partnerDoB = new Date()

   // set the time to 0:00
   partnerDoB.setTime(0)

   // set the day, month and year based on input 
   partnerDoB.setDate(req.session.data["dateOfBirthdd"])
   partnerDoB.setMonth(req.session.data["dateOfBirthmm"] - 1)
   partnerDoB.setYear(req.session.data["dateOfBirthyy"])

   // save the created date/time as a session
   req.session.data['partnerDoB'] = partnerDoB;


   let SPa = new Date(Date.parse(partnerDoB))
   let DoB = new Date(Date.parse(partnerDoB))
   SPa.setFullYear(SPa.getFullYear() + 66);
   let today = new Date()
   today.setMonth(today.getMonth() + 4);

   if (SPa < today) {
      if (DoB > SPa_Boundry_Start && DoB < SPa_Boundry_End) {
         res.redirect("eligibility-partner-sex")
      }
      else if (DoB < SPa_Boundry_Start) {
         req.session.data['canPerformEligibility'] == 'false';
         res.redirect("eligibility-benefits-partner");
      }
      else {
         res.redirect("eligibility-income-from-employment")
      }
   }
   else {
      let claimantDoB = new Date(req.session.data['claimantDoB']);
      let triggerDate = new Date("1954-01-06T00:00:00.000Z")
      if (claimantDoB < triggerDate) {
         res.redirect("eligibility-housing-benefit")
      }
      else {
         res.redirect("eligibility-both-too-young")
      }

   }


});

router.post('/' + version + '/application/eligibility-partner-sex', function (req, res) {
   let dob = new Date(Date.parse(req.session.data['partnerDoB']));
   let today = new Date();
   let SPadate = today.setFullYear(today.getFullYear() - 66);
   let claimantdob = new Date(Date.parse(req.session.data['claimantDoB']))

   if (req.session.data['partnerSex'] == 'Male') {
      let SC_SPaDate = new Date(Date.parse('05 May 1951 00:00:00 GMT'));

      if (claimantdob > SPadate && dob > SPadate) {
         req.session.data['dropout'] = "spa";
         res.redirect("eligibility-dropout");
      }
      else if (claimantdob > SPadate || dob > SPadate) {
         req.session.data['dropout'] = "mixed";
         res.redirect("eligibility-dropout");
      }
      else if (dob < SC_SPaDate) {
         req.session.data['canPerformEligibility'] = 'false'
      }


   }
   else {
      let SC_SPaDate = new Date(Date.parse('05 May 1956 00:00:00 GMT'));

      if (claimantdob > SPadate && dob > SPadate) {
         req.session.data['dropout'] = "spa";
         res.redirect("eligibility-dropout");
      }
      else if (claimantdob > SPadate || dob > SPadate) {
         req.session.data['dropout'] = "mixed";
         res.redirect("eligibility-dropout");
      }
      else if (dob < SC_SPaDate) {
         req.session.data['canPerformEligibility'] = 'false'
      }
   }
   res.redirect("eligibility-income-from-employment")
});

router.post('/' + version + '/application/eligibility-benefits-partner', function (req, res) {
   let benefits = req.session.data['PartnerBenefitsEntitled'];

   if (
      benefits.includes('Attendance Allowance') || benefits.includes('Disability Living Allowance') ||
      benefits.includes('Scottish Adult Disability Living Allowance') ||
      benefits.includes('Personal Independence Payment') || benefits.includes('Adult Disability Payment') ||
      benefits.includes('Armed Forces Independence Payment') || benefits.includes('Pension Age Disability Payment') ||
      benefits.includes('Constant Attendance Allowance')
   ) {
      req.session.data['partnerEASD'] = 'true';
   }

   if (benefits.includes('Carer\'s allowance') || benefits.includes('Carer support payment')) {
      req.session.data['partnerCarers'] = 'true';
   }

   if (req.session.data['partnerCarers'] == 'true' && req.session.data['partnerEASD'] == 'true') {
      res.redirect("eligibility-income-from-employment");
   }
   else {
      res.redirect("eligibility-benefits-awaiting-partner");
   }



});

router.post('/' + version + '/application/eligibility-benefits-awaiting-partner', function (req, res) {
   let benefits = req.session.data['PartnerBenefitsAwaiting'];

   if (
      benefits.includes('Attendance Allowance') || benefits.includes('Disability Living Allowance') ||
      benefits.includes('Scottish Adult Disability Living Allowance') ||
      benefits.includes('Personal Independence Payment') || benefits.includes('Adult Disability Payment') ||
      benefits.includes('Armed Forces Independence Payment') || benefits.includes('Pension Age Disability Payment') ||
      benefits.includes('Constant Attendance Allowance')
   ) {
      req.session.data['partnerEASD'] = 'true';
   }

   if (benefits.includes('Carer\'s allowance') || benefits.includes('Carer support payment')) {
      req.session.data['partnerCarers'] = 'true';
   }

   if (req.session.data['partnerCarers'] == 'true') {
      res.redirect("eligibility-partner-income-from-employment");
   }
   else {
      res.redirect("eligibility-underlying-carers-partner");
   }


});

router.post('/' + version + '/application/eligibility-underlying-carers-partner', function (req, res) {

   if (req.session.data['hasCarersUnderlyingEntitlementPartner'] == 'Yes' || req.session.data['hasCarersUnderlyingEntitlementPartner'] == "I'm not sure") {
      req.session.data['canPerformEligibility'] = 'false'
   }
   res.redirect("eligibility-route");
});




router.get('/' + version + '/application/eligibility-route', function (req, res) {
   // this is used to logically determine if its a complex case
   if (
      req.session.data['hasPartner'] == 'Yes, we live together'
      &&
      (req.session.data['ClaimantBenefitsEntitled'] && (req.session.data['ClaimantBenefitsEntitled'].includes("Attendance Allowance") || req.session.data['ClaimantBenefitsAwaiting'].includes("Attendance Allowance")))
      &&
      (req.session.data['PartnerBenefitsEntitled'] && (req.session.data['PartnerBenefitsEntitled'].includes("Attendance Allowance") || req.session.data['PartnerBenefitsAwaiting'].includes("Attendance Allowance")))
   ) {
      console.log('Couples AA dropout')
      res.redirect("eligibility-cya");
   }
   else if (req.session.data['canPerformEligibility'] == 'false') {
      console.log('Couples AA dropout')
      res.redirect("eligibility-cya");
   }
   else {
      res.redirect("eligibility-calculate");
   }
});


router.get('/' + version + '/application/eligibility-calculate', function (req, res) {
   // clear sessioon data
   req.session.data['standardamount'] = 0
   req.session.data['disregard'] = 0
   req.session.data['EASDamount'] = 0
   req.session.data['Carersamount'] = 0
   req.session.data['applicableamount'] = 0

   // calculate standard amount
   if (req.session.data['hasPartner'] == 'Yes, we live together') {
      req.session.data['standardamount'] = '346.60'
      if (
         (req.session.data['claimantCarers'] == 'true' || req.session.data['partnerCarers'] == 'true')
         && (req.session.data['hasEmploymentIncome'] == 'Yes' || req.session.data['partnerHasEmploymentIncome'] == 'Yes')) {
         req.session.data['disregard'] = 20;
      }
      else {
         req.session.data['disregard'] = 10;
      }
   }
   else {
      req.session.data['standardamount'] = '227.10'

   }

   // add any EASD
   if (req.session.data['claimantEASD'] == 'true') {
      req.session.data['EASDamount'] = parseFloat(req.session.data['EASDamount']) + 82.90;
   }
   if (req.session.data['partnerEASD'] == 'true') {
      req.session.data['EASDamount'] = parseFloat(req.session.data['EASDamount']) + 82.90;
   }

   // add any Carers Premium
   if (req.session.data['claimantCarers'] == 'true') {
      req.session.data['Carersamount'] = parseFloat(req.session.data['Carersamount']) + 46.40;
   }

   if (req.session.data['partnerCarers'] == 'true') {
      req.session.data['Carersamount'] = parseFloat(req.session.data['Carersamount']) + 46.40;
   }

   // calculate applicable amount
   let applicable = parseFloat(req.session.data['standardamount']) + parseFloat(req.session.data['EASDamount']) + parseFloat(req.session.data['Carersamount']);
   req.session.data['applicableamount'] = applicable.toFixed(2)

   // Perform weekly to monthly convertion
   let monthlyapplicable = ((req.session.data['disregard'] + applicable) * 52) / 12;

   // Round up to nearest pound
   req.session.data['monthlyapplicableamount'] = Math.ceil(monthlyapplicable)

   res.redirect("eligibility-income")
});

router.post('/' + version + '/application/eligibility-income', function (req, res) {
   res.redirect("eligibility-cya")
});

router.post('/' + version + '/application/eligibility-CYA', function (req, res) {
   if (req.session.data['checkApply'] == 'no') {
      res.redirect("save-and-return")
   }
   else if (req.session.data['incomeAmount'] == 'less than') {
      res.redirect("eligibility-successful")
   }
   else if (req.session.data['incomeAmount'] == 'more than') {
      res.redirect("eligibility-unsuccessful")
   }
   else {
      res.redirect("eligibility-not-enough-data")
   }
});

router.post('/' + version + '/application/eligibility-housing-benefit', function (req, res) {
   if (req.session.data['hasHousingBenefit'] == 'Yes') {
      res.redirect("eligibility-income-from-employment")
      //res.redirect("eligibility-benefits-partner")
   }
   else {
      res.redirect("eligibility-both-too-young")
   }
});

router.post('/' + version + '/application/eligibility-successful', function (req, res) {

});

//////////////////////////////////////////
//////////// BACKDATE SECTION ////////////
//////////////////////////////////////////

router.post('/' + version + '/application/backdating/backdate-offered-date', function (req, res) {
   let result = req.session.data['chooseBackdateOfferedDate'];
   if (result.includes("Yes")) {
      req.session.data['backdateDatedd'] = null
      res.redirect("backdate-cya")
   }
   else if (result.includes("No")) {
      res.redirect("backdate-choose-date")
   }
});

router.post('/' + version + '/application/backdating/backdate-choose-date', function (req, res) {
   if (req.session.data['backdateDatemm'] < 10) {
      req.session.data['backdateDatemm'] = "0" + req.session.data['backdateDatemm']
   }
   req.session.data['backdateDateString'] = req.session.data['backdateDateyy'] + "-" + req.session.data['backdateDatemm'] + "-" + req.session.data['backdateDatedd'] + "T00:00:00.000"
   res.redirect("backdate-cya")
});
router.post('/' + version + '/application/backdating/backdate-cya', function (req, res) {
   req.session.data['backdateStatus'] = "completed"
   res.redirect("../application-tasklist")
});

//////////////////////////////////////////
//////////// PERSONAL DETAILS ////////////
//////////////////////////////////////////

router.post('/' + version + '/application/personal-details/personaldetails-name', function (req, res) {

   // clear down previous data
   req.session.data['regBlindDate'] = null
   req.session.data['blindDD'] = null
   req.session.data['blindMM'] = null
   req.session.data['blindYY'] = null
   req.session.data['registeredBlindAtBackdate'] = null
   req.session.data['nino'] = null

   res.redirect("personaldetails-NI")
});
router.post('/' + version + '/application/personal-details/personaldetails-NI', function (req, res) {
   res.redirect("personaldetails-registered-blind")
});
router.post('/' + version + '/application/personal-details/personaldetails-registered-blind', function (req, res) {
   if (req.session.data['registeredBlind'] == "Yes") {
      res.redirect("personaldetails-registered-blind-date")
   }
   else if (req.session.data['registeredBlind'] == "No") {
      res.redirect("personaldetails-cya")
   }
});
router.post('/' + version + '/application/personal-details/personaldetails-registered-blind-date', function (req, res) {
   if (req.session.data['registeredBlindAtBackdate'] == "No") {
      res.redirect("personaldetails-registered-blind-date-entry")
   }
   else if (req.session.data['registeredBlindAtBackdate'] == "Yes") {
      res.redirect("personaldetails-cya")
   }
});
router.post('/' + version + '/application/personal-details/personaldetails-registered-blind-date-entry', function (req, res) {
   req.session.data['regBlindDate'] = new Date(req.session.data['blindYY'] + "-" + req.session.data['blindMM'] + "-" + req.session.data['blindDD'])
   res.redirect("personaldetails-cya")
});
router.post('/' + version + '/application/personal-details/personaldetails-cya', function (req, res) {
   req.session.data['personaldetailsStatus'] = 'completed'
   res.redirect("../application-tasklist")
});

/////////////////////////////////////////////////////
//////////// NATIONALITY AND IMMIGRATION ////////////
/////////////////////////////////////////////////////

router.post('/' + version + '/application/nationality/nationality', function (req, res) {
   if (req.session.data['nationality-option'] == "British" || req.session.data['nationality-option'] == "Irish") {
      req.session.data['nationality'] = req.session.data['nationality-option']
      res.redirect("nationality-immigration")
   }
   else {
      res.redirect("nationality-select")
   }
});

router.post('/' + version + '/application/nationality/nationality-select', function (req, res) {
   if (req.session.data['nationality-option'] == "European Economic area (EEA) or Swiss national") {
      res.redirect("nationality-settled-status")
   }
   else {
      res.redirect("nationality-immigration")
   }
});

router.post('/' + version + '/application/nationality/nationality-settled-status', function (req, res) {
   if (req.session.data['settledStatus'] == "Something else" || req.session.data['settledStatus'] == "I do not know") {
      res.redirect("nationality-pre73")
   }
   else {
      res.redirect("nationality-check-answers")
   }
});

router.post('/' + version + '/application/nationality/nationality-pre73', function (req, res) {
   if (req.session.data['settledPre73'] == "Yes") {
      res.redirect("nationality-immigration")
   }
   else {
      res.redirect("nationality-dropout")
   }
});

router.post('/' + version + '/application/nationality/nationality-immigration', function (req, res) {
   if (req.session.data['rightToReside'] == "No" || req.session.data['lived6months'] == "No") {
      res.redirect("nationality-immigration-returnedtouk")
   }
   else {
      res.redirect("nationality-check-answers")
   }
});

router.post('/' + version + '/application/nationality/nationality-immigration-returnedtouk', function (req, res) {
   if (req.session.data['returnedtoUK'] == "Yes") {
      res.redirect("nationality-immigration-livingintheUK")
   }
   else {
      res.redirect("nationality-immigration-undersponsorship")
   }
});

router.post('/' + version + '/application/nationality/nationality-immigration-livingintheUK', function (req, res) {

   if (req.session.data['lastLeftUK-day']) {
      req.session.data['lastLeftUK'] = new Date(req.session.data['lastLeftUK-year'] + '-' + req.session.data['lastLeftUK-month'] + '-' + req.session.data['lastLeftUK-day'])
   }

   req.session.data['returnedtoUKDate'] = new Date(req.session.data['returnedtoUK-year'] + '-' + req.session.data['returnedtoUK-month'] + '-' + req.session.data['returnedtoUK-day'])
   res.redirect("nationality-immigration-undersponsorship")

});

router.post('/' + version + '/application/nationality/nationality-immigration-undersponsorship', function (req, res) {
   if (req.session.data['underSponsorship'] == "Yes") {
      res.redirect("nationality-immigration-sponsorshipDetails")
   }
   else {
      res.redirect("nationality-immigration-seekingAsylum")
   }
});

router.post('/' + version + '/application/nationality/nationality-immigration-sponsorshipDetails', function (req, res) {
   req.session.data['sponsorshipSignedDate'] = new Date(req.session.data['sponsorshipSigned-year'] + '-' + req.session.data['sponsorshipSigned-month'] + '-' + req.session.data['sponsorshipSigned-day'])
   res.redirect("nationality-immigration-sponsorPostcode")
});

router.post('/' + version + '/application/nationality/nationality-immigration-sponsorSelectAddress', function (req, res) {
   res.redirect("nationality-immigration-seekingAsylum")
});

router.post('/' + version + '/application/nationality/nationality-immigration-sponsorAddress', function (req, res) {
   let address = ""

   if (req.session.data['sponsorAddress-1']) {
      address += req.session.data['sponsorAddress-1']
   }
   if (req.session.data['sponsorAddress-2']) {
      address += ", " + req.session.data['sponsorAddress-2']
   }
   if (req.session.data['sponsorAddress-3']) {
      address += ", " + req.session.data['sponsorAddress-3']
   }
   if (req.session.data['sponsorAddress-4']) {
      address += ", " + req.session.data['sponsorAddress-4']
   }
   if (req.session.data['sponsorAddress-5']) {
      address += ", " + req.session.data['sponsorAddress-5']
   }
   console.log(address)
   req.session.data['sponsorAddress'] = address
   res.redirect("nationality-immigration-seekingAsylum")
});

router.post('/' + version + '/application/nationality/nationality-immigration-seekingAsylum', function (req, res) {
   if (req.session.data['seekingAsylum'] == 'Yes') {
      res.redirect("nationality-immigration-asylumApplication")
   }
   else {
      res.redirect("nationality-check-answers")
   }

});

router.post('/' + version + '/application/nationality/nationality-immigration-asylumApplication', function (req, res) {
   req.session.data['asylumDecisionDate'] = new Date(req.session.data['asylumDecisionDate-year'] + '-' + req.session.data['asylumDecisionDate-month'] + '-' + req.session.data['asylumDecisionDate-day'])

   res.redirect("nationality-check-answers")
});



router.post('/' + version + '/application/nationality/nationality-check-answers', function (req, res) {
   req.session.data['nationalitysectionStatus'] = 'completed'
   res.redirect("../application-tasklist")
});

////////////////////////////////////////////
//////////// TIME OUT OF THE UK ////////////
////////////////////////////////////////////

router.post('/' + version + '/application/outofUK/outofUK', function (req, res) {
   if (req.session.data['timeoutUK'] == "Yes") {
      res.redirect("outofUK-periods")
   }
   else {
      res.redirect("outofUK-check-answers")
   }
});
router.post('/' + version + '/application/outofUK/outofUK-periods', function (req, res) {
   res.redirect("outofUK-medical-treatment")
});
router.post('/' + version + '/application/outofUK/outofUK-medical-treatment', function (req, res) {
   if (req.session.data['medicalOutUK'] == 'No') {
      res.redirect("outofUK-dates")
   }
   else {
      res.redirect("outofUK-check-answers")
   }
});
router.post('/' + version + '/application/outofUK/outofUK-dates', function (req, res) {
   req.session.data['outofUK-date'] = new Date(req.session.data['outofUK-yy'] + "-" + req.session.data['outofUK-mm'] + "-" + req.session.data['outofUK-dd'])
   req.session.data['returnedtoUK-date'] = new Date(req.session.data['returnedtoUK-yy'] + "-" + req.session.data['returnedtoUK-mm'] + "-" + req.session.data['returnedtoUK-dd'])
   res.redirect("outofUK-check-answers")
});
router.post('/' + version + '/application/outofUK/outofUK-check-answers', function (req, res) {
   req.session.data['outofUKStatus'] = 'completed'
   res.redirect("../application-tasklist")
});

//////////////////////////////////////////
///////////// HOSPITAL STAYS /////////////
//////////////////////////////////////////

router.post('/' + version + '/application/hospital-stays/hospital-stays', function (req, res) {
   if (req.session.data['HospitalStill'] == "Yes") {
      res.redirect("hospital-you-are-in")
   }
   else {
      res.redirect("hospital-now-check-answers")
   }
});

router.post('/' + version + '/application/hospital-stays/hospital-still', function (req, res) {
   req.session.data['HospitalStill' + String(req.session.data['CurrentHospital'])] = req.session.data['HospitalStill'];
   if (req.session.data['HospitalStill'] == "Yes") {
      res.redirect("hospital-you-are-in")
   }
   else {
      res.redirect("hospital-previous-stays")
   }
});


router.post('/' + version + '/application/hospital-stays/hospital-you-are-in', function (req, res) {
   res.redirect("hospital-in")
});

router.post('/' + version + '/application/hospital-stays/hospital-in', function (req, res) {
   req.session.data['hospitalIn'] = new Date(req.session.data['hospitalIn-year'] + "-" + req.session.data['hospitalIn-month'] + "-" + req.session.data['hospitalIn-day'])
   res.redirect("hospital-expected-discharge")
});

router.post('/' + version + '/application/hospital-stays/hospital-expected-discharge', function (req, res) {
   if (req.session.data['HospitalExpectedDischarge'] == "Yes") {
      res.redirect("hospital-discharge-date")
   }
   else {
      res.redirect("hospital-now-check-answers")
   }
});

router.post('/' + version + '/application/hospital-stays/hospital-discharge-date', function (req, res) {
   req.session.data['hospitalOut'] = new Date(req.session.data['hospitalOut-year'] + "-" + req.session.data['hospitalOut-month'] + "-" + req.session.data['hospitalOut-day'])
   res.redirect("hospital-now-check-answers")
});

router.post('/' + version + '/application/hospital-stays/hospital-now-check-answers', function (req, res) {
   res.redirect("hospital-previous-stays")
});

router.post('/' + version + '/application/hospital-stays/hospital-previous-stays', function (req, res) {
   if (req.session.data['otherHospitalStays'] == "Yes") {
      req.session.data['hospitalLocation'] = null;
      req.session.data['hospitalNHS'] = null;
      req.session.data['hospitalIn-day'] = null;
      req.session.data['hospitalIn-month'] = null;
      req.session.data['hospitalIn-year'] = null;
      req.session.data['hospitalIn'] = null;
      req.session.data['hospitalOut-day'] = null;
      req.session.data['hospitalOut-month'] = null;
      req.session.data['hospitalOut-year'] = null;
      req.session.data['hospitalOut'] = null;

      res.redirect("hospital-dates")
   }
   else {
      res.redirect("hospital-other-check-answers")
   }
});

router.post('/' + version + '/application/hospital-stays/hospital-dates', function (req, res) {
   req.session.data['hospitalIn'] = new Date(req.session.data['hospitalIn-year'] + '-' + req.session.data['hospitalIn-month'] + '-' + req.session.data['hospitalIn-day']);
   req.session.data['hospitalOut'] = new Date(req.session.data['hospitalOut-year'] + '-' + req.session.data['hospitalOut-month'] + '-' + req.session.data['hospitalOut-day']);
   res.redirect("hospital-other-check-answers")
});



router.post('/' + version + '/application/hospital-stays/hospital-add-another', function (req, res) {
   if (req.session.data['Hospitaladdanother'] == "No") {
      res.redirect("../application-tasklist?hospitalstaysStatus=completed")
   }
   else {
      req.session.data['hospitalLocation'] = null;
      req.session.data['hospitalNHS'] = null;
      req.session.data['hospitalIn-day'] = null;
      req.session.data['hospitalIn-month'] = null;
      req.session.data['hospitalIn-year'] = null;
      req.session.data['hospitalIn'] = null;
      req.session.data['hospitalOut-day'] = null;
      req.session.data['hospitalOut-month'] = null;
      req.session.data['hospitalOut-year'] = null;
      req.session.data['hospitalOut'] = null;
      res.redirect("hospital-dates")
   }

});

router.post('/' + version + '/application/hospital-stays/hospital-other-check-answers', function (req, res) {
   if (req.session.data['otherHospitalStays'] == 'No') {
      res.redirect("../application-tasklist?hospitalstaysStatus=completed")
   }
   else {
      let tempArray = []

      if (req.session.data['hospitalStaysArray']) {
         tempArray = req.session.data['hospitalStaysArray']
      }

      let tempObject = {
         hospitalName: req.session.data['hospitalName'],
         hospitalLocation: req.session.data['hospitalLocation'],
         dateIn: req.session.data['hospitalIn'],
         dateOut: req.session.data['hospitalOut'],
         nhsTreatment: req.session.data['hospitalNHS']
      }

      tempArray.push(tempObject)
      req.session.data['hospitalStaysArray'] = tempArray
      res.redirect("hospital-add-another")
   }
});



////// SAVE AND RETURN //////
router.get('/' + version + '/application/eligibility-calculate', function (req, res) {
   if(req.session.data['restartSection']=='yes'){
      res.redirect("application-tasklist")
   }
});
router.post('/' + version + '/application/save-and-return', function (req, res) {
   res.redirect("save-and-return-information")
});

router.post('/' + version + '/application/save-and-return-challenge', function (req, res) {
   // Get access code challenge and convert to uppercase
   let accessCodeChallenge = req.session.data['accessCodeChallenge'].toUpperCase();
   // remove any whitespace from the challenge input
   accessCodeChallenge = accessCodeChallenge.replace(/ /g, '')


   if (accessCodeChallenge == req.session.data['accessCode']) {
      res.redirect("save-and-return-information")
   }
   else {
      res.redirect("save-and-return-error")
   }


});

router.post('/' + version + '/application/application-restart-section*', function (req, res) {
   if (req.session.data['restartSection'] == 'yes') {
      if (req.session.data['section'] == 'eligibility') {
         req.session.data['eligibilityStatus'] = 'inprogress'
         req.session.data['hasPartner'] = null
         res.redirect("eligibility-start-dob")
      }
      else if (req.session.data['section'] == 'backdate') {
         req.session.data['backdateStatus'] = 'inprogress'
         res.redirect("backdating/backdate-offered-date")
      }
      else if (req.session.data['section'] == 'personaldetails') {
         req.session.data['personaldetailsStatus'] = 'inprogress'
         res.redirect("personal-details/personaldetails-name")
      }
      else if (req.session.data['section'] == 'nationality') {
         req.session.data['nationalitysectionStatus'] = 'inprogress'
         res.redirect("nationality/nationality")
      }
      else if (req.session.data['section'] == 'outofUk') {
         req.session.data['outofUKStatus'] = 'inprogress'
         res.redirect("outofUK/outofuk")
      }
      else if (req.session.data['section'] == 'hospitalstays') {
         req.session.data['hospitalstaysStatus'] = 'inprogress'
         res.redirect("hospital-stays/hospital-stays")
      }
   }
   else {
      res.redirect("application-tasklist")
   }
});

// router.get('/' + version + '/application/application-signout-YN', function (req, res) {
//    let signOutHidden = true
//    req.session.data['signOutHidden']== signOutHidden
// });

router.post('/' + version + '/application/application-signout-YN', function (req, res) {
    if (req.session.data['signOutYN'] == 'yes') {
         res.redirect("../application/guidance/how-to-claim?signedIn=false")
      }
   res.redirect("application-tasklist?signedIn=true")
});


