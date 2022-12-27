#!/bin/bash

expected="1";
count="0";
while ! [ "$count" == "$expected" ];
 do
  count=$(curl -XGET 'http://localhost:4001/get_active_connections');
  sleep 10;
done
curl -XPOST 'http://localhost:4001/stop_server'
echo "Done"


