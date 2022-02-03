package models

type Event struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Details     string `json:"details"`
}
