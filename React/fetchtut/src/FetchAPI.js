import React from 'react'

const FetchAPI = async ({url = null, optionObj = null, errMSG = null}) => {
  if (optionObj && optionObj.body){
    try {
        JSON.parse(optionObj.body)

    } catch (e) {
        return "invalid json"

    }
  }

  if (url) {
    try {
        const response = await fetch (url, optionObj);
        if (!response.ok){
            const errorMessage = `Error: ${response.status}  ${response.statusText}`;
            throw new Error(errorMessage);
        }

    } catch (e) {
        return e.message

    }

  } else return "no url was given"
}

export default FetchAPI