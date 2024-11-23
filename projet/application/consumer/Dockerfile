FROM python:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Installer les dépendances directement
RUN pip install --no-cache-dir pika redis

# Copier le code du consumer
COPY . .

# Exécuter le script consumer.py
CMD ["python", "consumer.py"]
