
import { baseServices } from "../BaseServices";


 const getAllProduct=async()=>{


return baseServices.getAll("/products")

}

export default getAllProduct