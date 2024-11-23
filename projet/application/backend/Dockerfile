FROM python:latest
WORKDIR /app

# Installer directement les dépendances
RUN pip install flask flask-cors requests pika redis

# Copier le code de l'API
COPY . .

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
