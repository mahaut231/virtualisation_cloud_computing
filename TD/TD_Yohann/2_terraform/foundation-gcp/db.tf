resource "google_sql_database_instance" "db_instance" {
  name             = "db-instance"
  database_version = "MYSQL_5_7"
  region           = var.region

  settings {
    tier = "db-f1-micro"
    ip_configuration {
      ipv4_enabled = false

      private_network = google_compute_network.vpc_network.self_link  # Lien vers ta VPC
    }
  }
}

resource "google_sql_user" "db_user" {
  name     = "admin"
  instance = google_sql_database_instance.db_instance.name
  password = var.db_password
}

resource "google_sql_database" "db" {
  name     = "my_database"
  instance = google_sql_database_instance.db_instance.name
}

