package database

import (
	 "login-system/internal/models"
	 "gorm.io/driver/mysql"
		"gorm.io/gorm"
)

func Connect() {

	 connection, err := gorm.Open(mysql.Open("root:root@/teste"), &gorm.Config{})

	 if err != nil {
	 	panic("could not connect to the database")
	 }

		connection.AutoMigrate(&models.User{})
}
