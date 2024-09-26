import cgi

print("Content-type: text/html\n")

form = cgi.FieldStorage()
username = form.getvalue("username")
password = form.getvalue("password")

# Process the form data here (e.g., store it in a database)

print("<h1>Form data received</h1>")
print("<p>Username:", username, "</p>")
print("<p>Password:", password, "</p>")
