package Controllers

import (
	"encoding/json"
	"net/http"

	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

func JoinEvent(w http.ResponseWriter, r *http.Request) {

	Utils.AddCorsHeaders(w, r)

	AddUser := &models.Event{}
	Utils.ParseBody(r, CreateEvent)
	event, err := AddUser.JoinEvent()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(CreateEvent)
		w.Write(response)
	} else {

		response, _ := json.Marshal(event)
		w.WriteHeader(http.StatusOK)
		w.Write(response)
	}

}
