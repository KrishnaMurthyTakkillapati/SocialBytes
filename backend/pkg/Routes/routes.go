package routes

import (
	"github.com/gorilla/mux"
	"socialbytes.com/main/pkg/Controllers"
)

var RegisterEventRoutes = func(router *mux.Router) {
	router.HandleFunc("/api/createEvent", Controllers.CreateEvent).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/getEvents", Controllers.GetEvents).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/searchEvent", Controllers.GetFilteredEvents).Methods("GET", "OPTIONS")

}
