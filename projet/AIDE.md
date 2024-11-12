# Part Terraform :

> https://registry.terraform.io/providers/scaleway/scaleway/latest/docs/resources/domain_record (DNS)

> https://registry.terraform.io/providers/scaleway/scaleway/latest/docs/resources/lb (loadBalancer)

> https://registry.terraform.io/providers/scaleway/scaleway/latest/docs/resources/k8s_cluster (kubernetes)
  https://registry.terraform.io/providers/scaleway/scaleway/latest/docs/resources/k8s_pool (kubernetes aussi car une pool est dans un cluster et pool <=> node?)

> https://registry.terraform.io/providers/scaleway/scaleway/latest/docs/resources/rdb_instance (base de données)

> https://registry.terraform.io/providers/scaleway/scaleway/latest/docs/resources/registry_namespace (Conteneur de registre)


## Part Kubernetes:

https://github.com/JeromeMSD/module_virtualisation-et-cloud-computing/blob/main/tds/4_kubernetes.md

>  Créer namespace
>  
##############################################
https://kubernetes.io/docs/concepts/workloads/pods/
Microservice = pod ? ==> pod-front/pod-api/pod-consumer/redis-pod/rabbitMQPod/Ingress ? (part Une charge de travail = un Pod)

*On peut directement créer les réplica, mais juste pour ma compréhension perso*

###############################################

Pour Ingress : https://kubernetes.io/docs/concepts/services-networking/ingress/

###############################################

https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/
> Création d'un replicaset de chaque pod (part Déploiement)

"https://kubernetes.io/fr/docs/concepts/services-networking/service/" à utiliser si on veut pas expose
> "expose" les replicaset afin de créer les services (part Service)

> Lien complet > A faire avec Kubernetes

> Lien pointillé > A faire dans l'app


## Part Application :

>Utiliser Flask ?

> Créer API pour addition,soustraction,division,multiplication

>> Aucune idée pour la fin.




