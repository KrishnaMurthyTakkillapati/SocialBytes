package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	routes "socialbytes.com/main/pkg/Routes"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterEventRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:9010", r))
}
