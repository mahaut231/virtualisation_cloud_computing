resource "google_compute_network" "vpc_network" {
  name = "vpc-europe"
}

resource "google_compute_subnetwork" "subnet" {
  name          = "subnet-europe"
  network       = google_compute_network.vpc_network.name
  ip_cidr_range = "10.0.0.0/16"
  region        = var.region
}

