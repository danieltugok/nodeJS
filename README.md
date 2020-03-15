# nodeJS
Studying NodeJS

##GIT
Iniciando projeto no Git.
- Criando um repositório local: >git init
- Criando um repositório no GitHub: Crie um repositório no github e apenas anote a URL exibida no campo HTTP, vamos precisar dela daqui a pouco.
- Conectando o repositório local com o da web: >git remote add origin https://github.com/flaviomicheletti/github-foo.git
- Sincronizando os repositórios: >git push origin master

Gerando SSH key
> ssh-keygen -t rsa -b 4096 -C "email_do_github"

> eval "$(ssh-agent -s)"

> ssh-add ~/.ssh/id_rsa


$ sudo apt-get install xclip
# Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)

$ xclip -sel clip < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard


##NODE
>npm init

>npm install express --save

>npm install nodemon --save-dev

>npm install dotenv

>npm install mongoose --save

