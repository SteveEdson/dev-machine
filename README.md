# dev-machine [![Build Status](https://travis-ci.org/SteveEdson/dev-machine.svg?branch=master)](https://travis-ci.org/SteveEdson/dev-machine)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FSteveEdson%2Fdev-machine.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FSteveEdson%2Fdev-machine?ref=badge_shield)

For more information, see my [blog post](https://steveedson.co.uk/ansible/dev-machine).

Runs ansible, provisioning local machine with dev tools and setup.

## Requires

Currently, Ansible and Brew. These will be automatically installed if missing.

## Usage

Simply run `./ansible.sh`.

**WARNING: This *will* install and modify packages on your machine. Read through the files in `roles/` so you know what will happen.**

### One Liner

`git clone git@github.com:SteveEdson/dev-machine.git && cd dev-machine && ./ansible.sh`

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FSteveEdson%2Fdev-machine.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FSteveEdson%2Fdev-machine?ref=badge_large)