echo build version: $1
echo build message: $2

gulp clean
gulp build
git add .
git commit -am "$2"
git tag -a $1 -m "$2"

