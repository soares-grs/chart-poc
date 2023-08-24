import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_HOST

async function useAxios(tipo, entidade, params = "", dados= "", headerOption){
    try{
        return await axios({
            method: tipo,
            url: BASE_URL + '/' + entidade + params,
            data: dados,
            headers: headerOption
        })
    }catch(error){
        return error.response ?? error;
    }
}

async function getChar(url){
    return await axios({
        method: "get",
        url: url
    })
}

let characters = {
    get: async function(page){
        return await useAxios("get", `character/?page=${page}`)
    }
}

export const injector = { characters }