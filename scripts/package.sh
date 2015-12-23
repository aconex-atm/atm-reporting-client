#!/usr/bin/env bash
image=${1?No image supplied}
version=${2?No version supplied}

docker tag -f $image nicholasren/atm-reporting-client:$version
docker push nicholasren/atm-reporting-client:$version