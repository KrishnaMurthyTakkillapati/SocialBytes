package Controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	models "socialbytes.com/main/pkg/Models"
)

func CreateEvent(w http.ResponseWriter, r *http.Request) {
	fmt.Println("reached create event endpoint!!")
}

func GetEvent(w http.ResponseWriter, r *http.Request) {
	//Mock Data
	var events []models.Event
	events = append(events, models.Event{Name: "Virtual Career Fair CISE", Description: "Place to meet companies", Details: "Happens on 5th March"})
	events = append(events, models.Event{Name: "Virtual Career Fair ECE", Description: "Place to meet companies", Details: "Happens on 6th March"})

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(events)
}
