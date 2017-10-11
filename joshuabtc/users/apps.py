from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'joshuabtc.users'
    verbose_name = "Users"

    def ready(self):
    	import joshuabtc.users.signals 
