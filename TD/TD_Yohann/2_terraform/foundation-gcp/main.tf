provider "google" {
    project = var.project_id
credentials = "./student.json"
    region  = var.region
}
