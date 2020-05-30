const url = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

class Api {
    static getCatalog = () => fetch(url).then(res => res.json());
}

export default Api;