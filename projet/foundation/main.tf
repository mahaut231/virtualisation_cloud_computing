terraform {
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
    }
  }
  required_version = ">= 0.13"
}

resource "scaleway_registry_namespace" "registre" {
  name        = "registre"
  description = "Registre de conteneur principal"
  is_public   = false

}

resource "scaleway_vpc_private_network" "pn" {}

resource "scaleway_k8s_cluster" "cluster" {
  name                        = "cluster"
  version                     = "1.29.1"
  cni                         = "cilium"
  private_network_id          = scaleway_vpc_private_network.pn.id
  delete_additional_resources = false
}

#size = 3 permet de créer 3 nodes comme demandé dans l'énoncé

resource "scaleway_k8s_pool" "pool" {
  cluster_id = scaleway_k8s_cluster.cluster.id
  name       = "tf-pool"
  node_type  = "DEV1-M"
  size       = 3
}

resource "scaleway_rdb_instance" "baseDonnéesDevelopment" {
  name           = "baseDonnéesDevelopment"
  node_type      = "DB-DEV-S"
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = "my_initial_user"
  password       = "thiZ_is_v&ry_s3cret"
}

resource "scaleway_rdb_acl" "aclDevelopment" {
  instance_id = scaleway_rdb_instance.baseDonnéesDevelopment.id
  acl_rules {
    ip          = "1.2.3.4/32"
    description = "foo"
  }
}

resource "scaleway_rdb_instance" "baseDonnéesProduction" {
  name           = "baseDonnéesProduction"
  node_type      = "DB-DEV-S"
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = "my_initial_user"
  password       = "thiZ_is_v&ry_s3cret"
}

resource "scaleway_rdb_acl" "aclProduction" {
  instance_id = scaleway_rdb_instance.baseDonnéesProduction.id
  acl_rules {
    ip          = "1.2.3.4/32"
    description = "foo"
  }
}

resource "scaleway_domain_record" "entreeDev" {
  dns_zone = "calculatrice-dev-Yohann-Mahaut-polytech-dijon.kiowy.net"
  name     = "entreeProd"
  type     = "A"
  data     = scaleway_lb_ip.ipDev.ip_address
  ttl      = 3600
}

resource "scaleway_domain_record" "entreeProd" {
  dns_zone = "calculatrice-Yohann-Mahaut-polytech-dijon.kiowy.net"
  name     = "entreeDev"
  type     = "A"
  data     = scaleway_lb_ip.ipProd.ip_address
  ttl      = 3600
}

resource "scaleway_lb_ip" "ipProd" {
  zone = "fr-par-1"
}

resource "scaleway_lb" "lbProd" {
  ip_ids = [scaleway_lb_ip.ipProd.id]
  zone   = scaleway_lb_ip.ipProd.zone
  type   = "LB-S"
}

resource "scaleway_lb_ip" "ipDev" {
  zone = "fr-par-1"
}

resource "scaleway_lb" "lbDev" {
  ip_ids = [scaleway_lb_ip.ipDev.id]
  zone   = scaleway_lb_ip.ipDev.zone
  type   = "LB-S"
}