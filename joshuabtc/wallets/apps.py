from django.apps import AppConfig


class WalletsConfig(AppConfig):
	name = 'joshuabtc.wallets'
	verbose_name = 'Wallets'
	verbose_name_plural = 'Wallets'

	def ready(self):
		pass
