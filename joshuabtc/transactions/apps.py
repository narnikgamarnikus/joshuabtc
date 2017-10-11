from django.apps import AppConfig


class TransactionsConfig(AppConfig):
	name = 'joshuabtc.transactions'
	verbose_name = 'Купить токены'
	verbose_name_plural = 'Купить токены'

	def ready(self):
		pass
