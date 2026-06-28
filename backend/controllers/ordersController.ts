import { Request, Response } from "express";
import prisma from "../lib/db";
import { error } from "node:console";

// GET /api/orders
export const getOrders = async (req: Request, res: Response) => {
    try {
        const { status } = req.query;

        const orders = await prisma.order.findMany({
            where: status ? { status: String(status) } : {},
            orderBy: { createdAt: "desc" }
        });

        res.json(orders);

    } catch (error) {
        res.status(500).json({ error: "Fail to fetch orders" })
    }
}


// GET /api/orders/:id
export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await prisma.order.findUnique({
            where: { id: String(req.params.id) },
        });

        if (!order) return res.status(404).json({ error: "Order not found" });

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch order" })
    }
}


// POST /api/orders
export const createOrder = async (req: Request, res: Response) => {
    try {
        const { customerName, priority } = req.body;

        const order = await prisma.order.create({
            data: {
                customerName,
                priority
            }
        })
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" })
    }
}

//  PATCH /api/orders/:id/status
export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.body;

        const order = await prisma.order.update({
            where: { id: String(req.params.id) },
            data: { status }
        });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to update order status" })
    }
}
