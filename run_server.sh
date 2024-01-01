#!/bin/bash

# start the REST API server in one shell
npx --yes tsx dist/server &

# start an async task queue runner in another shell
npx --yes tsx dist/runner &

# wait for any process to exit
wait -n

# exit with status of process that exited first
exit $?