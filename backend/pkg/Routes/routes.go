package routes

import (
	"github.com/gorilla/mux"
	"socialbytes.com/main/pkg/Controllers"
)

var createEventRoutes = func(router *mux.Router) {
	router.HandleFunc("/createEvent/", Controllers.CreateEvent).Methods("GET")
}

var getEventRoutes = func(router *mux.Router) {
	router.HandleFunc("/createEvent/", Controllers.GetEvent).Methods("GET")
}
