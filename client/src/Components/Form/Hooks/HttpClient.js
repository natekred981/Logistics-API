import { useState, useCallback } from "react";
import HttpError from "../../../../../server/models/http-error";

const HttpClient = () => {
    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            const response = await fetch(url, {
                method,
                body,
                headers
            });
            const responseData = await response.json();
    
            if (!response.ok){
                throw new Error(responseData.message);
            }
        }
        catch (err){
            throw new Error(err);
        }
        
    }, []);
    return sendRequest;
}

export default HttpClient;