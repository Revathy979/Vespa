from service.user_service import UserService
from models.user import User
from ui.accesscardui import AccessCardUI
from service.user_log_service import UserLogService
from ui.common_ui import CommonUI
import os

class LoginUI(CommonUI):

    user_service = UserService()
    
    def launch(self):
        os.system('clear')
        CommonUI.print_title(self)
        print("sign in")
        user_name = input("User Name: ")
        password = input("Password: ")
        is_user_authenticated = self.user_service.authenticate(user_name, password)
        if is_user_authenticated == True:
            user = self.user_service.get_by_user_name(user_name)
            accesscardui = AccessCardUI(user)
            accesscardui.launch()
       
        else:  
            os.system('clear')
            CommonUI.print_title(self)
          
            print('\033[1;31mInvalid Credentials:(\033[1;m')
          


        





