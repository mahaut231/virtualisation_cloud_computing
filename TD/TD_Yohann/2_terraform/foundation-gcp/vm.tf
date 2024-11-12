resource "google_compute_instance" "vm_instance" {
count         = 3  # Créer 3 instances
 name          = "vm-instance-${count.index + 1}" 
  machine_type = var.machine_type
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-10"
    }
  }

  network_interface {
    subnetwork = google_compute_subnetwork.subnet.name

    access_config {
      # nécessaire pour l'IP publique
    }
  }

  tags = ["http-server"]

  metadata_startup_script = <<-EOT
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install -y apache2
    sudo systemctl start apache2
    sudo systemctl enable apache2
  EOT
}

