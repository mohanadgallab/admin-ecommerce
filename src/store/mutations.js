export function setUser(state, user){
    state.user.data = user ;
}

export function setToken(state , token){
    state.user.token = token ;
    if (token) {
        sessionStorage.setItem('TOKEN', token )
    } else{
        sessionStorage.removeItem('TOKEN')
    }
}

// PRODUCTS

export function setProducts(state, [loading, response = null]){
    if (response) {
        state.products = {
            data : response.data ,
            links : response.meta.links ,
            total : response.meta.total ,
            from : response.meta.from ,
            to : response.meta.to ,
            limit : response.meta.per_page ,
            page : response.meta.current_page ,
        }
        
    }
    state.products.loading = loading ;
}

// ORDERS

export function setOrders(state, [loading, response = null]){
    if (response) {
        state.orders = {
            data : response.data ,
            links : response.meta.links ,
            total : response.meta.total ,
            from : response.meta.from ,
            to : response.meta.to ,
            limit : response.meta.per_page ,
            page : response.meta.current_page ,
        }
        
    }
    state.orders.loading = loading ;
}