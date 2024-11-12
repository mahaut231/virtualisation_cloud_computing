variable "region" {
  description = "AWS region"
  default     = "eu-west-3"
}

variable "instance_type" {
  description = "Type of EC2 instance"
  default     = "t2.micro"
}

variable "db_password" {
  description = "Database password"
  type        = string
  sensitive   = true
}


