import express from "express"
import { AllCustomerdata, Customerregister } from "../controller/Customer_controller.js"

export const CustomerRoutes = express.Router()

// http://localhost:5555/api/customerroutes/create
CustomerRoutes.post("/create",Customerregister)

// http://localhost:5555/api/customerroutes/getcustomer
CustomerRoutes.get("/getcustomer",AllCustomerdata)

// CustomerRoutes.post("/oneD",Onecustomer)