from django.apps import AppConfig


class WalletsConfig(AppConfig):
    name = 'joshuabtc.wallets'
    verbose_name = "Wallets"

    def ready(self):
        pass
