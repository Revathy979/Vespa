import time
import json
import os.path
from models.userlog import UserLog
from service.user_service import UserService
from datetime import datetime

class UserLogService(object):
    """
    Manges User Log data
    """
    user_logs = []
    userservice=UserService()
    def __init__(self):
        if os.path.exists('data.json'):
            with open("data.json") as out:
                self.user_logs = json.load(out)
        
    def punch_in(self, user_name):
        user_log = UserLog(user_name,types ="in")
        self.user_logs.append(user_log.as_serializable())
        self.write_file()
        return user_log.time_stamp

    def punch_out(self, user_name):
        user_log = UserLog(user_name,types ="out")
        self.user_logs.append(user_log.as_serializable())
        self.write_file()
        return user_log.time_stamp
    

    def get_by_user_name(self, user_name):
        user_logs = list(filter(lambda x: x['user_name'] == user_name, self.user_logs))
        date_time_log = list(map(self.map_date_time, user_logs))
        logged_dates = list(map(lambda x: x['date'], date_time_log))
        logged_unique_dates = list(dict.fromkeys(logged_dates))
        user_timesheet = []
        for date in logged_unique_dates:
            in_times = [d["time"] for d in date_time_log if d['date'] == date and d["types"] == "in"]
            out_times = [d["time"] for d in date_time_log if d['date'] == date and d["types"] == "out"]
            out_time = "-"
            if any(out_times):
                out_time = max(out_times)
            timesheet = {
                "date" : date,
                "in_time" : min(in_times),
                "out_time" : out_time
            }
            user_timesheet.append(timesheet)
        return user_timesheet
    
    def write_file(self):
        with open("data.json",'w') as out:
            json.dump( self.user_logs, out)

    def map_date_time(self, timestamp_log):
        time_stamp = datetime.strptime(timestamp_log["time_stamp"], "%d/%m/%Y %H:%M:%S")
        date_time_log={

            "date":time_stamp.strftime("%d/%m/%Y"),
            "time":time_stamp.strftime("%H:%M:%S"),
            "types" :timestamp_log["types"]
        }
        return date_time_log

    