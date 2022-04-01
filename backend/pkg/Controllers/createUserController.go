package Controllers

import (
	"encoding/json"
	"errors"
	"strconv"
	"time"

	"net/http"

	"github.com/dgrijalva/jwt-go"
	models "socialbytes.com/main/pkg/Models"
	"socialbytes.com/main/pkg/Utils"
)

const (
	SecretKey = "socialbytes"
)

// @Summary Create User
// @Description Endpoint used to create an user in db.
// @Tags User
// @Success 200 {object} models.Users
// @Failure 404 {object} object
// @Router /api/createUser [post]
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

func Logout(w http.ResponseWriter, r *http.Request) {
	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    "",
		MaxAge:   -1,
		Path:     "",
		Domain:   "",
		Secure:   false,
		HttpOnly: true}
	http.SetCookie(w, cookie)
	w.WriteHeader(http.StatusOK)
	response, _ := json.Marshal(map[string]string{"message": "Sucessfully Logged out"})
	w.Write(response)
}
