package Config

/* database functions */
import (
	_ "github.com/mattn/go-sqlite3"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var (
	db *gorm.DB
)

func Connect() {
	d, err := gorm.Open(sqlite.Open("Socialbytes.db"), &gorm.Config{})
	if err != nil {
		panic("Can't connect to DB")
	}
	db = d
}
func GetDB() *gorm.DB {
	return db
}
