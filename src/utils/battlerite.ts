import * as _   from 'lodash'
import * as got from 'got'

import BATTLERITE from 'node-battlerite/constants/battlerite'



/**
 * Gets a set of Battlerite matches.
 */
async function getMatch(apiToken: string, id: string, {} = {}) {

  return await got.get(
    BATTLERITE.API_PATHS.MATCHES + `/${id}`,
    {
      headers : { Authorization: apiToken },
      json    : true,
    }
  )

}



/**
 * Gets a set of Battlerite matches.
 */
async function getMatches(apiToken: string, {
  createdAfter,
  createdBefore,
  gameMode,
  limit,
  offset,
  playerIds,
  playerNames,
  sortBy,
  teamNames,
}: {
  createdAfter?  : Date,
  createdBefore? : Date,
  gameMode?      : string,
  playerIds?     : string[],
  playerNames?   : string[],
  limit?         : number,
  offset?        : number,
  sortBy?        : string,
  teamNames?     : string[],
} = {}) {

  let createdAfterISOString
  if (createdAfter) {
    createdAfterISOString = createdAfter.toISOString()
  }

  let createdBeforeISOString
  if (createdBefore) {
    createdBeforeISOString = createdBefore.toISOString()
  }

  const query = _.pickBy({
    'filter[createdAt-start]' : createdAfterISOString,
    'filter[createdAt-end]'   : createdBeforeISOString,
    'filter[gameMode]'        : gameMode,
    'filter[playerIds]'       : playerIds,
    'filter[playerNames]'     : playerNames,
    'filter[teamNames]'       : teamNames,
    'page[offset]'            : offset,
    'page[limit]'             : limit,
    'sort'                    : sortBy,
  })

  return await got.get(BATTLERITE.API_PATHS.MATCHES, {
    query,
    headers : { Authorization: apiToken },
    json    : true,
  })

}



export default {
  getMatch,
  getMatches,
}
