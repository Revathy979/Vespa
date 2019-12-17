import time;
from datetime import datetime

class UserLog(object):

    def __init__(self, user_name, types):
        self.user_name = user_name
        self.types = types
        self.time_stamp = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    def __str__(self):
        """
        String representation of UserLog model
        """
        return "UserLog(user_name:'{}', types:'{}',time_stamp:'{}')".format(
            self.user_name, 
            self.types,
            self.time_stamp
        )
       
    
    def as_serializable(self):
         return dict(user_name = self.user_name, types = self.types, time_stamp = self.time_stamp)