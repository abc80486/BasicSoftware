echo "时间："
date "+%Y,%B,%d,%A."
echo -n ""
echo "---------------------------"
echo -n ""
cd /usr/share/nginx/html/website/
git add .
git commit -m "qqserver"
git pull