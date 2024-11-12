resource "google_dns_managed_zone" "dns_zone" {
  name     = "example-zone"
  dns_name = "example.com."
}

resource "google_dns_record_set" "dns_record" {
  name         = "www.example.com."
  managed_zone = google_dns_managed_zone.dns_zone.name
  type         = "A"
  ttl          = 300
  rrdatas = [google_compute_instance.vm_instance[0].network_interface[0].access_config[0].nat_ip]

}

