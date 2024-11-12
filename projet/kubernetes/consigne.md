# Code pour Kubernetes

   

    kubectl create namespace <Yoyo - May>

#######

## ingress.yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-rule
spec:
  rules:
  - host: "calculatrice-yoyo-may-polytech-dijon.kiowy.net"
    http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: svc-front
            port:
              number: 80
```




## front.yaml

    apiVersion: apps/v1
    kind: ReplicaSet
    metadata:
      labels:
        app: front
      name: front-replicaset
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: pod-front
      template:
        metadata:
          labels:
            app: pod-front
        spec:
          containers:
          - image: "A importer avec containeurisation"
            name: pod-front
            ports:
            - name: http
              containerPort: 80
              protocol: TCP
Ensuite :

    kubectl expose replicaset <front-replicaset>



## api.yaml


      apiVersion: apps/v1
        kind: ReplicaSet
        metadata:
          labels:
            app: api
          name: api-replicaset
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: pod-api
          template:
            metadata:
              labels:
                app: pod-api
            spec:
              containers:
              - image: "A importer avec containeurisation"
                name: pod-api
                ports:
                - name: http
                  containerPort: 80
                  protocol: TCP

Ensuite :

    kubectl expose replicaset <api-replicaset>

## consumer.yaml
 

    apiVersion: apps/v1
            kind: ReplicaSet
            metadata:
              labels:
                app: consumer
              name: consumer-replicaset
            spec:
              replicas: 1
              selector:
                matchLabels:
                  app: pod-consumer
              template:
                metadata:
                  labels:
                    app: pod-consumer
                spec:
                  containers:
                  - image: ?
                    name: pod-consumer
                    ports:
                    - name: http
                      containerPort: 80
                      protocol: TCP
Ensuite :

    kubectl expose replicaset <consumer-replicaset>

## redis.yaml

     apiVersion: apps/v1
                kind: ReplicaSet
                metadata:
                  labels:
                    app: redis
                  name: redis-replicaset
                spec:
                  replicas: 1
                  selector:
                    matchLabels:
                      app: Redispod
                  template:
                    metadata:
                      labels:
                        app: Redispod
                    spec:
                      containers:
                      - image: redis:5.0.4
                        name: redis
                        ports:
                        - containerPort: 6379
Ensuite :

    kubectl expose replicaset <redis-replicaset>

## rabbitmq.yaml

    apiVersion: apps/v1
                    kind: ReplicaSet
                    metadata:
                      labels:
                        app: redis
                      name: rabbitmq-replicaset
                    spec:
                      replicas: 1
                      selector:
                        matchLabels:
                          app: RabbitMQpod
                      template:
                        metadata:
                          labels:
                            app: RabbitMQpod
                        spec:
                          containers:
                          - image: rabbitmq
                            name: rabbitmq
                            ports:
                            - containerPort: 15672
Ensuite :

    kubectl expose replicaset <rabbitmq-replicaset>

                          



