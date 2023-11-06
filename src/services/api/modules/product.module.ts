import axios from 'axios'

export default {
    create: async function (formData: FormData) {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "products", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    findAll: async function (maxItemPage: number, skipItem: number) {
        return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/products?maxItemPage=${maxItemPage}&skipItem=${skipItem}`)
    },
    findById: async function (productId: number) {
        return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/products/${productId}`)
    },
    findByCategory: async function (categoryId: number) {
        return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/collections/${categoryId}`)
    },
}