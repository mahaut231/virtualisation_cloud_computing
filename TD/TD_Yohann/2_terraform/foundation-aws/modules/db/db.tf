variable "vpc_id" {
  description = "The ID of the VPC"
  type        = string
}

variable "security_group_id" {
  description = "The security group ID"
  type        = list(string)
}

variable "subnet_ids" {
  description = "List of Subnet IDs for the DB"
  type        = list(string)
}


variable "db_password" {
  description = "Database password"
  type        = string
  sensitive   = true
}

resource "aws_db_subnet_group" "db_subnet_group" {
  name       = "my-db-subnet-group"
  subnet_ids = var.subnet_ids

  tags = {
    Name = "DBSubnetGroup"
  }
}

resource "aws_db_instance" "mysql" {
  allocated_storage    = 20
  engine               = "mysql"
  instance_class       = "db.t2.micro"
  db_name              = "mydb"  # Correction ici: "db_name" au lieu de "name"
  username             = "admin"
  password             = var.db_password
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
  publicly_accessible  = false
  vpc_security_group_ids = var.security_group_id
   db_subnet_group_name   = aws_db_subnet_group.db_subnet_group.name
}

