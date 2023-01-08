export const priceFormatter = (price:number | string, type:string) =>{
    switch (type) {
        case 'price': {
            return price.toLocaleString().toString()
        }
        case 'priceForM2': {
            if(typeof price === 'string'){
                return price.split('—').map(el => Number(el).toLocaleString()).join(' — ')
            }

        }
    }
}
