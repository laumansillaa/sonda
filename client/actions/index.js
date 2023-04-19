import axios from 'axios'

export function getProds () {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/producto/getproducto`)
        return dispatch({
            type: 'GET_PROD',
            payload: json.data
        })
    }
}

export function getProdsId (payload) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/producto/productodetail?id=${payload}`)
        return dispatch ({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

export function deleteProds (payload) {
    return async function (dispatch) {
        var json = await axios.delete(`http://localhost:3001/producto/deleteproducto?id=${payload}`)
        return json
    }
}

export function createProd (payload) {
    return async function (dispatch) {
        var json = await axios.post(`http://localhost:3001/producto/createproducto`, payload)
        return dispatch ({
            type: "CREATE_PROD",
            payload: json.data
        })
    }
}

export function updateProd (payload, id) {
    return async function (dispatch) {
        var json = await axios.put(`http://localhost:3001/producto/updateproducto?id=${id}`, payload)
        return dispatch({
            type: "UPDATE_PROD",
            payload: json.data
        })
    }
}

export function getCursos () {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/curso/getcurso`)
        return dispatch({
            type: 'GET_CURSO',
            payload: json.data
        })
    }
}

export function deleteCurso (payload) {
    return async function (dispatch) {
        var json = await axios.delete(`http://localhost:3001/curso/deletecurso?id=${payload}`)
        return json
    }
}

export function createCurso (payload) {
    return async function (dispatch) {
        var json = await axios.post(`http://localhost:3001/curso/createcurso`, payload)
        return dispatch({
            type: "CREATE_CURSO",
            payload: json.data
        })
    }
}

export function getCursoId (payload) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/curso/cursodetail?id=${payload}`)
        return dispatch ({
            type: 'GET_CURSO_DETAIL',
            payload: json.data
        })
    }
}

export function updateCurso (payload, id) {
    return async function (dispatch) {
        var json = await axios.put(`http://localhost:3001/curso/updatecurso?id=${id}`, payload)
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
        var json = await axios.post(`http://localhost:3001/admin/login`, payload)
        return json
    }
}