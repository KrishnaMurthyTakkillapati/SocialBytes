package routes

import (
	"github.com/gorilla/mux"
	"socialbytes.com/main/pkg/Controllers"
)

var RegisterEventRoutes = func(router *mux.Router) {
	router.HandleFunc("/api/getEvent", Controllers.GetEvent).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/getEvents", Controllers.GetEvents).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/deleteEvent", Controllers.DeleteEvent).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/createEvent", Controllers.CreateEvent).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/searchEvent", Controllers.GetFilteredEvents).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/register", Controllers.Register).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/login", Controllers.Login).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/logout", Controllers.Logout).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/getUser", Controllers.GetUser).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/joinevent", Controllers.JoinEvent).Methods("POST", "OPTIONS")
}
