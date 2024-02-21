const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Add your routes here - above the module.exports line
router.post('/current/idv/hmrc/choose-items-routes', (req, res) => {
    const passportConsent = req.session.data['ukPassport'];
    const payslipOrP60 = req.session.data['idv-hmrc-payslip-p60'];
    const selfAssessment = req.session.data['self-assessment'];
    const voiceID = req.session.data['idv-hmrc-payslip-tax-credits'];
    const tuConsent = req.session.data['transunion'];



    // Passport and payslip §
    if (passportConsent == 'true' && payslipOrP60 == 'payslip') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/your-passport-details-consent')
    }
    // Passport and P60 
    else if (passportConsent == 'true' && payslipOrP60 == 'p60') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/your-passport-details-consent')
    }
    // Passport and Self Assessment 
    else if (passportConsent == 'true' && selfAssessment == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/your-passport-details-consent')
    }
    // Passport and tax credits no voice id
    else if (passportConsent == 'true' && voiceID == 'voice-id-no') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/your-passport-details-consent')
    }
    // Passport and tax credits voice ID
    else if (passportConsent == 'true' && voiceID == 'voice-id-yes') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/your-passport-details-consent')
    }
    // Passport and Credit reference
    else if (passportConsent == 'true' && tuConsent == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/your-passport-details-consent')
    }


    
    // Payslip and tax credits no voice id
    else if (payslipOrP60 == 'payslip' && voiceID == 'voice-id-no') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-payslip+noVoiceId=payslip');
    }
    // Payslip and Self Assessment 
    else if (payslipOrP60 == 'payslip' && selfAssessment == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-payslip+self-assessment=payslip')
    }
    // Payslip and tax credits voice ID
    else if (payslipOrP60 == 'payslip' && voiceID == 'voice-id-yes') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-payslip+voiceId=payslip')
    }
    // Payslip and Credit reference
    else if (payslipOrP60 == 'payslip' && tuConsent == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-payslip+crq=payslip');
    }



    // P60 and Self Assessment 
    else if (payslipOrP60 == 'p60' && selfAssessment == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-p60+self-assessment=p60-1')
    }
    // P60 and tax credits no voice id
    else if (payslipOrP60 == 'p60' && voiceID == 'voice-id-no') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-p60+noVoiceId=p60-1');
    }
    // P60 and tax credits voice ID
    else if (payslipOrP60 == 'p60' && voiceID == 'voice-id-yes') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-p60+voiceId=p60-1')
    }
    // P60 and Credit reference
    else if (payslipOrP60 == 'p60' && tuConsent == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-p60+crq=p60-1');
    }



    // Self Assessment and tax credits no voice id
    else if (selfAssessment == 'true' && voiceID == 'voice-id-no') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-self-assessment+noVoiceId=self-assessment');
    }
    // Self Assessment and tax credits voice ID
    else if (selfAssessment == 'true' && voiceID == 'voice-id-yes') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-self-assessment+voiceId=self-assessment')
    }
    // Self Assessment and Credit reference
    else if (selfAssessment == 'true' && tuConsent == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-self-assessment+crq=self-assessment');
    }



    // Tax credits no voice id and Credit reference
    else if (voiceID == 'voice-id-no' && tuConsent == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-noVoiceId+crq=noVoiceId');
    }
    // Tax credits voice ID and Credit reference
    else if (voiceID == 'voice-id-yes' && tuConsent == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-voiceId+crq=voiceId')
    }
    // Fallback
    else {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/choose-2-items-error')
    }
})

