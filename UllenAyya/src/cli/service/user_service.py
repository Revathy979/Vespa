import json
import os.path
from models.user import User


class UserService(object):
    reg = []
    USER_DATA_FILE = "user_data.json" 

    def __init__(self):
        if os.path.exists(self.USER_DATA_FILE):
            with open(self.USER_DATA_FILE) as f:
                self.reg = json.load(f)
    
    def authenticate(self, user_name, password):
        for user in self.reg:
            if user["user_name"] == user_name and user["password"] == password:
                return True

    def register(self,user):
        reg_user = User(user.user_name,user.full_name,user.password)
        self.reg.append(reg_user.reg_data())
        with open(self.USER_DATA_FILE,'w') as f:
            json.dump( self.reg, f)
    
    def get_by_user_name(self, user_name):
        for user in self.reg:
            if user["user_name"] == user_name:
                return user

        



        