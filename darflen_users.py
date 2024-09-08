import requests

a = "jamied132" ##Replace with whoever you want to get the list for

k = 1
z = []
r = requests.get("https://api.darflen.com/search/users/?q=&p="+str(k))
print("loading list of every user...")
while len(r.json()["users"]) > 0:
    r = requests.get("https://api.darflen.com/search/users/?q=&p="+str(k))
    j = r.json()
    for user in j["users"]:
        z.append(user["profile"]["username"])
    k = k + 1
print("loading list of every user "+a+" is following...")
u = []
n = []
users = z
i = 1
r = requests.get("https://api.darflen.com/users/"+a+"/following/"+str(i))
while len(r.json()["following"]) > 0:
    j = r.json()
    for user in j["following"]:
        u.append(user["profile"]["username"])
    i = i + 1
    r = requests.get("https://api.darflen.com/users/"+a+"/following/"+str(i))
print("subtracting "+a+"'s following from every user...")
for user in users:
    if not user in u:
        n.append(user)
###The following converts the list, that looks like this:
###      ['user1', 'user2'...]
###Into a string that looks like this:
###      @user1 @user2...
###Delete the following to leave it as list format
        
print("Converting format...")
text = ""
for user in n:
    text = text + "@" + user + " "
n=text

###Delete up until here
print("")
print("")
print(n)
