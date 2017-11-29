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
      headers: {
        Authorization: ['Bearer', apiToken].join(' '),
      },
      json: true,
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

  const query = _.pickBy({
    'filter[createdAt-start]' : createdAfter,
    'filter[createdAt-end]'   : createdBefore,
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
    headers: {
      Authorization: ['Bearer', apiToken].join(' '),
    },
    json: true,
  })

}



export default {
  getMatch,
  getMatches,
}
