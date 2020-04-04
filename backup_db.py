import subprocess
import os
heroku_data = subprocess.run(['heroku', 'config:get', 'DATABASE_URL', '-a', 'rlearningblog'], stdout=subprocess.PIPE)
import psycopg2

# heroku_data_str = os.environ['DATABASE_URL']

heroku_data_str = heroku_data.stdout.decode("utf-8")
user = heroku_data_str[heroku_data_str.index("://")+3:heroku_data_str.index(":", 10)]
password = heroku_data_str[heroku_data_str.index(':', 10) + 1:heroku_data_str.index('@')]
uri = heroku_data_str[heroku_data_str.index('@') + 1:heroku_data_str.rfind(':')]
db = heroku_data_str[heroku_data_str.rfind(':')+6:-1]


"postgres://ukybxzhriesirp:8d0beeae21abb43078686e5c39eea70c821e083f30cb19ef88c04d9a6c0c81e9@ec2-3-230-106-126.compute-1.amazonaws.com:5432/d67hm7tuteu5b0"
conn = psycopg2.connect(dbname=db, user=user, password=password, host=uri)
cur = conn.cursor()


print(cur)