from django.apps import AppConfig


class TransactionsConfig(AppConfig):
    name = 'joshuabtc.transactions'
    verbose_name = "Transactions"

    def ready(self):
        pass
