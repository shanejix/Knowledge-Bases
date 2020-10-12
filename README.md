# Knowledge-Bases

> Failed to connect to raw.githubusercontent.com port 443: Connection refused

GitHub的raw.githubusercontent.com域名解析被污染,通过修改hosts解决此问题

查询真实IP

https://www.ipaddress.com/

修改hosts

```sh
sudo vim /etc/hosts

```
添加如下内容：

199.232.28.133 raw.githubusercontent.com



