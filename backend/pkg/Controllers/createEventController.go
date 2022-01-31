package Controllers

import (
	"fmt"
	"net/http"
)

func CreateEvent(w http.ResponseWriter, r *http.Request) {
	fmt.Println("reached create event endpoint!!")
}

func GetEvent(w http.ResponseWriter, r *http.Request) {
	fmt.Println("reached get event endpoint!!")
}
