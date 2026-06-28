import { Router } from "express";
import prisma from "../lib/db";

const router = Router();


// GET /api/orders
router.get("/", async (req, res) => {
    const { status } = req.query;

    const orders = await prisma.order.findMany({
        where: status ? { status: String(status) } : {},
        orderBy: { createAt: "desc" },
    })
    res.json(orders)
})


// GET /api/orders/:id
router.get("/:id", async (req, res) => {
    const order = await prisma.order.findUnique({
        where: { id: Number(req.params.id) }
    })

    if (!order) return res.status(404).json({ error: "Order not found" })

    res.json(order)
})


// PATCH /api/orders/:id/status
router.patch("/:id/status", async (req, res) => {
    const { status } = req.body;

    const updated = await prisma.order.update({
        where: {
            id: Number(req.params.id)
        },
        data: { status }
    });
    res.json(updated)

});

export default router