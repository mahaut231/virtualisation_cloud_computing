provider "google" {
    project = "esirem"
    region  = "europe-west9"
}

resource "google_compute_network" "vpc-network" {
    name = "vpc-network"
    mtu = 1460
    
}

resource "google_compute_instance" "compute-engine"{
    count = 2
    name = "compute-engine${count.index}"
    machine_type = "n2-standard-2"
    zone = "europe-west9"
    network_interface {
      network = "vpc-network"
      access_config {
    }
    }
    boot_disk {
      initialize_params {
      image = "debian-cloud/debian-11"
      labels = {
        my_label = "value"
      }
    }   
    }
}


resource "google_sql_database_instance" "database" {
  name = "sql-db"
  database_version = "POSTGRES_15"
  region = "europe-west9"
  settings{
    tier = "db-f1-micro"
    ip_configuration {
          private_network = google_compute_network.vpc-network.self_link
    }
  }
}


resource "google_dns_record_set" "enregistrementDNS"{
    name = "enregistrementDNS."
    type = "CNAME"
    ttl = 300
    managed_zone = "prod-zone"
    rrdatas = [google_compute_instance.compute-engine[0].network_interface[0].access_config[0].nat_ip]

}
