#!/usr/bin/env bash

# Install Homebrew, if not already installed
which brew > /dev/null || ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install Ansible, if not already installed
which ansible-playbook > /dev/null || brew install ansible

# Provision machine with ansible


if [ -z "$1" ];
then
    : # $1 was not given
    ansible-playbook -i "localhost," -c local --become-method=su playbook.yml
else
    : # $1 was given
    ansible-playbook -i "localhost," -c local --become-method=su playbook.yml --start-at-task "$1"
fi