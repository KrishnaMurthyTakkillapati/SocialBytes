package models

import (
	"errors"

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

func (e *Event) CreateEventstable() (*Event, error) {
	if e == nil {
		error := errors.New("Event is Empty")
		return e, error
	}
	if e.Description == "" || e.Name == "" || e.Details == "" {

		error := errors.New("Event details incorrect")
		return e, error
	}
	db.Create(&e)
	return e, nil
}
func GetAllEvents() []Event {
	var events []Event
	db.Find(&events)

	return events
}
