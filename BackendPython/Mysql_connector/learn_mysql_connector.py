# we are going to use a package
import mysql.connector

# then we are going to connect to the database.
my_database = mysql.connector.connect(
    host="localhost",
    user="root",
    password="M6a2r7k5",
    database="HouseFinder"
)

# let's check if the connection has been done
if my_database.is_connected():
    print("the database is connected")
else:
    print("an error occurred")

# let's create a cursor which will allow us to give commands to mysql.
cursor = my_database.cursor()

# let's give the database a command
# we are going to use the commands we learned in the mysql tutorials.
cursor.execute("SHOW TABLES")

# let's get the results from the executed command
results = cursor.fetchall()

print(results)