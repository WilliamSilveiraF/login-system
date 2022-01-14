package main

import (
	"login-system/internal/database"
	"login-system/internal/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()

	app := fiber.New()

	routes.Setup(app)

	app.Listen(":8080")
}