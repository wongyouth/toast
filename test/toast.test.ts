import { describe, expect, it } from 'vitest'
import { defaultOption } from '../src'

describe('toast', () => {
  it('default', () => {
    expect(defaultOption.color).toEqual('white')
  })
})
