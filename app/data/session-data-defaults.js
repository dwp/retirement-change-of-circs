/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

"full-name": "Alex Jones",
"next-payment-day": "24",
"next-payment-month": "11",
"next-payment-year": "2023",
"next-payment-amount": "815.40",
"payment-frequency": "Every 4 weeks (13 payments a year)",
"entitled-to2": "entitled",
"frequency-scenario-select": "1",
"current-home-phone": "01943 345928",
"new-home-phone": "01943 459286",
"current-alt-phone": "",
"new-alt-phone": "",
"current-mobile-phone": "0779038462",
"new-mobile-phone": "",
"current-email-address": "alex.jones@dwp.gov.uk",
"new-email-address": "alex.jones@dwp.gov.uk"

}
