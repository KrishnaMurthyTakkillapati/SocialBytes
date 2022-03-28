package Controllers

import (
	"encoding/json"
	"net/http"

	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

// @Summary Get Filtered Events
// @Description Endpoint used to get all events based on the filter from db.
// @Tags Events
// @Success 200 {object} models.Event
// @Failure 404 {object} object
// @Router /api/searchEvent [get]
func GetFilteredEvents(w http.ResponseWriter, r *http.Request) {

	Utils.AddCorsHeaders(w, r)
	var events []models.Event
	if r.URL.Query().Has("location") && r.URL.Query().Has("name") {
		location := r.URL.Query()["location"]
		name := r.URL.Query()["name"]

		events = models.SearchEvent(name[0], location[0])
	} else if r.URL.Query().Has("name") {
		name := r.URL.Query()["name"]

		events = models.SearchEvent(name[0], "")
	} else if r.URL.Query().Has("location") {
		location := r.URL.Query()["location"]

		events = models.SearchEvent("", location[0])
	}
	json.NewEncoder(w).Encode(events)
}
