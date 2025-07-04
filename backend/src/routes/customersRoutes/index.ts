import express from "express";
import globalRoutes from "./globalRoutes";
import { verifyRole, verifyToken } from "../../middlewares/verifyToken";
import walletRoutes from "./walletRoutes";

const customersRoutes = express.Router();

customersRoutes.use(verifyToken);
customersRoutes.use(verifyRole("customer"));
customersRoutes.use(globalRoutes);
customersRoutes.use(walletRoutes);

export default customersRoutes