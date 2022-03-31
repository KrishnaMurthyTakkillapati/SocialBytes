package Controllers

import (
	"bytes"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCreateEventEmptyName(t *testing.T) {

	var jsonstr = []byte(`{"Name":"","Description":"UF","Location":"UF","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","ImageasBase64":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "400 Bad Request")
}

func TestCreateEventEmptyDescription(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"","Location":"UF","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","ImageasBase64":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "400 Bad Request")
}

func TestCreateEventEmptyLocation(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","ImageasBase64":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "400 Bad Request")
}
func TestCreateEventEmptyInterests(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"UF","Interests":"","Date":"\"2014-01-01T23:28:56.782Z\"","ImageasBase64":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "400 Bad Request")
}
func TestCreateEventEmptyDate(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"UF","Interests":["a", "b"],"Date":"","ImageasBase64":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "400 Bad Request")
}
func TestCreateEventEmptyImageString(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"UF","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","ImageasBase64":""}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, w.Result().Status, "400 Bad Request")
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
