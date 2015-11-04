# Install Homebrew, if not already installed
which brew > /dev/null || ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install Ansible, if not already installed
which ansible-playbook > /dev/null || brew install ansible

# Provision machine with ansible
ansible-playbook -i "localhost," -c local --ask-become-pass playbook.yml
