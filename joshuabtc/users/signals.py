from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save

from joshuabtc.wallets.models import BTC, ETH
from .models import User

@receiver(post_save, sender=User)
def create_etc_and_btc(sender, instance, created, **kwargs):
	if created:
		btc = BTC.objects.create(user=instance)
		eth = ETH.objects.create(user=instance)