/*

('/current/idv/hmrc/confirm-who-you-are/Q-passport+payslip=passport')
('/current/idv/hmrc/confirm-who-you-are/Q-passport+p60=passport')
('/current/idv/hmrc/confirm-who-you-are/Q-passport+self-assessment=passport')
('/current/idv/hmrc/confirm-who-you-are/Q-passport+noVoiceId=passport')
('/current/idv/hmrc/confirm-who-you-are/Q-passport+voiceId=passport')
('/current/idv/hmrc/confirm-who-you-are/Q-passport+crq=passport')

*/
 router.post('/idv/hmrc/passport-routes', (req, res) => {
    const payslipOrP60 = req.session.data['idv-hmrc-payslip-p60'];
    const selfAssessment = req.session.data['self-assessment'];
    const voiceID = req.session.data['idv-hmrc-payslip-tax-credits'];
    const tuConsent = req.session.data['transunion'];

    if (payslipOrP60 == 'payslip')
   res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-passport+payslip=passport')

   else if (payslipOrP60 == 'p60')
   res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-passport+p60=passport')

   // Passport and Self Assessment 
   else if (selfAssessment == 'true') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-passport+self-assessment=passport')
    }
   // Passport and tax credits no voice id
    else if (voiceID == 'voice-id-no') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-passport+noVoiceId=passport')
    }
    // Passport and tax credits voice ID
    else if (voiceID == 'voice-id-yes') {
    res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-passport+voiceId=passport')
    }
    // Passport and Credit reference
    else if (tuConsent == 'true') {
        res.redirect('/current/idv/hmrc/confirm-who-you-are/Q-passport+crq=passport')
    }
})

// router.post('/idv/hmrc/p60-routes', (req, res) => {
//     res.redirect('/current/idv/hmrc/confirm-who-you-are/p60-1');
// })

// router.post('/idv/hmrc/self-assessment-routes', (req, res) => {
//     res.redirect('/current/idv/hmrc/confirm-who-you-are/self-assessment');
// })

// router.post('/idv/hmrc/tcKbv-routes', (req, res) => {
//     res.redirect('/current/idv/hmrc/confirm-who-you-are/tax-credits-1');
// })

// router.post('/idv/hmrc/tuKbv-routes', (req, res) => {
//     res.redirect('/current/idv/hmrc/confirm-who-you-are/credit-reference-1');
// })

// router.post('/idv/hmrc/voice-id-routes', (req, res) => {
//     res.redirect("/current/idv/hmrc/confirm-who-you-are/tax-credits-voice");
// })

// router.post('/idv/hmrc/info-does-not-match', (req, res) => {
//     res.redirect("/current/idv/hmrc/confirm-who-you-are/info-does-not-match");
// })

// router.use((req, res, next) => {
//     idvReset(req);
//     if (req.query.payslip) {
//     req.session.payslip = req.query.payslip;
//     }
//     res.locals.payslip = req.session.payslip;
//     next();
// });

// router.use((req, res, next) => {
//     idvReset(req);
//     if (req.query.p60) {
//     req.session.p60 = req.query.p60;
//     }
//     res.locals.p60 = req.session.p60;
//     next();
// });

// router.use((req, res, next) => {
//     idvReset(req);
//     if (req.query.sa) {
//     req.session.sa = req.query.sa;
//     }
//     res.locals.sa = req.session.sa;
//     next();
// });

// router.use((req, res, next) => {
//     idvReset(req);
//     if (req.query.tcKbv) {
//     req.session.tcKbv = req.query.tcKbv;
//     }
//     res.locals.tcKbv = req.session.tcKbv;
//     next();
// });

// router.use((req, res, next) => {
//     idvReset(req);
//     if (req.query.tuKbv) {
//     req.session.tuKbv = req.query.tuKbv;
//     }
//     res.locals.tuKbv = req.session.tuKbv;
//     next();
// });

// router.use((req, res, next) => {
//     idvReset(req);
//     if (req.query.payslip) {
//     req.session.payslip = req.query.payslip;
//     }
//     res.locals.payslip = req.session.payslip;
//     next();
// });

// router.use((req, res, next) => {
//     idvReset(req);
//     if (req.query.voiceId) {
//     req.session.voiceId = req.query.voiceId;
//     }
//     res.locals.voiceId = req.session.voiceId;
//     next();
// });





module.exports = router