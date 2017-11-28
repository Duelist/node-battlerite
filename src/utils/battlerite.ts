import * as got from 'got'

import BATTLERITE from 'node-battlerite/constants/battlerite'



/**
 * Gets a set of Battlerite matches.
 */
async function getMatches (apiToken, {} = {}) {

  return await got.get(BATTLERITE.API.MATCHES, {
    headers: {
      Authorization: ['Bearer', apiToken].join(' '),
    },
    json: true,
  })

}



export default {
  getMatches
}
