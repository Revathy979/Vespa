from service.user_log_service import UserLogService
from ui.common_ui import CommonUI
from ui.timesheet_ui import TimeSheetUI
import os

class AccessCardUI(CommonUI):
    
    def __init__(self, user):
        self.user = user
    def launch(self):
        os.system("clear")
        CommonUI.print_title(self)
        print("# pin / pout / show")
        access_cmd = input("#: ")
        user_log_service = UserLogService()
        if access_cmd == "pin":
            pin_time=user_log_service.punch_in(self.user["user_name"])
            print("Punched in @ ", pin_time)
          
        elif access_cmd == "pout":
            pout_time= user_log_service.punch_out(self.user["user_name"])
            print("Punched out @ ", pout_time)
          
        elif access_cmd == "show":
            timesheet_ui = TimeSheetUI(self.user)
            timesheet_ui.launch()
           
        else:
            print("Invalid command!!")



