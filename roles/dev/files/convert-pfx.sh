#!/usr/bin/env bash
openssl pkcs12 -in $1 -clcerts -nokeys -out $2.cer
openssl pkcs12 -in $1 -nocerts -nodes  -out $2.key
openssl pkcs12 -in $1 -out $2-ca.crt -nodes -nokeys -cacerts
