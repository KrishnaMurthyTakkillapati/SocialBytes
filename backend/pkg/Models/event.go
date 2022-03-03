package models

import (
	"gorm.io/gorm"
	Config "socialbytes.com/main/pkg/Config"
)

var db *gorm.DB

type Event struct {
	gorm.Model
	ID          uint   `gorm:"primaryKey","AUTO_INCREMENT"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Details     string `json:"details"`
}

func init() {
	Config.Connect()
	db = Config.GetDB()
	db.AutoMigrate(&Event{})
}

func (e *Event) CreateEventstable() *Event {
	if e == nil {
		return e
	}
	if e.Description == "" || e.Name == "" || e.Details == "" {
		e = nil
		return e
	}
	db.Create(&e)
	return e
}
func GetAllEvents() []Event {
	var events []Event
	db.Find(&events)
	return events
}
