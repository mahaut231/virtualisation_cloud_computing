resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www.example.com"
  type    = "A"
  ttl     = "300"
  records = [var.public_ip]
}

resource "aws_route53_zone" "main" {
  name = "example.com"
}

variable "public_ip" {
  description = "The public IP of the instance"
  type        = string
}

