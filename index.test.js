const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {//????big questions
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimPropertiesMutation(input)
    expect(input).not.toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{integer: 1}, {integer: 5}, {integer: 28}, {integer: 3} ]
    const expected = 28
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })    
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3
    const actual = counter.countDown()
    expect(actual).toEqual(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const expected = 2
    counter.countDown()
    expect(counter.countDown()).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const expected = 0
    counter.countDown() 
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown() 
    expect(counter.countDown()).toEqual(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const expected = 'summer'
    const actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const expected = 'fall'
    let actual = null
    for (let i = 0; i <= 1 ; i++) {
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const expected = 'winter'
    let actual = null
    for (let i = 0; i <= 2 ; i++) {
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const expected = 'spring'
    let actual = null
    for (let i = 0; i <= 3 ; i++) {
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const expected = 'summer'
    let actual = null
    for (let i = 0; i <= 4 ; i++) {
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    const expected = 'spring'
    let actual = null
    for (let i = 0; i <= 39 ; i++) {
      actual = seasons.next()
    }
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const expected = 200
    const actual = focus.drive(200)
    expect(actual).toEqual(expected)
  })
  test('[16] driving the car uses gas', () => {
    const expected = 13.333333333333332
    focus.drive(200)
    expect(focus.fuel).toEqual(expected)
  })
  test('[17] refueling allows to keep driving', () => {
    const beforeFuel = 600
    for (let i = 0 ; i < 6 ; i++) {
      focus.drive(100)
    }
    focus.refuel(10)
    const afterFuel = focus.drive(100)
    expect(afterFuel).toBeGreaterThan(beforeFuel)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const expected = 20
    focus.refuel(20)
    const actual = focus.fuel
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const expected = true
    const actual = await utils.isEvenNumberAsync(2)
    expect(actual).toBe(expected)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const expected = false
    const actual = await utils.isEvenNumberAsync(3)
    expect(actual).toBe(expected)
  })
})
