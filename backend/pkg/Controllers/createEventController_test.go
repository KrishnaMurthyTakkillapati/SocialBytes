package Controllers

import (
	"bytes"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCreateEvent(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Details":"UF"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "200 OK")

}
func TestCreateEventEmptyEvent(t *testing.T) {

	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", nil)
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "400 Bad Request")

}
func TestGetEvents(t *testing.T) {

	w := httptest.NewRecorder()
	response := httptest.NewRequest("GET", "localhost:9010/api/getEvents", nil)
	GetEvents(w, response)
	assert.Equal(t, w.Result().Status, "200 OK")

}
