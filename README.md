# shopping_cart

Folder Structure Conventions
============================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── docker-compose.yml                   
    ├── frontend                          
    │   └── v1
    │       ├── Dockerfile
    │       ├── src
    │       │   ├── helpers
    │       │   ├── views
    │       │   │   └── <view-name>
    │       │   │        ├── index.jsx
    │       │   │        └── styles.js
    │       │   ├── modules
    │       │   │   ├── <domain-name>
    │       │   │   │    ├── index.jsx
    │       │   │   │    ├── styles.js
    │       │   │   │    └── testIndex.jsx
    │       │   │   └── common
    │       │   │       └── <components-name>
    │       │   │            ├── index.jsx
    │       │   │            ├── styles.js
    │       │   │            └── testIndex.jsx
    │       │   ├── middlewares
    │       │   ├── theme
    │       │   ├── App.jsx
    │       │   ├── sagas.js
    │       │   ├── reducers.js
    │       │   ├── index.js
    │       │   ├── Routes.jsx
    │       │   └── stores.js
    │       ├── public
    │       ├── jest.test.config
    │       ├── package.json
    │       └── setupTests.js
    ├── backend              
    │   └── v1
    │       ├── Dockerfile
    │       ├── tests
    │       ├── uwsgi
    │       │   └── uwsgi.ini
    │       ├── app
    │       │   ├── models
    │       │   │   └── <table-name>.py
    │       │   └── <domain-name>
    │       │        ├── controller.py
    │       │        ├── model.py
    │       │        ├── route.py
    │       │        └── form.py
    │       ├── manage.py
    │       ├── config.py
    │       └── requirements.txt
    ├── mockserver                    
    └── README.md
