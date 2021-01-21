const INC = 'Add'
const DIC = 'remove'

const increament = () =>({type:INC})
const decreament = () =>({type:DIC})
export {
    increament,
    decreament,
    INC,
    DIC
}