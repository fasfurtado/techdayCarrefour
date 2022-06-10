//Api do carrefour para buscar os produtos da loja enviada no parametro fq
const pathProdutos = 'https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq='

//Api do carrefour para buscar os produtos da loja enviada no parametro postalcode (cep)
const pathLojas = 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode='


const headers = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  headers: {
    "Accept": "application/json",

    }
}

//função que busca no link do carrefour os produtos relacionados a loja
async function getProdutos(loja) {
    if (loja) {
        console.log(loja)
        console.log(`${pathProdutos}${loja}`)
        const resposta = await fetch(`${pathProdutos}${loja}`, headers)
        .then ((response) => response.json())
        .catch (console.log("carregando produtos..."))
        console.log(resposta)
        return (resposta)
    } else {
        return([])
    }
}

//função que busca no link do carrefour as lojas mais próximas do CEP informado
async function getLojas(cep) {
    if (cep) {
        console.log("getLojas: cep: "+ cep)
        console.log(`${pathLojas}${cep}`)
        const resplojas = await fetch(`${pathLojas}${cep}`)
        .then ((response) => response.json())
        .catch (console.log("carregando lojas..."))
        console.log('carregou lojas..(sellers)')
        console.log(resplojas['0'].sellers)
        const respfinal = resplojas['0'].sellers
        //console.log("Api.getLojas: PRIMEIRA LOJA "  + respfinal['0'].id)
        return (respfinal)
    }
    else{
        return ([])
    }
}


export default {
    getProdutos, getLojas
}