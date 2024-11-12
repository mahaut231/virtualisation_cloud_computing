provider "aws" {
}


resource "aws_vpc" "vpc-amazon" {
    cidr_block = "10.0.0.0/16"

}

resource "aws_instance" "vm" {
  
}
