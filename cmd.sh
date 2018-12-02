echo "---------------------------"
echo -n ""
cd /usr/share/nginx/html/website/
git add .
git commit -m "qqserver"
git pull
echo -n ""
echo "---------------------------"
echo -n ""
echo "时间："
date "+%Y,%B,%d,%A."