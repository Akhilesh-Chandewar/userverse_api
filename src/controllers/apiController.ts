import { NextFunction, Request ,Response } from 'express';
import httpResponse from '../utils/httpResponse';
import httpError from '../utils/httpError';
import responseMessage from '../constants/responseMessage';

export default {
    self : (req : Request , res : Response , next: NextFunction) => {
        try {
            // throw new Error("Internal server error");
            httpResponse(req, res, 200, responseMessage.SUCCESS);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    }
}