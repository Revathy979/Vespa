import time;
import os;
import json;
import os.path;
stored_user_data=[]
LOG_FILE_NAME = "users_logs.json"
def read_existing_data():
    global stored_user_data
    with open(LOG_FILE_NAME) as out:
        stored_user_data= json.load(out)
        
class User:
    """Describes user model and functionality"""
    def __init__(self,user_name):
        self.user_name = user_name


    def sign_in(self):
        entry_time = time.asctime(time.localtime(time.time()))
        sign_in_log = {
            'email_id': self.user_name,
            'logged_in_time' : entry_time
        }
        stored_user_data.append(sign_in_log)

        with open(LOG_FILE_NAME,'w') as out:
            json.dump(stored_user_data, out)
        print("Good morning!")

    def show(self):
        found_logs=[]
        for user_log in stored_user_data:
            if user_log['email_id'] == self.user_name :
                found_logs.append(user_log)
        print(found_logs)




print("Ullen Ayya v1.0")

if os.path.exists(LOG_FILE_NAME):
    read_existing_data()

user_name = input("User Id:")



os.system('clear')

print("Ullen Ayya v1.0")

cmd = input("#: ")
obj = User(user_name)
if cmd == 'signin':
    obj.sign_in()
elif cmd == 'show' :
    obj.show()
else :
    print("Invalid Command!!!")

    
        
