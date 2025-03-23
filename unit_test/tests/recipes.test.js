import recipes from '@ceofyeast/prodchaincalculators/recipes'

test('recipes is object', () => {
    expect(typeof recipes).toBe('object')
})

test('recipes contains ID', () => {
    expect(
        Object.keys(
            recipes
        )
    ).toContain("inserter")
}) 