package models

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

var event *Event

func TestCreateEventsTableEmpty(t *testing.T) {
	_, err := event.CreateEventstable()

	assert.Equal(t, err.Error(), "Event is Empty")
}

func TestCreateEventsTableEmptyDescription(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Details = "UF"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}
func TestCreateEventsTableEmptyName(t *testing.T) {
	var e Event
	e.Description = "ABC"
	e.Details = "UF"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}
func TestCreateEventsTableEmptyDetails(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Description = "UF"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTable(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Details = "UF"
	e.Description = "UF"
	res, _ := e.CreateEventstable()
	assert.NotEqual(t, res, nil)
}
func TestGetEventsTable(t *testing.T) {
	res := GetAllEvents()
	assert.NotEqual(t, len(res), 0)
}
