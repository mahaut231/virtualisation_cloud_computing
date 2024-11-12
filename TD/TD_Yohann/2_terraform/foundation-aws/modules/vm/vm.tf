variable "instance_type" {
  description = "Type of EC2 instance"
  default     = "t2.micro"  # Si tu veux donner une valeur par défaut
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"  # Amazon Linux 2 AMI
  count         = 3  # Créer 3 instances
  instance_type = var.instance_type  # Utilisation de la variable instance_type
  subnet_id     = var.vpc_id
  vpc_security_group_ids = var.security_group_ids

  tags = {
    Name = "WebServer-${count.index + 1}"  # Créer des noms uniques pour chaque instance
  }

  user_data = <<-EOF
    #!/bin/bash
    sudo yum update -y
    sudo yum install -y httpd
    sudo systemctl start httpd
    sudo systemctl enable httpd
  EOF
}

output "instance_public_ips" {
  description = "Les adresses IP publiques des instances"
  value       = [for instance in aws_instance.web : instance.public_ip]
}


variable "vpc_id" {
  description = "The ID of the VPC where the EC2 instance will be launched"
  type        = string
}

variable "security_group_ids" {
  description = "List of security group IDs associated with the EC2 instance"
  type        = list(string)
}

