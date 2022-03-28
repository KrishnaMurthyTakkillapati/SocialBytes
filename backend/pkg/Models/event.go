package models

import (
	"errors"
	"fmt"

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

func SearchEvent(name string, location string) []Event {
	var events []Event
	if name != "" && location != "" {
		name = fmt.Sprintf("%%%s%%", name)
		location = fmt.Sprintf("%%%s%%", location)
		db.Where("name LIKE ? AND details LIKE ?", name, location).Find(&events)
	} else if name != "" {
		name = fmt.Sprintf("%%%s%%", name)
		db.Where("name LIKE ?", name).Find(&events)
	} else if location != "" {
		location = fmt.Sprintf("%%%s%%", location)
		db.Where("details LIKE ?", location).Find(&events)
	}
	return events
}
