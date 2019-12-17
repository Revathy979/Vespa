class User(object):
    
    def __init__(self, user_name, full_name, password):
        self.user_name = user_name
        self.full_name = full_name
        self.password = password



    def reg_data(self):
        return dict(user_name= self.user_name , 
        full_name = self.full_name,
        password= self.password)