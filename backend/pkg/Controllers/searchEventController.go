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
	SearchEvents := &models.SearchEventStruct{}
	if r.URL.Query().Has("location") && r.URL.Query().Has("name") {
		SearchEvents.Location = r.URL.Query()["location"][0]
		SearchEvents.Name = r.URL.Query()["name"][0]
	} else if r.URL.Query().Has("name") {
		SearchEvents.Name = r.URL.Query()["name"][0]
	} else if r.URL.Query().Has("location") {
		SearchEvents.Location = r.URL.Query()["location"][0]
	} else if r.URL.Query().Has("startDate") && r.URL.Query().Has("endDate") {
		SearchEvents.StartDate = r.URL.Query()["startDate"][0]
		SearchEvents.EndDate = r.URL.Query()["endDate"][0]
	}
	events = SearchEvents.SearchEvent()
	json.NewEncoder(w).Encode(events)
}
