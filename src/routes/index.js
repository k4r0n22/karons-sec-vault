import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "K4R0N'S SEC VAULT" });
});

router.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

router.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Page" });
});

router.get("/rubber_ducky", (req, res) => {
    res.render("rubber_ducky", { title: "Rubber Ducky" });
});

router.get("/code", (req, res) => {
    res.render("code", { title: "Code" });
});

export default router;
