package Config

/* database functions */
import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func createEventstable() {
	db, _ := sql.Open("sqlite3", "./Socialbytes.db")
	query := `CREATE TABLE IF NOT EXISTS "Socialbytes" (
		"ID"	INTEGER NOT NULL UNIQUE,
		"NAME"	TEXT NOT NULL,
		"LOCATION"	TEXT NOT NULL,
		PRIMARY KEY("ID" AUTOINCREMENT)
	)`
	st, _ := db.Prepare(query)
	st.Exec()
}
