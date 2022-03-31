package Controllers

import (
	"encoding/json"
	"net/http"

	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

// @Summary Delete Event
// @Description Endpoint used to delete an event from db based on id.
// @Tags Events
// @Success 200 {object} models.Event
// @Failure 404 {object} object
// @Router /api/deleteEvent [delete]
func DeleteEvent(w http.ResponseWriter, r *http.Request) {

	Utils.AddCorsHeaders(w, r)
	var event models.Event
	if r.URL.Query().Has("id") {
		id := r.URL.Query()["id"][0]
		event = models.DeleteEventByID(id)
	}
	json.NewEncoder(w).Encode(event)
}
