from django.core.urlresolvers import reverse
from django.conf import settings
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
import requests
import json
import urllib
from model_utils.models import TimeStampedModel, SoftDeletableModel
from model_utils.fields import StatusField, MonitorField
from model_utils import Choices, FieldTracker


@python_2_unicode_compatible
class BTC(models.Model):

	user = models.ForeignKey(settings.AUTH_USER_MODEL)
	address = models.CharField(max_length=34)
	redeem_code = models.CharField(max_length=53)
	invoice = models.CharField(max_length=53)

	def __str__(self):
		return (self.address)

	def save(self, *args, **kwargs):
		if not self.address:
			address = '13LSuh4s8CEhs9F7gCBmELnCNJ7mR4rGr9'
			callback = urllib.parse.urlencode({
				"r": self.get_absolute_url()
				})[2:]
			parameters = {
				"confirmations": 3,
				"fee_level": "low",
				}
			url = 'https://bitaps.com/api/create/payment/%s/%s' % (address, callback)
			response = requests.get(url, params=parameters)
			print(response.text)
			r = response.json()
			self.address = r['address'].encode()
			self.redeem_code = r['redeem_code'].encode()
			self.invoice = r['invoice'].encode()
			
			return super(BTC, self).save(*args, **kwargs)

	def get_absolute_url(self):
		return reverse('wallets:btc_detail', kwargs={'pk': self.pk})

'''
class BTCOutPayment(models.Model):

	FEE_LEVELS = Choices(
		('high', 'high', _('High')), 
		('medium', 'medium', _('Medium')),
		('low', 'low', _("Low")),
		)

	address = models.CharField(max_length=34)
	redeem_code = models.CharField(max_length=53)
	amount = models.CharField(max_length=50)
	#fee_level = StatusField(
	#	choices=FEE_LEVELS, 
	#	default=FEE_LEVELS.low,
	#	max_length=10)
	custom_fee = models.CharField(max_length=50, default=0)
	tx_hash = models.CharField(max_length=50)

	def __str__(self):
		return str(self.address)

	def save(self, *args, **kwargs):
		if not self.address:
			url = 'https://bitaps.com/api/use/redeemcode'
			parameters = {
				'redeemcode': self.redeem_code,
				'address': self.address,
				'amount': self.amount
				}
			response = requests.post(url, data=json.dumps(parameters))
			self.tx_hash = response.json()['tx_hash'].encode()
		return super(BTCOutPayment, self).save(*args, **kwargs)




@python_2_unicode_compatible
class ETH(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL)


    def __str__(self):
        return self.user.username

    def get_absolute_url(self):
        return reverse('wallets:eth_detail', kwargs={'pk': self.pk})
'''