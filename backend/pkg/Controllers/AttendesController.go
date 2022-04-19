package Controllers

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/dgrijalva/jwt-go"
	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

func JoinEvent(w http.ResponseWriter, r *http.Request) {
	fmt.Print("In join event")
	Utils.AddCorsHeaders(w, r)
	AddUser := &models.Event{}
	Utils.ParseBody(r, AddUser)
	user, err := GetUserName(r)
	username := user.FirstName + " " + user.LastName
	fmt.Println(username)
	event, err := AddUser.JoinEvent(username)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(AddUser)
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
		error := errors.New("Event is Empty")
		return user, error
	}
	token, err := jwt.ParseWithClaims(cookie.Value, &jwt.StandardClaims{}, func(*jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		error := errors.New("Event is Empty")
		return user, error
	}

	claims := token.Claims.(*jwt.StandardClaims)
	issuer64, err := strconv.ParseInt(claims.Issuer, 10, 64)

	if err != nil {
		error := errors.New("Event is Empty")
		return user, error
	}
	issuer := strconv.FormatInt(issuer64, 10)
	result := models.GetUserByID(issuer)
	return result, nil
}
