FROM nginx
COPY webapp /usr/share/nginx/html

RUN service nginx start
EXPOSE 80
