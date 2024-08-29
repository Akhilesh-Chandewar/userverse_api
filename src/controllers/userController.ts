import { NextFunction, Request, Response } from 'express';
import httpResponse from '../utils/httpResponse';
import responseMessage from '../constants/responseMessage';
import httpError from '../utils/httpError';
import { User } from '../models/user';

export default {
    // Create a new user
    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { firstName, lastName, email, phone } = req.body as {
                firstName?: string;
                lastName?: string;
                email?: string;
                phone?: string;
            };

            if (!firstName || !lastName || !email || !phone) {
                throw new Error(responseMessage.PLEASE_ENTER_REQUIRED_FIELD);
            }
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                throw new Error(responseMessage.USER_ALREADY_EXISTS);
            }
            const newUser = await User.create({ firstName, lastName, email, phone, isActive: true });
            return httpResponse(req, res, 201, responseMessage.SUCCESS, newUser);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },

    // Read a user by ID
    read: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params as {id?: string};
            if (!id) {
                throw new Error(responseMessage.SOMETHING_WENT_WRONG);
            }
            const user = await User.findByPk(id) as User;
            if (!user) {
                throw new Error(responseMessage.NOT_FOUND('user'));
            }
            return httpResponse(req, res, 200, responseMessage.USER_FOUND, user);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },

    // Update a user by ID
    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { firstName, lastName, email, phone } = req.body as {
                firstName?: string;
                lastName?: string;
                email?: string;
                phone?: string;
            };

            if (!id) {
                throw new Error(responseMessage.SOMETHING_WENT_WRONG);
            }

            const user = await User.findByPk(id) as User;
            if (!user) {
                throw new Error(responseMessage.NOT_FOUND('user'));
            }

            await user.update({ firstName, lastName, email, phone });
            return httpResponse(req, res, 200, responseMessage.SUCCESS, user);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },

    // Delete (or Disable) a user by ID
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params as {id? : string};
            if (!id) {
                throw new Error(responseMessage.SOMETHING_WENT_WRONG);
            }

            const user = await User.findByPk(id) as User;
            if (!user) {
                throw new Error(responseMessage.NOT_FOUND('user'));
            }

            await user.update({ isActive: false });
            return httpResponse(req, res, 200, responseMessage.SUCCESS, null);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },

    // List all users with filters
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { firstName, lastName, email, phone } = req.query as {
                firstName?: string;
                lastName?: string;
                email?: string;
                phone?: string;
            };

            // Initialize filters with default isActive: true
            const filters: { [key: string]: string | boolean } = { isActive: true };

            if (firstName) filters.firstName = firstName;
            if (lastName) filters.lastName = lastName;
            if (email) filters.email = email;
            if (phone) filters.phone = phone;

            // Fetch users with applied filters
            const users = await User.findAll({ where: filters });
            return httpResponse(req, res, 200, responseMessage.SUCCESS, users);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
};
