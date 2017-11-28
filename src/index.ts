import _ from 'lodash'

import battleriteUtil from 'node-battlerite/utils/battlerite'



/**
 * Configures the library with an API token.
 */
function initialize(apiToken: string) {

  return {
    getMatches: _.curry(battleriteUtil.getMatches)(apiToken)
  }

}



export default {
  initialize,
}
