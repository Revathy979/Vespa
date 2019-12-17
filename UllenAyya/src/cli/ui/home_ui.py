from ui.common_ui import CommonUI
from ui.login_ui import LoginUI
from ui.register_ui import RegisterUI
class HomeUI(CommonUI):
  

    """
    class generate user interface for Home UI
    """
    
    def launch(self):
        loginui = LoginUI() 
        registerui = RegisterUI()
        CommonUI.print_title(self)
        print('#: signin / register')
        cmd = input('#: ')
        if cmd == 'signin':
        
           loginui.launch()

        elif cmd == 'register':
            registerui.launch()

        else:
            CommonUI.print_invalid_cmd(self)
        