package models

import (
	"errors"
	"fmt"

	"time"

	"github.com/lib/pq"
	"gorm.io/gorm"
	Config "socialbytes.com/main/pkg/Config"
)

var db *gorm.DB

type Event struct {
	gorm.Model
	ID          string `gorm:"primaryKey"`
	Name        string
	Description string
	Location    string
	Interests   pq.StringArray `gorm:"type:text[]"`
	Date        time.Time
	Image       string
	Attendes    string
}

type SearchEventStruct struct {
	Name      string
	Location  string
	StartDate string
	EndDate   string
}

func init() {
	Config.Connect()
	db = Config.GetDB()
	db.AutoMigrate(&Users{})
	db.AutoMigrate(&Event{})

}

func (e *Event) CreateEventstable() (*Event, error) {
	if e == nil {
		error := errors.New("Event is Empty")
		return e, error
	}
	if e.Description == "" || e.Name == "" || e.Location == "" || e.Image == "" || len(e.Interests) <= 0 || e.Date.IsZero() || e.Attendes == "" {

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
func GetEventByID(id string) Event {
	var event Event
	db.Find(&event, "ID = ?", id)
	return event
}

func DeleteEventByID(id string) Event {
	var event Event
	db.Delete(&event, "ID = ?", id)
	return event
}

func (se *SearchEventStruct) SearchEvent() []Event {
	var events []Event
	if se.Name != "" && se.Location != "" {
		name := fmt.Sprintf("%%%s%%", se.Name)
		location := fmt.Sprintf("%%%s%%", se.Location)
		db.Where("Name LIKE ? AND Location LIKE ?", name, location).Find(&events)
	} else if se.Name != "" {
		name := fmt.Sprintf("%%%s%%", se.Name)
		db.Where("Name LIKE ?", name).Find(&events)
	} else if se.Location != "" {
		location := fmt.Sprintf("%%%s%%", se.Location)
		db.Where("Location LIKE ?", location).Find(&events)
	} else if se.StartDate != "" && se.EndDate != "" {
		db.Where("Date BETWEEN ? AND ?", se.StartDate, se.EndDate).Find(&events)
	}
	return events
}
func (e *Event) JoinEvent() (*Event, error) {
	var event *Event
	if e.Attendes == "" {
		error := errors.New("Empty user cannot join the event")
		return nil, error
	}
	db.Find(&event, "ID = ?", e.ID)
	event.Attendes += "," + e.Attendes
	if err := db.Model(&event).Where("ID=?", e.ID).Update("Attendes", event.Attendes).Error; err != nil {
		error := errors.New("User cannot join the event")
		return nil, error
	}
	return event, nil
}
