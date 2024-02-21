// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Start folder specific routes
// router.use('/sprint-1', require('./views/sprint-1/_routes'));

// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/current/_routes'));

module.exports = router
