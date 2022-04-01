package Controllers

import (
	"encoding/json"

	"net/http"

	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

func CreateUser(w http.ResponseWriter, r *http.Request) {

	Utils.AddCorsHeaders(w, r)
	CreateUser := &models.Users{}
	Utils.ParseBody(r, CreateUser)
	user, err := CreateUser.CreateUsers()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(map[string]string{"message": err.Error()})
		w.Write(response)
	} else {

		response, _ := json.Marshal(user)
		w.WriteHeader(http.StatusOK)
		w.Write(response)
	}

}
