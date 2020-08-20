#!/bin/bash

# colors
red=$(tput setaf 1)
green=$(tput setaf 76)
tan=$(tput setaf 3)

success() {
  printf "${green}===> %s${reset}\n" "$@"
}

error() {
  printf "${red}===> %s${reset}\n" "$@"
}

warning() {
  printf "${tan}===> %s${reset}\n" "$@"
}

test() {
  success "If you are seeing this, the script is working"
}

build() {
  npm run build
  success "finished running npm:build"
}

work() {
  build
  cp -R dist/main.js pkg/content.js
  success "DONE!!!"
}

main() {
  # call all other functions here
  test
  work
}

# calling the main function
main
