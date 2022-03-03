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
