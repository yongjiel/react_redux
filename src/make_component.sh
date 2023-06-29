#!/bin/bash 
mkdir -p src/components/$1
touch src/components/$1/$1.scss

sed -e "s/COMPONENT_NAME/$1/g" ~/code_templates/component.js > src/components/$1/index.js