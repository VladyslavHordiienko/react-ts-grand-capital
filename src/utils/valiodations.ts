export const emailValidation = (value:string) => {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (emailRegExp.test(value)){
        return true
    }
    return false
}
export const nameValidation = (value:string) => {
    const nameRegExp = /^\s*$/
    if (!nameRegExp.test(value)){
        return true
    }
    return false
}