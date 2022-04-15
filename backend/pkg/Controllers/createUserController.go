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

const (
	SecretKey = "socialbytes"
)

// @Summary Register User
// @Description Endpoint used to create an user in db.
// @Tags User
// @Success 200 {object} models.Users
// @Failure 404 {object} object
// @Router /api/register [post]
func Register(w http.ResponseWriter, r *http.Request) {

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

// @Summary Login User
// @Description Endpoint used to login an user by validating credentials and generating JWT cookie for session.
// @Tags User
// @Success 200 {object} models.Login
// @Failure 404 {object} object
// @Router /api/login [post]
func Login(w http.ResponseWriter, r *http.Request) {
	Utils.AddCorsHeaders(w, r)
	LoginUser := &models.Login{}
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

// @Summary Get User
// @Description Endpoint used to get an user details from the db.
// @Tags User
// @Success 200 {object} models.Users
// @Failure 404 {object} object
// @Router /api/getUser [get]
func GetUser(w http.ResponseWriter, r *http.Request) {
	Utils.AddCorsHeaders(w, r)
	cookie, err := r.Cookie("jwt")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(map[string]string{"message": err.Error()})
		w.Write(response)
	}
	token, err := jwt.ParseWithClaims(cookie.Value, &jwt.StandardClaims{}, func(*jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(map[string]string{"message": err.Error()})
		w.Write(response)
	}

	claims := token.Claims.(*jwt.StandardClaims)
	issuer64, err := strconv.ParseInt(claims.Issuer, 10, 64)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response, _ := json.Marshal(map[string]string{"message": err.Error()})
		w.Write(response)
	}
	issuer := strconv.FormatInt(issuer64, 10)
	result := models.GetUserByID(issuer)
	response, _ := json.Marshal(result)
	w.WriteHeader(http.StatusOK)
	w.Write(response)
}

// @Summary Logout User
// @Description Endpoint used to logout an user by deleting the JWT cookie used for mainting session.
// @Tags User
// @Success 200 {object}
// @Failure 404 {object} object
// @Router /api/login [get]
func Logout(w http.ResponseWriter, r *http.Request) {
	Utils.AddCorsHeaders(w, r)
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
