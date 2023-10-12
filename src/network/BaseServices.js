import axiosInstance from "./AxiosInstance"


export const baseServices = {
    getAll: async (entityUrl) => {
      try {
        const response = await axiosInstance.get(entityUrl);
        return response.data;
      } catch (error) {
        console.error('Hata oluştu:', error);
        throw error; 
      }
    }
  };