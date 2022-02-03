package routes

import (
	"github.com/gorilla/mux"
	"socialbytes.com/main/pkg/Controllers"
)

var RegisterEventRoutes = func(router *mux.Router) {
	router.HandleFunc("/api/createEvent", Controllers.CreateEvent).Methods("POST")
	router.HandleFunc("/api/getEvent/{id}", Controllers.GetEvent).Methods("GET")
}
