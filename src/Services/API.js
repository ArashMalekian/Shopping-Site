import axios from "axios"

const FakeApi = "https://fakestoreapi.com"

export const fakeProducts = async () => {
    const response = await axios.get(`${FakeApi}/products`)
    return response.data
} 