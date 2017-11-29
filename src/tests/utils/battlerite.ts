import * as Chance from 'chance'
import * as got    from 'got'
import * as sinon  from 'sinon'
import * as should from 'should'

import BATTLERITE     from 'node-battlerite/constants/battlerite'
import battleriteUtil from 'node-battlerite/utils/battlerite'

const chance = Chance()



describe('getMatch', () => {

  it('calls the Battlerite API with the correct arguments', async () => {

    const gotStub = sinon.stub(got, 'get')
    const id      = chance.guid()
    const token   = chance.word()

    await battleriteUtil.getMatch(token, id)

    gotStub.callCount.should.eql(1)
    should(gotStub.args).eql([
      [
        BATTLERITE.API_PATHS.MATCHES + `/${id}`,
        {
          headers : { Authorization: token },
          json    : true,
        },
      ]
    ])

    gotStub.restore()

  })

})



describe('getMatches', () => {

  it('calls the Battlerite API with the correct arguments', async () => {

    const gotStub = sinon.stub(got, 'get')
    const token   = chance.word()

    await battleriteUtil.getMatches(token)

    gotStub.callCount.should.eql(1)
    should(gotStub.args).eql([
      [
        BATTLERITE.API_PATHS.MATCHES,
        {
          query   : {},
          headers : { Authorization: token },
          json    : true,
        },
      ]
    ])

    gotStub.restore()

  })

})
