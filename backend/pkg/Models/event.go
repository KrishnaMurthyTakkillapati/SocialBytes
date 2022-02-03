package models

import (
	"gorm.io/gorm"
	Config "socialbytes.com/main/pkg/Config"
)

var (
	db *gorm.DB
)

type Event struct {
	gorm.Model
	Id          uint   `gorm:"primaryKey","AUTO_INCREMENT" `
	Name        string `json:"name"`
	Description string `json:"description"`
	Details     string `json:"details"`
}

func init() {
	Config.Connect()
	db := Config.GetDB()
	db.AutoMigrate(&Event{})
}

func CreateEventstable(e *Event) {
	db.Create(&e)
}
func GetAllEvents() []Event {
	var events []Event
	db.Find(&events)
	return events
}
