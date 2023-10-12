import axios from "axios";

import { axiosInstance } from "./axiosInstance";

export const baseServices={

getAll:async(entityUrl)=>{



    let response = [];


    await axiosInstance
        .get(entityUrl)
        .then(res => {
            response = res.data;
        })

    return response;


},


getById: async (entityUrl, id) => {
    let response = null;

    await axiosInstance
      .get(`${entityUrl}/${id}`)
      .then((res) => {
        response = res.data;
      });

    return response;
  },







}