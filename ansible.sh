# Install Homebrew, if not already installed
which brew > /dev/null || ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install Ansible, if not already installed
which ansible-playbook > /dev/null || brew install ansible

# Provision machine with ansible
sudo ansible-playbook -i "localhost," -c local --become-method=su playbook.yml
