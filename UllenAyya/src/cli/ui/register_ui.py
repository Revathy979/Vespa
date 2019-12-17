from service.user_service import UserService
import os
from models.user import User
from ui.common_ui import CommonUI

class RegisterUI(CommonUI):
        def launch(self):
                os.system('clear')
                CommonUI.print_title(self)
                print("Register")
                username = input("User Name:")
                fullname = input("Full Name:")
                password = input("Password:")
                
                user_service = UserService()
                user= User(username, fullname, password)
                user_service.register(user)