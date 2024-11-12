FROM debian:latest
RUN apt-get update && apt-get install -y bash
RUN apt-get install -y htop
RUN apt-get install -y vim
RUN apt-get install -y net-tools
RUN apt-get install -y curl
ENV OWNER="Yoyo"
RUN useradd OWNER
USER OWNER
CMD  sleep 3600 