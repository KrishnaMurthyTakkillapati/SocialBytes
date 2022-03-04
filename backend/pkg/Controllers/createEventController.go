package Controllers

import (
	"encoding/json"
	"net/http"

	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

var NewEvent models.Event

func CreateEvent(w http.ResponseWriter, r *http.Request) {

	Utils.AddCorsHeaders(w, r)

	CreateEvent := &models.Event{}
	Utils.ParseBody(r, CreateEvent)
	event, _ := CreateEvent.CreateEventstable()
	response, _ := json.Marshal(event)
	w.WriteHeader(http.StatusOK)
	w.Write(response)

}

func GetEvents(w http.ResponseWriter, r *http.Request) {

	Utils.AddCorsHeaders(w, r)
	events := models.GetAllEvents()
	json.NewEncoder(w).Encode(events)
}
