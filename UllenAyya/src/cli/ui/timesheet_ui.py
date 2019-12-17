from ui.common_ui import CommonUI
from service.user_log_service import UserLogService
import os
class TimeSheetUI(CommonUI):
    def __init__(self, user):
        self.user = user
        self.user_log_service = UserLogService()
    def launch(self):
        os.system('clear')
        CommonUI.print_title(self)
        print("Timesheet")
        print("Name : ", self.user["user_name"])
        user_timesheet = self.user_log_service.get_by_user_name(self.user["user_name"])
      
        print("Date",end = '              ' )
        print("In_Time",end='             ')
        print("Out_Time")
        for d in user_timesheet:
            print(d['date'],end='         ')
            print(d['in_time'],end='           ')
            print(d['out_time'])

    