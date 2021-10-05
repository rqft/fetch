import * as Pariah from '..'

(async () => {
    const slip = await new Pariah.SomeRandomAPI().raccoonFact()
    console.log(slip.fact)
})()