#!/usr/bin/env bash
set -e


echo "Start application"
ssh -i ~/.ssh/etjhie.pem ubuntu@52.62.29.150 "sudo docker run -d --name=atm-reporting-client -p 80:80 \"nicholasren/atm-reporting-client:$1\""

