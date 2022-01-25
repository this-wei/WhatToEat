import Axios from "axios";
import React from "react";

export function formatRequest(params) {
    let request = `location=${params.location}&radius=${params.radius * 1000}`;

    const acceptedKeys = ['keyword', 'maxPriceLevel'];

    Object.keys(params).forEach(function (key) {
        if (params[key] !== '' && acceptedKeys.includes(key)) {
            request += `&${key.toLowerCase()}=${params[key]}`
        } else if (key === 'openNow' && params[key]) {
            request += '&opennow'
        }
    })

    return request
}

export function formatResults(results) {
    let formattedResults = [];

    while (formattedResults.length !== 3) {
        const index = Math.random(20)
        formattedResults.push(results[index])
        }

    return formattedResults
}

export function getApiResults(request) {
    return new Promise(function (resolve, reject) {
        Axios.get(`/json?${request}&type=restaurant&key=AIzaSyB_uM3QLt027rycHvILOkW1musfw4m3A1M`).then(
            (response) => {
                const result = response.data;
                console.log('Processing Request');
                resolve(result);
            },
                (error) => {
                reject(error);
            }
        );
    });
}


export const getPlacesData = async(request) => {
    const config = {
        method: 'get',
        url: `/json?${request}&type=restaurant&key=AIzaSyB_uM3QLt027rycHvILOkW1musfw4m3A1M`,
        headers: { }
      };
      
      Axios(config)
      .then( function (response) {
        // console.log(JSON.stringify(response.data));
        return response.data.results
      })
      .catch(function (error) {
        console.log(error);
      });
}








