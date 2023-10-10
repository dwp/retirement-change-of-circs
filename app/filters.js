const prototypeFilters = require('@x-govuk/govuk-prototype-filters');

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = prototypeFilters
  /** This filter ensures number values have 2 decimal places only, rounds up if needed */
  env.addFilter('fixed', function(num, length) {
      return  num.toFixed(2 || length);
  });

  env.addFilter ('isoDateNoYearFromDateInput', function(object, namePrefix) {
    let day, month
  
    if (namePrefix) {
      day = Number(object[`${namePrefix}-day`])
      month = Number(object[`${namePrefix}-month`])
    } else {
      day = Number(object?.day)
      month = Number(object?.month)
    }
  
    try {
      if (!day) {
        return DateTime.local(month).toFormat()
      } else {
        return DateTime.local(month, day).toISODate('dddd, MMMM')
      }
    } catch (error) {
      return error.message.split(':')[0]
    }
  });


  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
