provider "aws" {
  region = var.region
  
}

module "vpc" {
  source = "./modules/vpc"
}

module "vm" {
  source              = "./modules/vm"
  vpc_id              = module.vpc.vpc_id
  security_group_ids  = [module.vpc.security_group_id]  # Passage en liste
}

module "db" {
  source            = "./modules/db"
  vpc_id            = module.vpc.vpc_id
  subnet_ids        = module.vpc.subnet_ids
  security_group_id = [module.vpc.security_group_id]    # Passage en liste
  db_password       = var.db_password
}

module "dns" {
  source    = "./modules/dns"
  public_ip = module.vm.instance_public_ips[0]  # Récupère la première IP publique
}


