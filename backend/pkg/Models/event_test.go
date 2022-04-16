package models

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

var event *Event

func TestCreateEventsTable(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	e.Attendes = "XYZ"
	res, _ := e.CreateEventstable()
	assert.NotEqual(t, res, nil)
}

func TestCreateEventsTableEmptyAttendes(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	res, _ := e.CreateEventstable()
	assert.NotEqual(t, res, nil)
}
func TestCreateEventsTableEmpty(t *testing.T) {
	_, err := event.CreateEventstable()

	assert.Equal(t, err.Error(), "Event is Empty")
}

func TestCreateEventsTableEmptyDescription(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	e.Attendes = "XYZ"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyName(t *testing.T) {
	var e Event
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	e.Attendes = "XYZ"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyInterests(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	e.Attendes = "XYZ"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyLocation(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Image = "adsfghjrehjhgrrtfg"
	e.Attendes = "XYZ"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestCreateEventsTableEmptyDate(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Image = "adsfghjrehjhgrrtfg"
	e.Attendes = "XYZ"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}
func TestCreateEventsTableEmptyImage(t *testing.T) {
	var e Event
	e.Name = "ABC"
	e.Location = "UF"
	e.Description = "UF"
	e.Interests = []string{"X", "Y", "Z"}
	e.Date = time.Now()
	e.Attendes = "XYZ"
	_, err := e.CreateEventstable()
	assert.Equal(t, err.Error(), "Event details incorrect")
}

func TestGetEventsTable(t *testing.T) {
	res := GetAllEvents()
	assert.NotEqual(t, len(res), 0)
}

func TestCreateUsersTable(t *testing.T) {
	var u Users
	u.FirstName = "ABC"
	u.LastName = "ABC"
	u.Email = "socialbytes@gmail.com"
	u.Password = "cfvghjkloiejufhbdemkmfvg"
	res, _ := u.CreateUsers()
	assert.NotEqual(t, res, nil)
}

func TestCreateUserwithEmptyFirstName(t *testing.T) {
	var u Users
	u.FirstName = ""
	u.LastName = "ABC"
	u.Email = "socialbytes@gmail.com"
	u.Password = "cfvghjkloiejufhbdemkmfvg"
	_, err := u.CreateUsers()
	assert.Equal(t, err.Error(), "User details incorrect")
}
func TestCreateUserwithEmptyLastName(t *testing.T) {
	var u Users
	u.FirstName = "ABC"
	u.LastName = ""
	u.Email = "socialbytes@gmail.com"
	u.Password = "cfvghjkloiejufhbdemkmfvg"
	_, err := u.CreateUsers()
	assert.Equal(t, err.Error(), "User details incorrect")
}
func TestCreateUserwithEmptyEmail(t *testing.T) {
	var u Users
	u.FirstName = "ABC"
	u.LastName = "ABC"
	u.Email = ""
	u.Password = "cfvghjkloiejufhbdemkmfvg"
	_, err := u.CreateUsers()
	assert.Equal(t, err.Error(), "User details incorrect")
}

func TestCreateUserwithEmptyPassword(t *testing.T) {
	var u Users
	u.FirstName = "ABC"
	u.LastName = "ABC"
	u.Email = ""
	u.Password = "cfvghjkloiejufhbdemkmfvg"
	_, err := u.CreateUsers()
	assert.Equal(t, err.Error(), "User details incorrect")
}
func TestCreateUserwithEmptyUser(t *testing.T) {
	var u *Users
	_, err := u.CreateUsers()
	assert.Equal(t, err.Error(), "User is Empty")
}

func TestLoginwithEmptyUserNameandPassword(t *testing.T) {
	var u Login
	_, err := u.Login()
	assert.Equal(t, err.Error(), "Enter the correct UserName and Password")
}
func TestLoginwithIncorrectPassword(t *testing.T) {
	var u Users
	u.FirstName = "ABC"
	u.LastName = "ABC"
	u.Email = "socialbytes@gmail.com"
	u.Password = "cfvghjkloiejufhbdemkmfvg"
	u.CreateUsers()
	var us Login
	us.Email = "socialbytes@gmail.com"
	us.Password = "edfdgbnhgbdfsdaf"
	_, err := us.Login()
	assert.Equal(t, err.Error(), "Password is incorrect")
}
