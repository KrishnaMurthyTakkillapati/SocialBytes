package Controllers

import (
	"bytes"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCreateEvent(t *testing.T) {

	var jsonstr = []byte(`{"Name":"Event 1","Description":"UF","Location":"UF","Interests":["a", "b"],"Date":"2014-01-01T23:28:56.782Z","Image":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, "200 OK", w.Result().Status)
}

func TestCreateEventEmptyName(t *testing.T) {

	var jsonstr = []byte(`{"Name":"","Description":"UF","Location":"UF","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","Image":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)
}

func TestCreateEventEmptyDescription(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"","Location":"UF","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","Image":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)
}

func TestCreateEventEmptyLocation(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","Image":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)
}
func TestCreateEventEmptyInterests(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"UF","Interests":"","Date":"\"2014-01-01T23:28:56.782Z\"","Image":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)
}
func TestCreateEventEmptyDate(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"UF","Interests":["a", "b"],"Date":"","Image":"ndffmfmbmgfm"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)
}
func TestCreateEventEmptyImageString(t *testing.T) {

	var jsonstr = []byte(`{"Name":"UF","Description":"UF","Location":"UF","Interests":["a", "b"],"Date":"\"2014-01-01T23:28:56.782Z\"","Image":""}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", bytes.NewBuffer(jsonstr))
	CreateEvent(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)
}
func TestCreateEventEmptyEvent(t *testing.T) {

	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createEvent", nil)
	CreateEvent(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)

}
func TestGetEvents(t *testing.T) {

	w := httptest.NewRecorder()
	response := httptest.NewRequest("GET", "localhost:9010/api/getEvents", nil)
	GetEvents(w, response)
	assert.Equal(t, "200 OK", w.Result().Status)

}

func TestCreateUser(t *testing.T) {

	var jsonstr = []byte(`{"ID":1,"FirstName":"hello","LastName":"brother","Email":"hellobrother@gmail.com","Password":"hello@brother123"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createUser", bytes.NewBuffer(jsonstr))
	CreateUser(w, response)
	assert.Equal(t, "200 OK", w.Result().Status)
}

func TestUserAlreadyExists(t *testing.T) {

	var jsonstr = []byte(`{"ID":1,"FirstName":"hello","LastName":"brother","Email":"hellobrother@gmail.com","Password":"hello@brother123"}`)
	w := httptest.NewRecorder()
	response := httptest.NewRequest("POST", "localhost:9010/api/createUser", bytes.NewBuffer(jsonstr))
	CreateUser(w, response)
	assert.Equal(t, "400 Bad Request", w.Result().Status)

}
