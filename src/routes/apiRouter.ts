import { Router } from 'express';
import apiController from '../controllers/apiController';
import userController from '../controllers/userController';

const router = Router();

router.route('/self').get(apiController.self);
router.route('/health').get(apiController.health);

// User-related routes
router.route('/user').post(userController.create);       // Create a user
router.route('/user').get(userController.getAll);        // Get all users (with optional filters)
router.route('/user/:id').get(userController.read);      // Read a specific user by ID
router.route('/user/:id').patch(userController.update);  // Update a specific user by ID
router.route('/user/:id').delete(userController.delete); // Delete a specific user by ID

export default router;
