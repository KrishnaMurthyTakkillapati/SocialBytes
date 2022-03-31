package models

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

var event *Event

func TestCreateEventsTable(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	res, _ := e.CreateEventstable()
	assert.NotEqual(t, res, nil)
}

func TestCreateEventsTableEmpty(t *testing.T) {
	_, err := event.CreateEventstable()

	assert.Equal(t, err.Error(), "Event is Empty")
}

func TestCreateEventsTableEmptyDescription(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyName(t *testing.T) {
	var e Event
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyInterests(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyLocation(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyDate(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Image = "adsfghjrehjhgrrtfg"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}
func TestCreateEventsTableEmptyImage(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}
func TestGetEventsTable(t *testing.T) {
	res := GetAllEvents()
	assert.NotEqual(t, len(res), 0)
}
