FROM python:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Installer les dépendances Python
RUN pip install --no-cache-dir pika redis

# Installer curl et dockerize
RUN apt-get update && apt-get install -y curl && \
    curl -L https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz -o /tmp/dockerize.tar.gz && \
    tar -xvzf /tmp/dockerize.tar.gz -C /usr/local/bin && \
    rm /tmp/dockerize.tar.gz

# Copier le code du consumer
COPY . .

# Utiliser Dockerize pour attendre que RabbitMQ soit prêt avant de démarrer le consommateur
CMD ["dockerize", "-wait", "tcp://rabbitmq:5672", "-timeout", "30s", "python", "consumer.py"]
