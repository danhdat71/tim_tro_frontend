import axios from 'axios';

async function getDetailProduct(route)
{
    let data = await axios.get(route);
    return data.data;
}

export {
    getDetailProduct,
};