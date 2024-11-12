variable "project_id" {
  description = "ID du projet GCP"
}

variable "region" {
  description = "La région où déployer les ressources"
  default     = "europe-west1"
}

variable "zone" {
  description = "La zone de déploiement"
  default     = "europe-west1-b"
}

variable "machine_type" {
  description = "Type de machine pour la VM"
  default     = "n1-standard-1"
}

variable "db_password" {
  description = "Mot de passe pour l'instance de base de données"
  type        = string
  sensitive   = true
}

