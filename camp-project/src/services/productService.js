import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }
    getByProductName(id){
        return axios.get("http://localhost:8080/api/products/getById?id=" + id)
    }
}