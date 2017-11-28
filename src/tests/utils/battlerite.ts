import * as Chance from 'chance'
import * as got    from 'got'
import * as sinon  from 'sinon'
import * as should from 'should'

import BATTLERITE     from 'node-battlerite/constants/battlerite'
import battleriteUtil from 'node-battlerite/utils/battlerite'

const chance = Chance()



describe('matches', () => {

  it('runs', async () => {

    const gotStub = sinon.stub(got, 'get')
    const token   = chance.word()

    await battleriteUtil.getMatches(token)

    gotStub.callCount.should.eql(1)
    should(gotStub.args).eql([
      [
        BATTLERITE.API.MATCHES,
        {
          headers: {
            Authorization: ['Bearer', token].join(' '),
          },
          json: true,
        },
      ]
    ])

    gotStub.restore()

  })

})
