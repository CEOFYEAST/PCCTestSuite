import recipes from '@ceofyeast/prodchaincalculators-server/recipes'

test('recipes is object', async () => {
    expect(typeof recipes).toBe('object')
})

test('recipes contains ID', async () => {
    expect(
        Object.keys(
            recipes
        )
    ).toContain("inserter")
}) 