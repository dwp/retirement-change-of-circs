var moment = require('moment')

// Dates etc
const fourteenWeeksAgoHMRC = moment().subtract(98, 'days').format('D MMMM YYYY')
const eighteenMonthsAgo = moment().subtract(549, 'days').format('D MMMM YYYY')

module.exports = {
  'hmrc-failed-attempts': '',
  // Insert values here
  // Dates generates by MomentJS
  '14-weeks-ago-hmrc': fourteenWeeksAgoHMRC,
  '18-months-ago': eighteenMonthsAgo,

}
