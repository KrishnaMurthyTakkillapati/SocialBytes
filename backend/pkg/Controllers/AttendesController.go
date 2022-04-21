package Controllers

import (
	"encoding/json"
	"errors"
	"net/http"
	"strconv"

	"github.com/dgrijalva/jwt-go"
	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

// @Summary Join an Event
// @Description Endpoint used to add a user to an Event.
// @Tags Events
// @Success 200 {object} models.Event
// @Failure 404 {object} object
// @Router /api/joinevent [get]
func JoinEvent(w http.ResponseWriter, r *http.Request) {
	Utils.AddCorsHeaders(w, r)

	var eventData models.Event

	user, err := GetUserName(r)
	username := user.FirstName + " " + user.LastName
	if r.URL.Query().Has("id") {
		id := r.URL.Query()["id"][0]
		eventData = models.GetEventByID(id)
	}
	event, err := models.JoinEvent(username, eventData)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(event)
		w.Write(response)
	} else {

		response, _ := json.Marshal(event)
		w.WriteHeader(http.StatusOK)
		w.Write(response)
	}

}

func GetUserName(r *http.Request) (models.Users, error) {
	var user models.Users
	cookie, err := r.Cookie("jwt")
	if err != nil {
		error := errors.New("Issue with the cookie ")
		return user, error
	}
	token, err := jwt.ParseWithClaims(cookie.Value, &jwt.StandardClaims{}, func(*jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		error := errors.New("Issue with JWT token")
		return user, error
	}

	claims := token.Claims.(*jwt.StandardClaims)
	issuer64, err := strconv.ParseInt(claims.Issuer, 10, 64)

	if err != nil {
		error := errors.New("Issue in extrating user information from the jwt cookie")
		return user, error
	}
	issuer := strconv.FormatInt(issuer64, 10)
	result := models.GetUserByID(issuer)
	return result, nil
}

// @Summary Get Attendees
// @Description Endpoint used to get the list of all the attendees in an event.
// @Tags Events
// @Success 200 {object} models.Event
// @Failure 404 {object} object
// @Router /api/getAttendees [get]
func GetAttendees(w http.ResponseWriter, r *http.Request) {
	Utils.AddCorsHeaders(w, r)
	var event models.Event
	if r.URL.Query().Has("id") {
		id := r.URL.Query()["id"][0]
		event = models.GetEventByID(id)
	}
	json.NewEncoder(w).Encode(event.Attendes)
}
