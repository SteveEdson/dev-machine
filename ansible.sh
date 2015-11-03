which brew > /dev/null || ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
which ansible-playbook > /dev/null || brew install ansible

ansible-playbook -i "localhost," -c local -v playbook.yml
