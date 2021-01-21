const IS = 'increaseSingle'
const DS = 'decreaseSingle'
const RS = 'resolveSingle'
const US = 'unresolveSingle'
const AA = 'addToArray'
const RA = 'removeFromArray'
const increaseSingle = () =>({type:IS})
const dicreaseSingle = () =>({type:DS})
const resolvesingle = () =>({type:RS})
const unresolveSingle = () =>({type:US})
const addToArray = () =>({type:AA})
const removeFromArray = () =>({type:RA})
export {
    IS,
    DS,
    RS,
    US,
    AA,
    RA,
    increaseSingle,
    dicreaseSingle,
    resolvesingle,
    unresolveSingle,
    addToArray,
    removeFromArray
}