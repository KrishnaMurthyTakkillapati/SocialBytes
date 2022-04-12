package models

import (
	"errors"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type Users struct {
	gorm.Model
	ID        uint `gorm:"primaryKey;not null"`
	FirstName string
	LastName  string
	Email     string
	Password  string
}

func (u *Users) CreateUsers() (*Users, error) {
	if u == nil {
		error := errors.New("User is Empty")
		return u, error
	}
	if u.FirstName == "" || u.LastName == "" || u.Email == "" || u.Password == "" {

		error := errors.New("User details incorrect")
		return u, error
	}
	pwslice, err := bcrypt.GenerateFromPassword([]byte(u.Password), 14)
	if err != nil {
		error := errors.New("Failed to encrypt the password")
		return u, error
	}
	u.Password = string(pwslice[:])

	if db.Find(&u, "Email=?", u.Email).RowsAffected > 0 {
		error := errors.New("User already exists!")
		return u, error
	}
	db.Create(&u)
	return u, nil
}

func (u *Users) Login() (*Users, error) {
	var user *Users
	if u.Email == "" || u.Password == "" {
		error := errors.New("Enter the correct UserName and Password")
		return user, error
	}
	if db.Find(&user, "Email = ?", u.Email).RowsAffected == 0 {
		error := errors.New("User don't have a account")
		return user, error
	}
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(u.Password))
	if err != nil {
		error := errors.New("Password is incorrect")
		return nil, error
	}
	user.Password = ""
	return user, nil
}

func GetUserByID(id string) Users {
	var user Users
	db.Find(&user, "ID = ?", id)
	return user
}
