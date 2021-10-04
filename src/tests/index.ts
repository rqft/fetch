import * as Pariah from '..'

(async () => {
    const slip = await new Pariah.AdviceSlip().random()
    console.log(slip.slip.advice)
})()