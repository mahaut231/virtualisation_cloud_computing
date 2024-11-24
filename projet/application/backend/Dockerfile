FROM python:latest

WORKDIR /app

RUN pip install flask flask-cors requests pika redis

# Installer dockerize
RUN apt-get update && \
    apt-get install -y curl && \
    curl -L https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz -o /tmp/dockerize.tar.gz && \
    tar -xvzf /tmp/dockerize.tar.gz -C /usr/local/bin && \
    rm /tmp/dockerize.tar.gz


COPY . .

EXPOSE 5000

# Utiliser dockerize pour attendre que RabbitMQ et Redis soient prêts avant de démarrer Flask
CMD ["dockerize", "-wait", "tcp://rabbitmq:5672", "-wait", "tcp://redis:6379", "-timeout", "60s", "flask", "run", "--host=0.0.0.0", "--port=5000"]
