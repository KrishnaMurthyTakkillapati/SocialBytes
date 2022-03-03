package models

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

var empty Event
var event *Event

func TestCreateEventsTableEmpty(t *testing.T) {
	assert.Equal(t, empty.CreateEventstable(), event)
}

func TestCreateEventsTableEmptyDescription(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Details = "UF"
	assert.Equal(t, e.CreateEventstable(), event)
}
