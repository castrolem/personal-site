---
layout: ../../layouts/MarkdownPostLayout.astro
author: "Luis Castro"
title:  "M1 Pro Mac development setup guide"
pubDate: 2022-01-17
---
A guide to set up my M1 Pro MacBook,  why? Well, the last time I upgraded my personal computer, it was 2017 and I had a list of things that I installed on my dev setup at that point in time that honestly ins’t valid anymore for my current development process.

Heads up, the process might actually be easier than what I anticipated. Most software is now written to run on Apple Silicon.

* [Dock settings](#dock-settings)
* [Library folder on Finder sidebar](#library-folder)
* [Window management](#window-management)
* [Touchpad gestures](#touchpad-gestures)
* [Xcode tools](#xcode-tools)
* [Homebrew](#homebrew)
* [Oh My Zsh!](#oh-my-zsh)
* [SSH Key](#ssh-key)
* [GPG Key](#gpg-key)
* [Node and Yarn](#node-and-yarn)
* [Rbenv and Jekyll](#rbenv-and-jekyll)

## Dock settings
By default MacOS puts the dock at the bottom and is always displayed. I’m one of those persons that like to run the dock on the left side of the screen and also have it hide when not used. This is to maximise the vertical workspace area. I also don’t love the behaviour of Big Sur that minimises the window into a separated view, so I change this config to always minimise to the app icon.

To change these settings, go to system preferences > dock settings.

* Position of the screen > set to left,
* Check automatically hide and show the Dock.
* Check Minimise windows into application icon.

## Library folder
I like to navigate always from and easily to the User folder on my finder windows. For some reason Apple decided to remove the default check on displaying this folder but it’s still available as a setting to the user.

Open a finder window, `cmd + ,` to navigate to the preferences menu > sidebar and check your username folder.

## Window management
MacOS is great, but it lacks the great snapping tools that Windows comes with, to fix this and have control with the keyboard over window move and resizing I use an open source tool called [Rectangle](https://rectangleapp.com).

## Touchpad gestures
If you are a long time MacOS user, you might be used to drag elements on the screen with three fingers and use exposé with four fingers. This option is a bit hidden on the newest MacOS.

To enable exposé, you need to open system preferences > trackpad > check App Exposé

To enable three finger dragging. Open system preferences > accessibility > pointer control > trackpad options > check enable dragging and change it to three finger drag.

## Xcode tools
Necessary for Ruby and also to run some of the react native commands/software.

```
xcode-select --install
```

## Homebrew
The missing package manager that Mac OS should have by default, but since we need to install it. You can do it running the following command.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once it finishes installing, it will require you to run a command, you’ll need to copy to execute to make brew available whilst working in terminal. Replace {username} set to your own username

```bash
echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/{username}/.zprofile
eval $(/opt/homebrew/bin/brew shellenv)
```

Now Homebrew is available and ready to use on your terminal.

## Oh My Zsh!
So on newer versions of Mac OS, bash is gone and zsh is the default, I wanted to finally switch from Bash, so I couldn’t think of a better moment. [Oh my zsh](https://github.com/ohmyzsh/ohmyzsh)  has a bunch of default fancy themes for the terminal and shortcuts for git. It allows you to see multiple things like your current directory and git status without typing any commands, it gives you syntax highlighting and saves you a lot of time when typing repeated commands.

To install it use:
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

To extend git commands and autosuggestions:

Download zsh-autosuggestions by
```bash
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

Download zsh-syntax-highlighting by
```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

```

```bash
nano ~/.zshrc 
# find plugins=(git)
# and change to
# plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
# close and reopen terminal
```

## SSH Key
You should always set up access on GitHub trough ssh to ensure the security of your repositories. Github has  [good documentation on generating them](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) , which I followed. To generate the keys and add them to the ssh agent run (replacing {your_email} with your own email address)

```bash
ssh-keygen -t ed25519 -C "{your_email}"
eval "$(ssh-agent -s)"
```

Create an ssh file
```bash
touch ~/.ssh/config
vim ~/.ssh/config
```

Pase the following text
```txt
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

To add the key to the ssh-agent and add it to the keychain run:
```bash
ssh-add -K ~/.ssh/id_ed25519
```

Copy the key you’ve created with the command below and visit  [github.com/settings](http://github.com/settings)  and add to your GitHub SSH keys.

```bash
pbcopy < ~/.ssh/id_rsa.pub
```

## GPG Key
I like to sign in all my commits and have them verified from the source, to do so we need to install `gpg`.

```bash
brew install gpg

gpg --full-generate-key
```

I use `rsa` and the only default value I change in the process is the key size to `4096` this is because it’s the minimum required by GitHub.

Now that the key is generated, we need to get the ID and copy it.
```bash
gpg --list-secret-keys --keyid-format=long
```

From the generated list, copy the long form ID we just created. For example the gpg key ID is `3AA5C34371567BD2`

```bash
$ gpg --list-secret-keys --keyid-format=long
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot 
ssb   4096R/42B317FD4BA89E7A 2016-03-10
```

Now we need to shield the private key to copy it into GitHub.
```bash
$ gpg --armor --export 3AA5C34371567BD2
# Prints the GPG key ID, in ASCII armor format
```

Copy your GPG key, beginning with
`——BEGIN PGP PUBLIC KEY BLOCK——` and ending with
`——END PGP PUBLIC KEY BLOCK——`.

And now add it to [your GitHub account](https://docs.github.com/en/articles/adding-a-new-gpg-key-to-your-github-account) .

Now, it will ask for your password on every single commit you do, which is a bit annoying depending on how atomic your commits are, which is why I change this to be every hour or so.

```bash
vim ~/.gnupg/gpg-agent.conf

# Add to the file and save
default-cache-ttl 3600
```

## Node and Yarn
For JavaScript development, we need Node and as bonus, I like to use Yarn as my package manager instead of NPM, just because it’s faster and has a prettier console output (there are other benefits, but this are my main motivators).

```bash
brew install node
# It's recommended to install Yarn using NPM.
npm install --global yarn
# check Yarn installed correctly
yarn --version
```


## Rbenv and Jekyll
Many consider Ruby isn’t the coolest kid on the block anymore, but it offers the best development experience out there. So I still love to write and run certain things using this language.

To have a proper dev environment for Ruby development, we need to use a Ruby version manager. [Rbenv](https://github.com/rbenv/rbenv) is the smallest full feature manager out there.
```bash
brew install rbenv
# once installation finishes
# we need to init rbenv on our shell profile
rbenv init
# verify rbenv is installed correctly
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
```

I use Jekyll to run my personal website. Which depends on an old version of Ruby that it’s a bit more problematic to install on Apple Silicon hardware.

Here are the steps to get Jekyll running on M1 hardware.
```bash
# list latest stable versions:
rbenv install -l
# set export variable before running rbenv install, since it will prevent any v2 of Ruby from compiling on M1 hardware
export optflags="-Wno-error=implicit-function-declaration";
# install latest compatible version with Jekyll
rbenv install 2.6.1
# set global or shell ruby version to the installed version
rbenv global 2.6.1
rbenv rehash
rbenv which irb # should output 2.6.1
# install gems
gem install bundler jekyll
```

## Final notes
By following this steps, you should have a full fledge development environment on your Mac. I’m going to be updating some of my react-native apps this year (2022), so I expect some blog posts about the process.
