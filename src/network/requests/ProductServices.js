import { baseServices } from "../baseServices"

export const getProducts=async()=>{


return baseServices.getAll("products")

}