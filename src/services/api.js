const url = 'https://5f184aca7c06c900160dcd19.mockapi.io/api/v1/catalog';

class Api {
    static getCatalog = () => fetch(url).then(res => res.json());
}

export default Api;
