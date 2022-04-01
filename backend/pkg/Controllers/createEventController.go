package Controllers

import (
	"encoding/json"
	"errors"
	"net/http"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

var NewEvent models.Event

const (
	SecretKey = "socialbytes"
)

// @Summary Create Event
// @Description Endpoint used to create an entry of the event in db.
// @Tags Events
// @Success 200 {object} models.Event
// @Failure 404 {object} object
// @Router /api/createEvent [post]
func CreateEvent(w http.ResponseWriter, r *http.Request) {

	Utils.AddCorsHeaders(w, r)

	CreateEvent := &models.Event{}
	Utils.ParseBody(r, CreateEvent)
	event, err := CreateEvent.CreateEventstable()
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
func Login(w http.ResponseWriter, r *http.Request) {
	Utils.AddCorsHeaders(w, r)
	LoginUser := &models.Users{}
	Utils.ParseBody(r, LoginUser)
	user, err := LoginUser.Login()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(map[string]string{"message": err.Error()})
		w.Write(response)
	} else {

		claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
			Issuer:    strconv.Itoa(int(user.ID)),
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
		})

		token, err := claims.SignedString([]byte(SecretKey))
		if err != nil {
			er := errors.New("Login Failed")
			w.WriteHeader(http.StatusBadRequest)
			response, _ := json.Marshal(map[string]string{"message": er.Error()})
			w.Write(response)
		}
		cookie := &http.Cookie{
			Name:     "jwt",
			Value:    token,
			MaxAge:   3600,
			Path:     "/",
			Domain:   "localhost",
			Secure:   false,
			HttpOnly: true}

		http.SetCookie(w, cookie)
		response, _ := json.Marshal(user)
		w.WriteHeader(http.StatusOK)
		w.Write(response)

	}
}
