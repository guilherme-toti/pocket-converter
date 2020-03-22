import { addZeroes, strPad } from '../../helpers/utils'

describe('AddZeroes', () => {
  it('returns as expected', () => {
    expect(addZeroes('1')).toBe('1.00')
  })
})

describe('strPad', () => {
  it('returns as expected', () => {
    expect(strPad('1')).toBe('01')
  })
})
