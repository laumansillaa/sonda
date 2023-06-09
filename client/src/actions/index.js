import axios from 'axios'

export function getProds () {
    return async function (dispatch) {
        var json = await axios.get(`https://sondasrl.onrender.com/producto/getproducto`)
        return dispatch({
            type: 'GET_PROD',
            payload: json.data
        })
    }
}

export function getProdsId (payload) {
    console.log('PRODSSS ID')
    return async function (dispatch) {
        var json = await axios.get(`https://sondasrl.onrender.com/producto/productodetail?id=${payload}`)
        return dispatch ({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

export function deleteProds (payload) {
    return async function (dispatch) {
        var json = await axios.delete(`https://sondasrl.onrender.com/producto/deleteproducto?id=${payload}`)
        return json
    }
}

export function createProd (payload) {
    return async function (dispatch) {
        var json = await axios.post(`https://sondasrl.onrender.com/producto/createproducto`, payload)
        return dispatch ({
            type: "CREATE_PROD",
            payload: json.data
        })
    }
}

export function updateProd (payload, id) {
    return async function (dispatch) {
        var json = await axios.put(`https://sondasrl.onrender.com/producto/updateproducto?id=${id}`, payload)
        return dispatch({
            type: "UPDATE_PROD",
            payload: json.data
        })
    }
}

export function getCursos () {
    return async function (dispatch) {
        var json = await axios.get(`https://sondasrl.onrender.com/curso/getcurso`)
        return dispatch({
            type: 'GET_CURSO',
            payload: json.data
        })
    }
}

export function deleteCurso (payload) {
    return async function (dispatch) {
        var json = await axios.delete(`https://sondasrl.onrender.com/curso/deletecurso?id=${payload}`)
        return json
    }
}

export function createCurso (payload) {
    return async function (dispatch) {
        var json = await axios.post(`https://sondasrl.onrender.com/curso/createcurso`, payload)
        return dispatch({
            type: "CREATE_CURSO",
            payload: json.data
        })
    }
}

export function getCursoId (payload) {
    return async function (dispatch) {
        var json = await axios.get(`https://sondasrl.onrender.com/curso/cursodetail?id=${payload}`)
        return dispatch ({
            type: 'GET_CURSO_DETAIL',
            payload: json.data
        })
    }
}

export function updateCurso (payload, id) {
    return async function (dispatch) {
        var json = await axios.put(`https://sondasrl.onrender.com/curso/updatecurso?id=${id}`, payload)
        return dispatch ({
            type: 'UPDATE_CURSO',
            payload: json.data
        })
    }
}

// Filtros Productos 

export function filterProd (payload) {
    return ({
        type: 'FILTER_PROD',
        payload
    })
}

export function login (payload) {
    return async function (dispatch) {
        var json = await axios.post(`https://sondasrl.onrender.com/admin/login`, payload)
        localStorage.setItem('user', JSON.stringify(json.data[0].email))
        return json
    }
}

export function getAdmin (payload) {
    return async function (dispatch) {
        var json = await axios.get(`https://sondasrl.onrender.com/admin/getAdmin?email=${payload}`)
        return json
    }
}

export function getProdById (payload) {
    return async function (dispatch) {
        var json = await axios.get(``)
    }
}